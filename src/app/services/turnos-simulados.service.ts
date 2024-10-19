import { Injectable } from '@angular/core';
import { Turno } from '../interfaces/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnosSimuladosService {
  private turnosSimulados: Turno[] = [
    {
      cobertura: 'PAMI',
      especialidad: 'Pediatría',
      profesional: 'Dr. Juan Pérez',
      fecha: '2024-10-12',
      hora: '09:00',
      notas: 'Control de crecimiento'
    },
    {
      cobertura: 'PAMI',
      especialidad: 'Odontología',
      profesional: 'Dr. Juan Pérez',
      fecha: '2024-10-13',
      hora: '09:00',
      notas: 'Control de crecimiento'
    },
    {
      cobertura: 'IAPOS',
      especialidad: 'Cardiología',
      profesional: 'Dra. Ana Gómez',
      fecha: '2024-10-19',
      hora: '10:00',
      notas: 'Chequeo de rutina'
    },
    {
      cobertura: 'IAPOS',
      especialidad: 'Odontología',
      profesional: 'Dr. Luis Fernández',
      fecha: '2024-10-12',
      hora: '11:00',
      notas: 'Revisión dental'
    }
  ];

  constructor() {}

  obtenerTurnosSimulados(): Turno[] {
    return this.turnosSimulados;
  }
}
