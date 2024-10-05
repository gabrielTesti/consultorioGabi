import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


interface Turno {
  cobertura: string;
  especialidad: string;
  profesional: string;
  fecha: string;
  hora: string;
  notas: string;
}

@Component({
  selector: 'app-nuevo-turno',
  templateUrl: './nuevo-turno.component.html',
  styleUrls: ['./nuevo-turno.component.css']
})
export class NuevoTurnoComponent {

  showModal: boolean = false;

  turnos: Turno[] = []; // almacena los turnos creados
  constructor(private router: Router) {}

  cobertura: string = '';
  especialidad: string = '';
  profesional: string = '';
  fecha: string = '';
  hora: string = '';
  notas: string = '';

  onSubmit(form: NgForm) {
    if(form.valid)
   this.showModal=true;
    console.log('Turno creado:', {
      cobertura: this.cobertura,
      especialidad: this.especialidad,
      profesional: this.profesional,
      fecha: this.fecha,
      hora: this.hora,
      notas: this.notas
    });  
  }

  cancelar() {
    this.router.navigate(['/pacientes']);
  }

  closeModal() {
    this.showModal = false; //cierra el modal
  }
  
  confirm(){
    this.router.navigate(['/pacientes/mis-turnos']);
  }





}
