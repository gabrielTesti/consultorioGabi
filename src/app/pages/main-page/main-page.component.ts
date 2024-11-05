import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private authService: AuthService) { }

  login(dni: string, password: string): void {
    this.authService.login(dni, password).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('Login exitoso:', response);
          
        } else {
          console.error('Error al iniciar sesión:', response.message);
          
        }
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        
      }
    });
  }
} 