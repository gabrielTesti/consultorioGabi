import { Injectable } from '@angular/core';
import { Turno } from '../interfaces/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnosSimuladosService {
  private turnosSimulados: Turno[] = [
    // Turnos existentes (si los hay)
    {
      cobertura: 'PAMI',
      especialidad: 'Pediatría',
      profesional: 'Dra. Laura Martínez',
      fecha: '2024-10-19',
      hora: '08:30',
      notas: 'Consulta general'
    },
    {
      cobertura: 'IAPOS',
      especialidad: 'Dermatología',
      profesional: 'Dr. Carlos Suárez',
      fecha: '2024-10-19',
      hora: '09:15',
      notas: 'Chequeo de lunares'
    },
    {
      cobertura: 'Swiss Medical',
      especialidad: 'Traumatología',
      profesional: 'Dr. José Rodríguez',
      fecha: '2024-10-19',
      hora: '10:45',
      notas: 'Dolor de rodilla'
    },
    {
      cobertura: 'OSDE',
      especialidad: 'Ginecología',
      profesional: 'Dra. Marta López',
      fecha: '2024-10-19',
      hora: '11:30',
      notas: 'Chequeo anual'
    },
    {
      cobertura: 'IOMA',
      especialidad: 'Oftalmología',
      profesional: 'Dr. Diego Castro',
      fecha: '2024-10-19',
      hora: '12:00',
      notas: 'Control de la vista'
    },
    // 5 citas para el 20/10/2024
    {
      cobertura: 'PAMI',
      especialidad: 'Cardiología',
      profesional: 'Dra. Lucía García',
      fecha: '2024-10-20',
      hora: '09:00',
      notas: 'Chequeo de presión'
    },
    {
      cobertura: 'IAPOS',
      especialidad: 'Neurología',
      profesional: 'Dr. Pablo Figueroa',
      fecha: '2024-10-20',
      hora: '09:45',
      notas: 'Consulta sobre migrañas'
    },
    {
      cobertura: 'Swiss Medical',
      especialidad: 'Odontología',
      profesional: 'Dra. Mariana Sánchez',
      fecha: '2024-10-20',
      hora: '10:30',
      notas: 'Limpieza dental'
    },
    {
      cobertura: 'OSDE',
      especialidad: 'Pediatría',
      profesional: 'Dr. Ernesto Ramírez',
      fecha: '2024-10-20',
      hora: '11:15',
      notas: 'Vacunas'
    },
    {
      cobertura: 'IOMA',
      especialidad: 'Gastroenterología',
      profesional: 'Dr. Fernando Gil',
      fecha: '2024-10-20',
      hora: '12:45',
      notas: 'Consulta sobre digestión'
    }
  ];

  obtenerTurnosSimulados(): Turno[] {
    return this.turnosSimulados;
  }
}
