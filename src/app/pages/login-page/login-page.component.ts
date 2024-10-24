import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  dni: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.dni, this.password).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('Login exitoso:', response);
          // Redirigir a la página principal u otra página
          this.router.navigate(['/home']);
        } else {
          console.error('Error al iniciar sesión:', response.message);
          // Mostrar un mensaje de error al usuario
        }
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        // Mostrar un mensaje de error al usuario
      }
    });
  }
}