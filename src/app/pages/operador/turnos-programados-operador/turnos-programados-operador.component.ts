import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TurnosSimuladosService } from 'src/app/services/turnos-simulados.service';
import { Turno } from 'src/app/interfaces/turno';
import { EditarAgendaModalComponent } from '../editar-agenda-modal/editar-agenda-modal.component';

@Component({
  selector: 'app-turnos-programados-operador',
  templateUrl: './turnos-programados-operador.component.html',
  styleUrls: ['./turnos-programados-operador.component.css']
})
export class TurnosProgramadosOperadorComponent implements OnInit { // Implementa OnInit
  medicos: { nombre: string; especialidad: string; horarioAtencion: string }[] = [];
  turnosConfirmados: Turno[] = [];
  medicoSeleccionado: string | null = null;
  fechaSeleccionada: string = ""; // Mantiene la declaración de la variable

  constructor(private turnosSimuladosService: TurnosSimuladosService, private dialog: MatDialog) {
    this.medicos = [
  { nombre: 'Dr. Ernesto Ramírez', especialidad: 'Pediatría', horarioAtencion: '08:00 - 12:00' },
  { nombre: 'Dra. Lucía García', especialidad: 'Cardiología', horarioAtencion: '09:00 - 14:00' },
  { nombre: 'Dr. José Rodríguez', especialidad: 'Traumatología', horarioAtencion: '10:45 - 13:00' },
  { nombre: 'Dr. Juan Pérez', especialidad: 'Pediatría', horarioAtencion: '08:00 - 12:00' },
  { nombre: 'Dra. Ana Gómez', especialidad: 'Cardiología', horarioAtencion: '10:00 - 14:00' },
  { nombre: 'Dr. Luis Fernández', especialidad: 'Odontología', horarioAtencion: '09:00 - 13:00' },
  { nombre: 'Dra. Laura Martínez', especialidad: 'Pediatría', horarioAtencion: '08:30 - 12:00' },
  { nombre: 'Dr. Carlos Suárez', especialidad: 'Dermatología', horarioAtencion: '09:15 - 13:00' },
  { nombre: 'Dra. Marta López', especialidad: 'Ginecología', horarioAtencion: '11:30 - 15:00' },
  { nombre: 'Dr. Diego Castro', especialidad: 'Oftalmología', horarioAtencion: '12:00 - 16:00' },
  { nombre: 'Dra. Lucía García', especialidad: 'Cardiología', horarioAtencion: '09:00 - 14:00' },
  { nombre: 'Dr. Pablo Figueroa', especialidad: 'Neurología', horarioAtencion: '09:45 - 13:00' },
  { nombre: 'Dra. Mariana Sánchez', especialidad: 'Odontología', horarioAtencion: '10:30 - 14:00' },
  { nombre: 'Dr. Ernesto Ramírez', especialidad: 'Pediatría', horarioAtencion: '11:15 - 15:00' },
  { nombre: 'Dr. Fernando Gil', especialidad: 'Gastroenterología', horarioAtencion: '12:45 - 16:00' },

      
    ];
  }

  ngOnInit(): void { // Método ngOnInit
    const today = new Date();
    this.fechaSeleccionada = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD
  }

  verTurnos(medico: string): void {
    this.medicoSeleccionado = medico;
    this.turnosConfirmados = this.turnosSimuladosService.obtenerTurnosSimulados().filter(turno => turno.profesional === medico);
  }

  editarAgenda(medico: string): void {
    const dialogRef = this.dialog.open(EditarAgendaModalComponent, {
      width: '400px',
      data: { medico: medico }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Agenda editada para: ${medico}`, result);
        // Aquí puedes agregar la lógica para actualizar la agenda con el nuevo horario
      }
    });
  }

  cambiarFecha(event: Event): void {
    const fechaSeleccionada = (event.target as HTMLInputElement)?.value; // Usando encadenamiento opcional
    console.log(`Fecha seleccionada: ${fechaSeleccionada}`);
    // Puedes agregar lógica aquí si deseas hacer algo con la fecha seleccionada
  }
}
