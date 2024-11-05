/* import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-registrar-pacientes',
  templateUrl: './registrar-pacientes.component.html',
  styleUrls: ['./registrar-pacientes.component.css']
})
export class RegistrarPacientesComponent {

  
  paciente: Usuario = {
    dni: '',
    apellido: '',
    nombre: '',
    fecha_nacimiento: new Date(),
    password: '',
    rol: 'paciente',  
    email: '',
    telefono: ''
  };


  confirmPassword: string = "";
  constructor(private usuarioService: UsuarioService) { }



  registrarPaciente(): void {
    if(this.paciente.password !== this.confirmPassword){
      console.error("Las contraseñas no coinciden");
      return
    }
   














    
    this.usuarioService.crearUsuario(this.paciente).subscribe({
      next: (response) => {
        console.log('Paciente registrado exitosamente:', response);
        this.resetFormulario();
        
      },
      error: (err) => {
        console.error('Error al registrar el paciente:', err);
       
      }
    });
  }







  resetFormulario(): void {
    this.paciente = {
      dni: '',
      apellido: '',
      nombre: '',
      fecha_nacimiento: new Date(),
      password: '',
      rol: 'paciente',
      email: '',
      telefono: ''
    };
    
    this.confirmPassword = '';
  }
}
 */



import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-registrar-pacientes',
  templateUrl: './registrar-pacientes.component.html',
  styleUrls: ['./registrar-pacientes.component.css']
})
export class RegistrarPacientesComponent {

  paciente: Usuario = {
    dni: '',
    apellido: '',
    nombre: '',
    fecha_nacimiento: new Date(),
    password: '',
    rol: 'paciente',
    email: '',
    telefono: ''
  };

  confirmPassword: string = "";

  constructor() { }

  registrarPaciente(pacienteForm: NgForm): void {
    if (pacienteForm.invalid) {
      console.error("Formulario inválido");
      return;
    }

    if (this.paciente.password !== this.confirmPassword) {
      console.error("Las contraseñas no coinciden");
      return;
    }

    // Simulación de registro exitoso
    alert('Paciente agregado exitosamente');
    this.resetFormulario();
    pacienteForm.resetForm(); // Resetea el formulario en la vista
  }

  resetFormulario(): void {
    this.paciente = {
      dni: '',
      apellido: '',
      nombre: '',
      fecha_nacimiento: new Date(),
      password: '',
      rol: 'paciente',
      email: '',
      telefono: ''
    };

    this.confirmPassword = '';
  }
}
