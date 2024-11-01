import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
    this.authService.login(this.usuario, this.password).subscribe(
      response => {
        if (response.codigo === 200) {
          localStorage.setItem('token', response.jwt);
          this.router.navigate(['/dashboard']); // Redirige al dashboard u otra ruta
        } else {
          alert('Usuario o contraseña incorrecta');
        }
      },
      error => {
        console.error('Error en el login', error);
        alert('Ocurrió un error en el login');
      }
    );
  }
}