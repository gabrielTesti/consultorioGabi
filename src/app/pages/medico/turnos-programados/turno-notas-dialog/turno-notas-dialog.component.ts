import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-turno-notas-dialog',
  templateUrl: './turno-notas-dialog.component.html',
  styleUrls: ['./turno-notas-dialog.component.css']
})
export class TurnoNotasDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { notas: string }) {}
}