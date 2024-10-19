import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Turno } from 'src/app/interfaces/turno'; 

@Component({
  selector: 'app-turnos-dialog',
  templateUrl: './turnos-dialog.component.html',
  styleUrls: ['./turnos-dialog.component.css']
})
export class TurnosDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { turnos: Turno[] }, 
    private dialogRef: MatDialogRef<TurnosDialogComponent> 
  ) {}

  
  close(): void {
    this.dialogRef.close(); 
  }
}
