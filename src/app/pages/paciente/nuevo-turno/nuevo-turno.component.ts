import { Component } from '@angular/core';
import { TurnoService } from 'src/app/services/turno.service';
import { Turno } from 'src/app/interfaces/turno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-turno',
  templateUrl: './nuevo-turno.component.html',
  styleUrls: ['./nuevo-turno.component.css']
})
export class NuevoTurnoComponent {
  cobertura: string = '';
  especialidad: string = '';
  profesional: string = '';
  fecha: string = '';
  hora: string = '';
  notas: string = '';
  showModal: boolean = false;

  constructor(private turnoService: TurnoService, private router: Router) { }

  onSubmit(form: any) {
    if (form.valid) {
      const turno: Turno = {
        cobertura: this.cobertura,
        especialidad: this.especialidad,
        profesional: this.profesional,
        fecha: this.fecha,
        hora: this.hora,
        notas: this.notas
      };

      this.turnoService.agregarTurno(turno).subscribe(
        response => {
          if (response.codigo === 200) {
            this.showModal = true;
          } else {
            alert('Error al asignar el turno: ' + response.mensaje);
          }
        },
        error => {
          console.error('Error en la petición', error);
          alert('Ocurrió un error al asignar el turno');
        }
      );
    }
  }

  cancelar() {
    this.router.navigate(['/pacientes']);
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(['/pacientes']);
  }

  confirm() {
    this.closeModal();
  }
}