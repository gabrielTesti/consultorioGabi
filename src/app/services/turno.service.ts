import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../interfaces/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  private apiUrl = 'http://localhost:4000/api'; // Ajusta esta URL según sea necesario

  constructor(private http: HttpClient) { }

  agregarTurno(turno: Turno): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    });
    return this.http.post<any>(`${this.apiUrl}/asignarTurnoPaciente`, turno, { headers });
  }

  obtenerTurnos(): Turno[] {
    // Implementación existente
    return [];
  }

  obtenerMedicosPorFecha(fecha: string) {
    // Implementación existente
  }

  // ordenar del mas antiguo al mas nuevo
  private ordenarTurnos() {
    // Implementación existente
  }
}