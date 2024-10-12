import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/interfaces/turno';

@Component({
  selector: 'app-turnos-programados',
  templateUrl: './turnos-programados.component.html',
  styleUrls: ['./turnos-programados.component.css']
})
export class TurnosProgramadosComponent implements OnInit {

  turnos: Turno[] = []; // lista de turnos
  turnosFiltrados: Turno[] = [];
  fechaSeleccionada: Date = new Date(); // fecha actual
  mostrarNotas: boolean = false; 
  notasTurno: string | null = null; // notas del turno seleccionado

  ngOnInit(): void {
    this.cargarTurnos(); 
    this.filtrarTurnos(); 
  }

  cargarTurnos() {
    // simulación de carga de datos
    this.turnos = [
      {
        cobertura: 'PAMI',
        especialidad: 'Pediatría',
        profesional: 'Dr. Juan Pérez',
        fecha: '2024-10-12', // Mantener como string
        hora: '09:00',
        notas: 'Control de crecimiento'
      },
      {
        cobertura: 'PAMI',
        especialidad: 'Odontología',
        profesional: 'Dr. Juan Pérez',
        fecha: '2024-10-13', // Mantener como string
        hora: '09:00',
        notas: 'Control de crecimiento'
      },
      {
        cobertura: 'IAPOS',
        especialidad: 'Cardiología',
        profesional: 'Dra. Ana Gómez',
        fecha: '2024-10-12',
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
      },
      
      
    ];
  }

  filtrarTurnos() {
    const fechaSeleccionadaString = this.fechaSeleccionada.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    this.turnosFiltrados = this.turnos.filter(turno => {
      return turno.fecha === fechaSeleccionadaString; // Comparar como string
    });
  }

  seleccionarFecha(event: any) {
    this.fechaSeleccionada = new Date(event.value);
    this.filtrarTurnos();
  }

  mostrarNotasTurno(turno: Turno) {
    this.notasTurno = turno.notas || null; 
    this.mostrarNotas = true; 
  }
}
