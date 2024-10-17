import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // Cambia la URL base para que coincida con tus rutas
  private apiUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Usuario[]> {
    // Ajusta la URL para que coincida con la ruta de tu backend
    return this.http.get<Usuario[]>(`${this.apiUrl}/obtenerUsuarios`);
  }

  obtenerUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/obtenerUsuario/${id}`);
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiUrl}/crearUsuario`, usuario);
  }

  actualizarUsuario(id: number, usuario: Usuario): Observable<any> {
    return this.http.put(`${this.apiUrl}/actualizarUsuario/${id}`, usuario);
  }
}
