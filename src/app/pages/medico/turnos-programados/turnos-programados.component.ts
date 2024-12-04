import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Turno } from 'src/app/interfaces/turno';
import { TurnoService } from 'src/app/services/turno.service';
import { TurnoNotasDialogComponent } from './turno-notas-dialog/turno-notas-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turnos-programados',
  templateUrl: './turnos-programados.component.html',
  styleUrls: ['./turnos-programados.component.css']
})
export class TurnosProgramadosComponent implements OnInit {

  turnos: Turno[] = []; // lista de turnos
  turnosFiltrados: Turno[] = [];
  fechaSeleccionada: Date = new Date(); // fecha actual

  constructor(private router: Router ,private turnoService: TurnoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarTurnos(); 
  }
  volver(): void {
    this.router.navigate(['/medico']);
  }

  cargarTurnos() {
    const fechaSeleccionadaString = this.fechaSeleccionada.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    this.turnoService.obtenerTurnosMedico(1, fechaSeleccionadaString).subscribe(response => {
      console.log('API Response:', response); // Add this line to check the API response
      if (response.codigo === 200) {
        this.turnos = response.payload.map((turno: any) => ({
          hora: turno.hora,
          nombre: turno.nombre_paciente.split(', ')[1],
          apellido: turno.nombre_paciente.split(', ')[0],
          edad: this.calcularEdad(turno.fecha_nacimiento),
          nota: turno.nota
        }));
        console.log('Turnos:', this.turnos); // Check the mapped turnos
        this.filtrarTurnos();
      } else {
        console.error(response.mensaje);
      }
    });
  }

  filtrarTurnos() {
    const fechaSeleccionadaString = this.fechaSeleccionada.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    this.turnosFiltrados = this.turnos;
    this.turnosFiltrados = this.ordenarTurnos(this.turnosFiltrados);
  }

  seleccionarFecha(event: any) {
    this.fechaSeleccionada = new Date(event.value);
    this.cargarTurnos();
  }

  mostrarNotasTurno(turno: Turno) {
    this.dialog.open(TurnoNotasDialogComponent, {
      data: { notas: turno.nota }
    });
  }

  ordenarTurnos(turnos: Turno[]): Turno[] {
    return turnos.sort((a, b) => new Date(`1970-01-01T${a.hora}:00`).getTime() - new Date(`1970-01-01T${b.hora}:00`).getTime());
  }

  calcularEdad(fechaNacimiento: string): number {
    const today = new Date();
    const birthDate = new Date(fechaNacimiento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}