import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginResponse } from '../interfaces/LoginResponse';  
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/api'; // Ajusta esta URL según sea necesario
  private loggedIn = false;

  constructor(private http: HttpClient) { }

  // Método para cerrar sesión
  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('token');
  }

  // Método para verificar si el usuario está logueado
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Método para iniciar sesión con DNI y contraseña
  login(dni: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { dni, password }).pipe(
      tap(response => {
        if (response.success) {
          this.loggedIn = true;
          // Almacenar el token en el local storage o en una variable
          localStorage.setItem('token', response.token!);
        }
      })
    );
  }
}