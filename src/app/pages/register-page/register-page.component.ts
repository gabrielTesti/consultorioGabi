import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  usuario: Usuario = {
    dni: '',
    apellido: '',
    nombre: '',
    fecha_nacimiento: new Date(),
    password: '',
    rol: 'paciente',  // O el rol que desees por defecto
    email: '',
    telefono: ''
  };

  constructor(private usuarioService: UsuarioService) { }

  registrarUsuario(): void {
    this.usuarioService.crearUsuario(this.usuario).subscribe({
      next: (response) => {
        console.log('Usuario registrado exitosamente:', response);
        // Aquí puedes redirigir o mostrar un mensaje de éxito
      },
      error: (err) => {
        console.error('Error al registrar el usuario:', err);
        // Mostrar un mensaje de error al usuario
      }
    });
  }
}
