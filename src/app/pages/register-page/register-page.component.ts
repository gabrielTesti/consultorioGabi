



/*

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; // Para cerrar el pop-up
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  // Declaramos el formulario reactivo
  registroForm!: FormGroup;
  confirmPassword: string = ""; // Almacenamos el valor de confirmación de contraseña
  isSubmitting: boolean = false;  // Controla si estamos enviando los datos

  constructor(
    private formBuilder: FormBuilder,  // Usamos FormBuilder para crear el formulario
    private usuarioService: UsuarioService,  // El servicio que maneja las peticiones de usuario
    private dialogRef: MatDialogRef<RegisterPageComponent>  // Para cerrar el pop-up
  ) {}

  ngOnInit(): void {
    // Inicializamos el formulario reactivo con las validaciones necesarias
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
      telefono: ['']
    });
  }

  // Método para registrar un usuario
  registrarUsuario(): void {
    // Verificamos que las contraseñas coincidan
    if (this.registroForm.value.password !== this.registroForm.value.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    // Si el formulario es válido, procedemos con la creación del usuario
    if (this.registroForm.valid) {
      this.isSubmitting = true;  // Marcamos que estamos enviando la solicitud

      // Creamos el objeto usuario con los datos del formulario
      const usuario: Usuario = {
        ...this.registroForm.value,
        rol: 'paciente',  // Rol predeterminado
      };

      // Llamamos al servicio para crear el usuario
      this.usuarioService.crearUsuario(usuario).subscribe({
        next: (response) => {
          console.log('Usuario registrado exitosamente:', response);

          // Cerramos el pop-up si la solicitud es exitosa
          this.dialogRef.close();
        },
        error: (err) => {
          console.error('Error al registrar el usuario:', err);

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
}


*/















import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; // Para cerrar el pop-up
import { UsuarioService } from 'src/app/services/usuario.service';
import { EspecialidadService } from 'src/app/services/especialidad.service'; // Importa el servicio de especialidades
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  // Declaramos el formulario reactivo
  registroForm!: FormGroup;
  confirmPassword: string = ""; // Almacenamos el valor de confirmación de contraseña
  isSubmitting: boolean = false;  // Controla si estamos enviando los datos
  coberturas: any[] = []; // Aquí almacenaremos las coberturas obtenidas desde el backend

  constructor(
    private formBuilder: FormBuilder,  // Usamos FormBuilder para crear el formulario
    private usuarioService: UsuarioService,  // El servicio que maneja las peticiones de usuario
    private especialidadService: EspecialidadService,  // Servicio para obtener las coberturas
    private dialogRef: MatDialogRef<RegisterPageComponent>  // Para cerrar el pop-up
  ) {}

  ngOnInit(): void {
    // Inicializamos el formulario reactivo con las validaciones necesarias
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
      telefono: [''],
      cobertura: ['', [Validators.required]]  // Campo para la cobertura
    });

    // Obtener las coberturas desde el backend
    this.obtenerCoberturas();
  }

  // Método para obtener las coberturas desde el backend
  obtenerCoberturas(): void {
    this.especialidadService.obtenerCoberturas().subscribe({
      next: (response) => {
        console.log('Coberturas recibidas:', response);
        
        // Asumiendo que el primer array contiene las coberturas correctas
        if (response.codigo === 200 && Array.isArray(response.payload[0])) {
          this.coberturas = response.payload[0]; // Solo tomamos el primer array de coberturas
        } else {
          console.error('Error al obtener coberturas:', response.mensaje);
        }
      },
      error: (err) => {
        console.error('Error en la solicitud de coberturas:', err);
      }
    });
  }

  registrarUsuario(): void {
    // Verificamos que las contraseñas coincidan
    if (this.registroForm.value.password !== this.registroForm.value.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }
  
    // Si el formulario es válido, procedemos con la creación del usuario
    if (this.registroForm.valid) {
      this.isSubmitting = true;  // Marcamos que estamos enviando la solicitud
  
      // Creamos el objeto usuario con los datos del formulario
      const usuario: Usuario = {
        ...this.registroForm.value,
        rol: 'paciente',  // Rol predeterminado
        id_cobertura: this.registroForm.value.cobertura  // Aseguramos que id_cobertura se toma del formulario
      };
  
      console.log('Usuario a registrar:', usuario);  // Verifica el objeto usuario
  
      // Llamamos al servicio para crear el usuario
      this.usuarioService.crearUsuario(usuario).subscribe({
        next: (response) => {
          console.log('Usuario registrado exitosamente:', response);
          // Cerramos el pop-up si la solicitud es exitosa
          this.dialogRef.close();
        },
        error: (err) => {
          console.error('Error al registrar el usuario:', err);
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
  
}
