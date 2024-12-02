import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  user = {
    nombre: '',
    apellido: '',
    dni: '',
    email: ''
  };

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('datosUsuario') || '{}');
    this.user.nombre = userData.nombre || '';
    this.user.apellido = userData.apellido || '';
    this.user.dni = userData.dni || '';
    this.user.email = userData.email || '';
  }
}