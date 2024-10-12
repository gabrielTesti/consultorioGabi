export interface Usuario {
    dni: string;               // Número de identificación del usuario
    apellido: string;          // Apellido del usuario
    nombre: string;            // Nombre del usuario
    fecha_nacimiento: Date;    // Fecha de nacimiento del usuario
    password: string;          // Contraseña del usuario
    rol: 'medico' | 'operador' | 'administrador' | 'paciente'; // Rol del usuario
    email: string;             // Correo electrónico del usuario
    telefono: string;          // Número de teléfono del usuario
}