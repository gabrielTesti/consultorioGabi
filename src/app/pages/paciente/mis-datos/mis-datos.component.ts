import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  paciente = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'paciente@correo.com',
    telefono: '3424090182',
    dni: '45215162',
    fechaNacimiento: new Date(1990, 1, 1), // YYYY, MM-1, DD
    password: 'contraseña123'
  };
  
  datosForm: FormGroup;
  isEditing = false;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.datosForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]], // Entre 10 y 12 dígitos
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.cargarDatosPaciente();
  }

 //metodo que utiliza patchValue para actualizar los campos del formulario
  cargarDatosPaciente() {
    this.datosForm.patchValue({
      email: this.paciente.email,
      telefono: this.paciente.telefono
    });
  }



  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; //metodo qe oculta la contraseña al ser clickeado
  }

  editarDatos() {
    this.isEditing = true; // activar modo de edición
  }

  guardarCambios() {
    if (this.datosForm.valid) {
      if (this.datosForm.value.password !== this.datosForm.value.confirmPassword) {
        this.datosForm.get('confirmPassword')?.setErrors({ passwordMismatch: true });
        return;
      }
      
      // Guardar los datos
      this.paciente.email = this.datosForm.value.email;
      this.paciente.telefono = this.datosForm.value.telefono;
      this.paciente.password = this.datosForm.value.password;

      alert('Cambios guardados con éxito');
      this.isEditing = false; // salir del modo de edición
    } else {
      alert('Hay errores en el formulario');
    }
  }

  cancelarEdicion() {
    this.isEditing = false; // cancelar la edición
  }
}
