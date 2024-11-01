import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../interfaces/LoginResponse';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (this.usuario && this.password) {
      this.authService.login(this.usuario, this.password).subscribe(
        (response: LoginResponse) => {
          console.log('Respuesta del backend:', response); // Añadir log para verificar la respuesta
          if (response.codigo === 200) {
            console.log('Login exitoso', response);
            if (response.jwt) {
              localStorage.setItem('token', response.jwt);
            } else {
              console.error('Token is undefined');
              alert('Token is undefined');
            }
            if (response.payload && response.payload.length > 0) {
              const user = response.payload[0];
              sessionStorage.setItem('datosUsuario', JSON.stringify(user));
              if (user.rol) {
                localStorage.setItem('rol', user.rol);
                this.redirigirSegunRol(user.rol);
              } else {
                console.error('Rol is undefined');
                alert('Rol is undefined');
              }
            } else {
              console.error('Payload is undefined or empty');
              alert('Payload is undefined or empty');
            }
          } else {
            console.error('Error de login', response.mensaje);
            alert(response.mensaje || 'Usuario o contraseña incorrecta');
          }
        },
        error => {
          console.error('Error en la petición', error);
          alert('Ocurrió un error en el login');
        }
      );
    } else {
      console.error('Nombre o contraseña no pueden estar vacíos');
      alert('Nombre o contraseña no pueden estar vacíos');
    }
  }

  redirigirSegunRol(rol: string) {
    switch (rol) {
      case 'administrador':
        this.router.navigate(['/admin']);
        break;
      case 'medico':
        this.router.navigate(['/medico']);
        break;
      case 'operador':
        this.router.navigate(['/operador']);
        break;
      case 'paciente':
        this.router.navigate(['/pacientes']);
        break;
      default:
        console.error('Rol desconocido:', rol);
        alert('Rol desconocido');
    }
  }
}