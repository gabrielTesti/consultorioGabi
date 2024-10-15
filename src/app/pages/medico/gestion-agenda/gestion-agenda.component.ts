import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gestion-agenda',
  templateUrl: './gestion-agenda.component.html',
  styleUrls: ['./gestion-agenda.component.css']
})
export class GestionAgendaComponent implements OnInit {
  agendaForm: FormGroup;
  horarios: { fecha: string; rango: string }[] = [];
  selectedDate: string = new Date().toISOString().split('T')[0]; // Almacena la fecha como string en formato YYYY-MM-DD

  constructor(private fb: FormBuilder) {
    this.agendaForm = this.fb.group({
      fecha: [this.selectedDate],
      horaInicio: [''],
      horaFin: ['']
    });
  }

  ngOnInit(): void {
    this.cargarHorarios();
  }

  cargarHorarios(): void {
    // simulación de carga de horarios
    this.horarios = [
      { fecha: '2024-10-15', rango: '15:00 - 17:00' },
      { fecha: '2024-10-15', rango: '18:00 - 20:00' }
    ];
  }

  agregarHorario(): void {
    const { horaInicio, horaFin } = this.agendaForm.value;

    
    if (horaInicio && horaFin) {
     
      this.horarios.push({ fecha: this.selectedDate, rango: `${horaInicio} - ${horaFin}` });

      // reiniciar el formulario
      this.agendaForm.reset();
      this.agendaForm.patchValue({ fecha: this.selectedDate });
    }
  }

  obtenerHorariosPorFecha(fecha: string): { fecha: string; rango: string }[] {
    return this.horarios.filter(horario => horario.fecha === fecha);
  }
}
