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
  medicos: { nombre: string; especialidad: string; horarioAtencion: string }[] = [];
  turnosConfirmados: Turno[] = [];
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
