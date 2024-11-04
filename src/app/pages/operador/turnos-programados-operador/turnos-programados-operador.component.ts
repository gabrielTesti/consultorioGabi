import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Turno } from 'src/app/interfaces/turno';
import { EditarAgendaModalComponent } from '../editar-agenda-modal/editar-agenda-modal.component';
import { TurnosDialogComponent } from '../turnos-dialog/turnos-dialog.component'; // Asegúrate de importar el nuevo componente

@Component({
  selector: 'app-turnos-programados-operador',
  templateUrl: './turnos-programados-operador.component.html',
  styleUrls: ['./turnos-programados-operador.component.css']
})
export class TurnosProgramadosOperadorComponent implements OnInit {
  medicos: { nombre: string; especialidad: string; horarioAtencion: string }[] = [
    { nombre: "Dr. Juan Pérez", especialidad: "Pediatría", horarioAtencion: "09:00 - 12:00" },
    { nombre: "Dra. Ana Gómez", especialidad: "Cardiología", horarioAtencion: "10:00 - 14:00" },
    { nombre: "Dr. Luis Martínez", especialidad: "Dermatología", horarioAtencion: "08:00 - 11:00" },
    { nombre: "Dr. Juan Gomez", especialidad: "Traumatología", horarioAtencion: "08:00 - 11:00" },
    { nombre: "Dra. Elena Ríos", especialidad: "Gastroenterología", horarioAtencion: "09:00 - 13:00" },
    { nombre: "Dr. Mario Vega", especialidad: "Ginecología", horarioAtencion: "08:30 - 12:30" },
    { nombre: "Dra. Sofía Pérez", especialidad: "Clínico", horarioAtencion: "09:00 - 12:00" },
    { nombre: "Dr. Carlos López", especialidad: "Odontología", horarioAtencion: "08:00 - 12:00" },
    { nombre: "Dr. Miguel Castro", especialidad: "Oftalmología", horarioAtencion: "10:00 - 14:00" },
    { nombre: "Dra. Laura Martínez", especialidad: "Urología", horarioAtencion: "09:00 - 12:00" },
    { nombre: "Dr. Andrés González", especialidad: "Neurología", horarioAtencion: "10:00 - 13:00" },
    { nombre: "Dra. Clara Núñez", especialidad: "Nutrición", horarioAtencion: "08:30 - 12:00" },
    { nombre: "Dr. Jorge Díaz", especialidad: "Psicología", horarioAtencion: "09:00 - 13:00" },
    { nombre: "Dra. Marta Suárez", especialidad: "Fonoaudiología", horarioAtencion: "10:00 - 12:00" }
  ];

  turnosConfirmados: Turno[] = [
    {
      fecha: "2024-11-05",
      hora: "09:30",
      notas: "Dolor de cabeza",
      especialidad: "Pediatría",
      cobertura: "OSDE",
      medico: "Dr. Juan Pérez"
    },
    {
      fecha: "2024-11-05",
      hora: "10:30",
      notas: "Chequeo anual",
      especialidad: "Cardiología",
      cobertura: "Particular",
      medico: "Dra. Ana Gómez"
    },
    {
      fecha: "2024-11-05",
      hora: "11:00",
      notas: "Dermatitis",
      especialidad: "Dermatología",
      cobertura: "OSDE",
      medico: "Dr. Luis Martínez"
    },
    {
      fecha: "2024-11-05",
      hora: "09:00",
      notas: "Chequeo de rutina",
      especialidad: "Traumatología",
      cobertura: "Swiss Medical",
      medico: "Dr. Juan Gomez"
    },
    {
      fecha: "2024-11-05",
      hora: "10:00",
      notas: "Chequeo por palpitaciones",
      especialidad: "Cardiología",
      cobertura: "PAMI",
      medico: "Dra. Ana Gómez"
    },
    {
      fecha: "2024-11-05",
      hora: "11:30",
      notas: "Consulta por gastritis",
      especialidad: "Gastroenterología",
      cobertura: "IAPOS",
      medico: "Dra. Elena Ríos"
    },
    {
      fecha: "2024-11-05",
      hora: "12:00",
      notas: "Control prenatal",
      especialidad: "Ginecología",
      cobertura: "Federada",
      medico: "Dr. Mario Vega"
    },
    {
      fecha: "2024-11-05",
      hora: "09:15",
      notas: "Chequeo general",
      especialidad: "Clínico",
      cobertura: "Galeno",
      medico: "Dra. Sofía Pérez"
    },
    {
      fecha: "2024-11-05",
      hora: "08:45",
      notas: "Dolor de muelas",
      especialidad: "Odontología",
      cobertura: "Medife",
      medico: "Dr. Carlos López"
    },
    {
      fecha: "2024-11-05",
      hora: "10:30",
      notas: "Consulta oftalmológica",
      especialidad: "Oftalmología",
      cobertura: "OSDOP",
      medico: "Dr. Miguel Castro"
    },
    {
      fecha: "2024-11-05",
      hora: "11:45",
      notas: "Consulta urológica",
      especialidad: "Urología",
      cobertura: "Sancor Salud",
      medico: "Dra. Laura Martínez"
    },
    {
      fecha: "2024-11-05",
      hora: "10:00",
      notas: "Consulta neurológica",
      especialidad: "Neurología",
      cobertura: "OSECAC",
      medico: "Dr. Andrés González"
    },
    {
      fecha: "2024-11-05",
      hora: "11:15",
      notas: "Dieta personalizada",
      especialidad: "Nutrición",
      cobertura: "Jerarquicos",
      medico: "Dra. Clara Núñez"
    },
    {
      fecha: "2024-11-05",
      hora: "09:30",
      notas: "Terapia semanal",
      especialidad: "Psicología",
      cobertura: "Swiss Medical",
      medico: "Dr. Jorge Díaz"
    },
    {
      fecha: "2024-11-05",
      hora: "12:15",
      notas: "Consulta por disfonía",
      especialidad: "Fonoaudiología",
      cobertura: "OSDE",
      medico: "Dra. Marta Suárez"
    }as any
  ];

  medicoSeleccionado: string | null = null;
  fechaSeleccionada: string = "";

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    const today = new Date();
    this.fechaSeleccionada = today.toISOString().split('T')[0];
  }

  editarAgenda(medico: string): void {
    const dialogRef = this.dialog.open(EditarAgendaModalComponent, {
      width: '400px',
      data: { medico: medico }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Agenda editada para: ${medico}`, result);
      }
    });
  }

  verTurnos(medico: string): void {
    this.medicoSeleccionado = medico;
    

    const dialogRef = this.dialog.open(TurnosDialogComponent, {
      width: '400px',
      data: { turnos: this.turnosConfirmados }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo de turnos se cerró');
    });
  }

  cambiarFecha(event: Event): void {
    const fechaSeleccionada = (event.target as HTMLInputElement)?.value;
    console.log(`Fecha seleccionada: ${fechaSeleccionada}`);
  }
}
