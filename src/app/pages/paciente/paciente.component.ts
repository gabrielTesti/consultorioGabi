import { Component} from '@angular/core';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  user = {
    nombre: 'Juan',
    apellido: 'Pérez',
    dni: '12345678',
    email: 'juan.perez@example.com'
  };



}
