import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/api'; // Ajusta esta URL según sea necesario
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { usuario, password }).pipe(
      tap(response => {
        if (response.codigo === 200 && response.payload && response.payload.length > 0) {
          localStorage.setItem('token', response.jwt);
          localStorage.setItem('datosUsuario', JSON.stringify(response.payload[0])); // Guarda los datos del usuario
          this.loggedInSubject.next(true);
        } else {
          throw new Error('Respuesta del servidor no válida');
        }
      })
    );
  }

  logout(): void {
    localStorage.clear(); // Limpia completamente el localStorage
    this.loggedInSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }


















  getDatosUsuario(): any {
    const datosUsuario = localStorage.getItem('datosUsuario');
    return datosUsuario ? JSON.parse(datosUsuario) : null;
  }
  
}