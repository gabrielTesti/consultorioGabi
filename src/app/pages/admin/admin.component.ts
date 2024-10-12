import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario'; // Asegúrate de la ruta correcta

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usuarios: Usuario[] = []; // Array para almacenar la lista de usuarios
  filteredUsuarios: Usuario[] = []; // Array para almacenar usuarios filtrados
  usuarioForm: FormGroup; // Formulario para crear/editar usuarios
  isEditing = false; // Estado de edición
  usuarioActual: Usuario | null = null; // Usuario que se está editando

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con los campos necesarios
    this.usuarioForm = this.fb.group({
      dni: ['', Validators.required],
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]]
    });
  }

  ngOnInit(): void {
    this.cargarUsuarios(); // Cargar usuarios al inicio
  }

  cargarUsuarios() {
    // Simulación de carga de datos. En una aplicación real, aquí harías una llamada a un servicio.
    this.usuarios = [
      {
        dni: '12345678',
        apellido: 'Pérez',
        nombre: 'Juan',
        fecha_nacimiento: new Date(1990, 1, 1),
        password: 'contraseña123',
        rol: 'paciente',
        email: 'juan.perez@correo.com',
        telefono: '1234567890'
      },
      {
        dni: '87654321',
        apellido: 'Gómez',
        nombre: 'María',
        fecha_nacimiento: new Date(1992, 5, 15),
        password: 'contraseña456',
        rol: 'administrador',
        email: 'maria.gomez@correo.com',
        telefono: '0987654321'
      },
      {
        dni: '57654321',
        apellido: 'Testi',
        nombre: 'Gabriel',
        fecha_nacimiento: new Date(2003, 5, 15),
        password: 'contraseña456',
        rol: 'operador',
        email: 'gabi@correo.com',
        telefono: '0987654321'
      }
      // Puedes añadir más usuarios de ejemplo aquí
    ];
    this.filteredUsuarios = this.usuarios; // Inicializa la lista de usuarios filtrados
  }

  agregarUsuario() {
    if (this.usuarioForm.valid) {
      if (this.isEditing && this.usuarioActual) {
        // Actualizar usuario existente
        const index = this.usuarios.findIndex(user => user.dni === this.usuarioActual!.dni);
        if (index !== -1) {
          this.usuarios[index] = this.usuarioForm.value;
        }
      } else {
        // Agregar nuevo usuario
        this.usuarios.push(this.usuarioForm.value);
      }
      this.limpiarFormulario();
    }
  }

  editarUsuario(usuario: Usuario) {
    this.isEditing = true;
    this.usuarioActual = usuario;
    this.usuarioForm.patchValue(usuario); // Llenar el formulario con los datos del usuario a editar
  }

  limpiarFormulario() {
    this.usuarioForm.reset();
    this.isEditing = false;
    this.usuarioActual = null;
  }

  filtrarUsuarios(event: Event) {
    const input = event.target as HTMLInputElement; // Aserción de tipo
    const valor = input.value;

    if (!valor) {
      this.filteredUsuarios = this.usuarios; // Si no hay valor, mostrar todos los usuarios
      return;
    }

    // Filtrar usuarios según el valor proporcionado en la búsqueda
    this.filteredUsuarios = this.usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(valor.toLowerCase()) ||
      usuario.apellido.toLowerCase().includes(valor.toLowerCase()) ||
      usuario.rol.toLowerCase().includes(valor.toLowerCase())
    );
  }
}
