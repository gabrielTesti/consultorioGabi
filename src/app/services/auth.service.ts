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
 

  constructor(private http: HttpClient) { }

  // Método para cerrar sesión
  login(usuario: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { usuario, password });
  }
}