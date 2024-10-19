import { Component } from '@angular/core';
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
    rol: 'paciente',  // Asignar el rol como 'paciente'
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



    // Puedes agregar aquí la validación de contraseñas si es necesario
    this.usuarioService.crearUsuario(this.paciente).subscribe({
      next: (response) => {
        console.log('Paciente registrado exitosamente:', response);
        this.resetFormulario();
        // Aquí puedes redirigir o mostrar un mensaje de éxito
      },
      error: (err) => {
        console.error('Error al registrar el paciente:', err);
        // Mostrar un mensaje de error al usuario
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
