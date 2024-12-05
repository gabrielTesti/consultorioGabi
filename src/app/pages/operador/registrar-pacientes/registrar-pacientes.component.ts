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













/* import { Component } from '@angular/core';
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

    
    alert('Paciente agregado exitosamente');
    this.resetFormulario();
    pacienteForm.resetForm(); 
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














import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-registrar-pacientes',
  templateUrl: './registrar-pacientes.component.html',
  styleUrls: ['./registrar-pacientes.component.css']
})
export class RegistrarPacientesComponent implements OnInit {
  // Declaramos el formulario reactivo
  registroPacienteForm!: FormGroup;
  confirmPassword: string = ""; // Almacenamos el valor de confirmación de contraseña
  isSubmitting: boolean = false;  // Controla si estamos enviando los datos

  constructor(
    private formBuilder: FormBuilder,  // Usamos FormBuilder para crear el formulario
    private usuarioService: UsuarioService  // El servicio que maneja las peticiones de usuario
  ) {}

  ngOnInit(): void {
    // Inicializamos el formulario reactivo con las validaciones necesarias
    this.registroPacienteForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Solo números
      fecha_nacimiento: ['', [Validators.required]],
      telefono: ['']
    });
  }

  // Método para registrar un paciente
  registrarPaciente(): void {
    // Verificamos que las contraseñas coincidan
    if (this.registroPacienteForm.value.password !== this.registroPacienteForm.value.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    // Si el formulario es válido, procedemos con la creación del paciente
    if (this.registroPacienteForm.valid) {
      this.isSubmitting = true;  // Marcamos que estamos enviando la solicitud

      // Creamos el objeto paciente con los datos del formulario
      const paciente: Usuario = {
        ...this.registroPacienteForm.value,
        rol: 'paciente',  // Rol predeterminado
      };

      // Llamamos al servicio para crear el paciente
      this.usuarioService.crearUsuario(paciente).subscribe({
        next: (response) => {
          console.log('Paciente registrado exitosamente:', response);
          // Restablecemos el formulario después del éxito
          this.resetFormulario();
        },
        error: (err) => {
          console.error('Error al registrar el paciente:', err);
          // Revertimos el estado de "enviando" si ocurre un error
          this.isSubmitting = false;
        },
        complete: () => {
          // Al finalizar la solicitud (ya sea exitosa o con error), restauramos el estado
          this.isSubmitting = false;
        }
      });
    } else {
      console.error('Formulario inválido');
    }
  }

  resetFormulario(): void {
    // Restablecemos el formulario
    this.registroPacienteForm.reset();
  
    // Restablecemos el estado de los controles para que no se marquen como tocados ni modificados
    this.registroPacienteForm.markAsPristine();
    this.registroPacienteForm.markAsUntouched();
  
    // Para asegurarnos de que no haya errores en los controles, reseteamos manualmente cualquier error
    Object.keys(this.registroPacienteForm.controls).forEach(key => {
      const control = this.registroPacienteForm.get(key);
      control?.setErrors(null);  // Eliminamos cualquier error que se haya quedado registrado
    });
  
    // Limpiamos la variable confirmPassword
    this.confirmPassword = '';
  }
  
}
