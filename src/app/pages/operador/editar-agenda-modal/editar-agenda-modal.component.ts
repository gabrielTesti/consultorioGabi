import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-agenda-modal',
  templateUrl: './editar-agenda-modal.component.html',
  styleUrls: ['./editar-agenda-modal.component.css']
})
export class EditarAgendaModalComponent {
  horario: string;

  constructor(
    public dialogRef: MatDialogRef<EditarAgendaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { medico: string; horario: string }
  ) {
    this.horario = data.horario; // Inicializar el horario con el valor recibido
  }

  // Cerrar el modal sin guardar cambios
  onNoClick(): void {
    this.dialogRef.close();
  }

  // Guardar los cambios y cerrar el modal
  guardar(): void {
    this.dialogRef.close(this.horario); // Devolvemos el nuevo horario al cerrar
  }
}
