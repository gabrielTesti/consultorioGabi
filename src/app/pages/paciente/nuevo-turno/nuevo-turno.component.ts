/* import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TurnoService } from 'src/app/services/turno.service';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TurnoConfirmadoDialogComponent } from './turno-confirmado-dialog/turno-confirmado-dialog.component';
import { Turno } from 'src/app/interfaces/turno';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nuevo-turno',
  templateUrl: './nuevo-turno.component.html',
  styleUrls: ['./nuevo-turno.component.css']
})
export class NuevoTurnoComponent implements OnInit {
  cobertura: number = 0;  
  especialidad: number = 0;
  profesional: number = 0;
  fecha: string = '';
  hora: string = '';
  notas: string = '';
  showModal: boolean = false;
  coberturas: any[] = [];
  profesionales: any[] = [];
  horariosDisponibles: string[] = [];
  profesionalNombre: string = '';
  id_agenda: number = 0;
  id_paciente: number = 0;
  especialidades: any[] = [];
  medicos: any[] = [];
  especialidadSeleccionada: number | null = null;

  constructor(
    private turnoService: TurnoService,
    private especialidadService: EspecialidadService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  nombreCobertura: string = ''; 
  coberturaSeleccionada: string | undefined;

 


      ngOnInit(): void {
        const datosUsuario = this.authService.getDatosUsuario();
        if (datosUsuario && datosUsuario.cobertura) {
          this.coberturaSeleccionada = datosUsuario.cobertura;
          this.cdr.detectChanges(); 
          console.log('Cobertura seleccionada asignada:', this.coberturaSeleccionada);
        } else {
          console.log('No se encontró cobertura en los datos del usuario');
        }
      }


  obtenerIdPaciente() {
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario') || '{}');
    this.id_paciente = datosUsuario.id ||  parseInt(localStorage.getItem('cobertura') || '0', 10);
    console.log('Cobertura cargada desde localStorage:', this.cobertura);
  }





    cargarCoberturaUsuario() {
      const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario') || '{}');
      this.cobertura = datosUsuario.id_cobertura || 0;
      this.nombreCobertura = datosUsuario.nombre_cobertura || ''; 
    }


  cargarCoberturas() {
    this.especialidadService.obtenerCoberturas().subscribe(response => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.coberturas = response.payload;  
      } else {
        console.error('Error al cargar coberturas:', response.mensaje);
      }
    });
  }

   cargarEspecialidades() {
    this.especialidadService.obtenerEspecialidades().subscribe(response => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.especialidades = response.payload;
      } else {
        console.error(response.mensaje);
      }
    });
  } 





  onEspecialidadChange() {
    const id_especialidad = this.especialidad;
    this.especialidadService.obtenerMedicoPorEspecialidad(id_especialidad).subscribe(response => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.profesionales = response.payload;
      } else {
        console.error(response.mensaje);
      }
    });
  }

  onFechaChange() {
    const id_medico = this.profesional;
    const fechaSeleccionada = new Date(this.fecha).toISOString().split('T')[0];
    this.turnoService.obtenerAgenda(id_medico).subscribe(response => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.horariosDisponibles = response.payload
          .filter((agenda: any) => new Date(agenda.fecha).toISOString().split('T')[0] === fechaSeleccionada)
          .map((agenda: any) => agenda.hora_entrada);
      } else {
        console.error(response.mensaje);
      }
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      const turno: Turno = {
        nota: this.notas,
        id_agenda: this.id_agenda,
        fecha: this.fecha,
        hora: this.hora,
        id_paciente: this.id_paciente,
        id_cobertura: this.cobertura
      };

      this.turnoService.agregarTurno(turno).subscribe(
        response => {
          if (response.codigo === 200) {
            this.profesionalNombre = this.profesionales.find(p => p.id_medico === this.profesional)?.nombre || '';
            this.openDialog();
          } else {
            alert('Error al asignar el turno: ' + response.mensaje);
          }
        },
        error => {
          console.error('Error en la petición', error);
          alert('Ocurrió un error al asignar el turno');
        }
      );
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TurnoConfirmadoDialogComponent, {
      data: {
        profesionalNombre: this.profesionalNombre,
        fecha: this.fecha,
        hora: this.hora
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/pacientes']);
    });
  }

  cancelar() {
    this.router.navigate(['/pacientes']);
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(['/pacientes']);
  }

  confirm() {
    this.closeModal();
    this.router.navigate(['/pacientes']);
  }
} */



















/* 
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TurnoService } from 'src/app/services/turno.service';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TurnoConfirmadoDialogComponent } from './turno-confirmado-dialog/turno-confirmado-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nuevo-turno',
  templateUrl: './nuevo-turno.component.html',
  styleUrls: ['./nuevo-turno.component.css']
})
export class NuevoTurnoComponent implements OnInit {
  cobertura: number = 0;
  especialidad: number = 0;
  profesional: number = 0;
  fecha: string = '';
  hora: string = '';
  notas: string = '';
  showModal: boolean = false;
  coberturas: any[] = [];
  profesionales: any[] = [];
  horariosDisponibles: string[] = [];
  profesionalNombre: string = '';
  id_agenda: number = 0;
  id_paciente: number = 0;
  especialidades: any[] = [];
  medicos: any[] = [];
  especialidadSeleccionada: number | null = null;
  especialidadesSeleccionadas: any[] = []; 
  selectedEspecialidad: number | null = null;

  constructor(
    private turnoService: TurnoService,
    private especialidadService: EspecialidadService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  nombreCobertura: string = '';
  coberturaSeleccionada: string | undefined;

  ngOnInit(): void {
    const datosUsuario = this.authService.getDatosUsuario();
    if (datosUsuario && datosUsuario.cobertura) {
      this.coberturaSeleccionada = datosUsuario.cobertura;
      this.cdr.detectChanges();
      console.log('Cobertura seleccionada asignada:', this.coberturaSeleccionada);
    } else {
      console.log('No se encontró cobertura en los datos del usuario');
    }



    this.cargarCoberturas();
    this.cargarEspecialidades();


  }

  mostrarEspecialidadesSeleccionadas(): void {
    const seleccionadas = this.especialidades.filter((especialidad) =>
      this.especialidad === especialidad.id
    );
    console.log('Especialidades seleccionadas:', seleccionadas);
    this.especialidadesSeleccionadas = seleccionadas; 
  }

  obtenerIdPaciente() {
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario') || '{}');
    this.id_paciente = datosUsuario.id || parseInt(localStorage.getItem('cobertura') || '0', 10);
    console.log('Cobertura cargada desde localStorage:', this.cobertura);
  }

  cargarCoberturaUsuario() {
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario') || '{}');
    this.cobertura = datosUsuario.id_cobertura || 0;
    this.nombreCobertura = datosUsuario.nombre_cobertura || '';
  }

  cargarCoberturas() {
    this.especialidadService.obtenerCoberturas().subscribe((response) => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.coberturas = response.payload;
      } else {
        console.error('Error al cargar coberturas:', response.mensaje);
      }
    });
  }


  

  cargarEspecialidades(): void {
    this.especialidadService.obtenerEspecialidades().subscribe((response: any) => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.especialidades = response.payload;
      } else {
        console.error('Error al cargar especialidades:', response.mensaje);
      }
    });
  }


 

  onEspecialidadChange(especialidadId: number): void {
    this.especialidadService.obtenerMedicoPorEspecialidad(especialidadId).subscribe((response: any) => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.profesionales = response.payload;
      } else {
        console.error('Error al cargar médicos:', response.mensaje);
        this.profesionales = [];
      }
    });
  }




  onFechaChange() {
    const id_medico = this.profesional;
    const fechaSeleccionada = new Date(this.fecha).toISOString().split('T')[0];
    this.turnoService.obtenerAgenda(id_medico).subscribe(response => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.horariosDisponibles = response.payload
          .filter((agenda: any) => new Date(agenda.fecha).toISOString().split('T')[0] === fechaSeleccionada)
          .map((agenda: any) => agenda.hora_entrada);
      } else {
        console.error(response.mensaje);
      }
    });
  }

  

    onSubmit(turnoForm: any): void {
      if (turnoForm.valid) {
        this.profesionalNombre = this.profesionales.find(
          (p) => p.id_medico === this.profesional
        )?.nombre;
        this.showModal = true;
      }
    }


  openDialog(): void {
    const dialogRef = this.dialog.open(TurnoConfirmadoDialogComponent, {
      data: {
        profesionalNombre: this.profesionalNombre,
        fecha: this.fecha,
        hora: this.hora
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/pacientes']);
    });
  }

  cancelar() {
    this.router.navigate(['/pacientes']);
  }

 

    closeModal(): void {
      this.showModal = false;
    }


  



    confirm(): void {
      console.log('Turno confirmado:', {
        cobertura: this.coberturaSeleccionada,
        especialidad: this.especialidad,
        profesional: this.profesional,
        fecha: this.fecha,
        hora: this.horariosDisponibles
      });
      this.closeModal();
    }






}
 */















import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TurnoService } from 'src/app/services/turno.service';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TurnoConfirmadoDialogComponent } from './turno-confirmado-dialog/turno-confirmado-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nuevo-turno',
  templateUrl: './nuevo-turno.component.html',
  styleUrls: ['./nuevo-turno.component.css']
})
export class NuevoTurnoComponent implements OnInit {
  cobertura: number = 0;
  especialidad: any;
  profesional: any;
  fecha: string = '';
  hora: string = '';
  notas: string = '';
  showModal: boolean = false;
  coberturas: any[] = [];
  profesionales: any[] = [];
  horariosDisponibles: string[] = [];
  profesionalNombre: string = '';
  id_agenda: number = 0;
  id_paciente: number = 0;
  especialidades: any[] = [];
  medicos: any[] = [];
  especialidadSeleccionada: number | null = null;
  especialidadesSeleccionadas: any[] = []; 
  selectedEspecialidad: number | null = null;
  nombreCobertura: string = '';
  coberturaSeleccionada: string | undefined;
  obtenerMedicoPorEspecialidad: any;

  constructor(
    private turnoService: TurnoService,
    private especialidadService: EspecialidadService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const datosUsuario = this.authService.getDatosUsuario();
    if (datosUsuario && datosUsuario.cobertura) {
      this.coberturaSeleccionada = datosUsuario.cobertura;
      this.cdr.detectChanges();
      console.log('Cobertura seleccionada asignada:', this.coberturaSeleccionada);
    } else {
      console.log('No se encontró cobertura en los datos del usuario');
    }

    this.cargarCoberturas();
    this.obtenerEspecialidades();
  }

  obtenerIdPaciente() {
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario') || '{}');
    this.id_paciente = datosUsuario.id || parseInt(localStorage.getItem('cobertura') || '0', 10);
    console.log('Cobertura cargada desde localStorage:', this.cobertura);
  }

  cargarCoberturaUsuario() {
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario') || '{}');
    this.cobertura = datosUsuario.id_cobertura || 0;
    this.nombreCobertura = datosUsuario.nombre_cobertura || '';
  }

  cargarCoberturas() {
    this.especialidadService.obtenerCoberturas().subscribe((response) => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.coberturas = response.payload;
      } else {
        console.error('Error al cargar coberturas:', response.mensaje);
      }
    });
  }




    obtenerEspecialidades(): void {
      this.especialidadService.obtenerEspecialidades().subscribe(
        (response) => {
          console.log('Especialidades obtenidas:', response);
          if (response && response.payload && Array.isArray(response.payload[0])) {
            this.especialidades = response.payload[0];  // Accedemos al primer array del payload
          } else {
            console.error('Error: La respuesta no contiene especialidades');
          }
        },
        (error) => {
          console.error('Error al obtener especialidades:', error);
        }
      );
    }








     /*  onEspecialidadChange(): void {
        if (this.especialidad) {
          
          this.especialidadService.obtenerMedicoPorEspecialidad(this.especialidad.id).subscribe(
            (response) => {
              console.log('Médicos obtenidos:', response);
              if (response && response.payload && Array.isArray(response.payload)) {
                this.profesionales = response.payload; 
              } else {
                console.error('Error: La respuesta no contiene médicos');
                this.profesionales = [];  
              }
            },
            (error) => {
              console.error('Error al obtener médicos:', error);
              this.profesionales = [];  
            }
          );
        } else {
          this.profesionales = [];  
        }
      } */
      




        onEspecialidadChange(): void {
          if (this.especialidad && this.especialidad.id) {
            this.especialidadService.obtenerMedicoPorEspecialidad(this.especialidad.id).subscribe(
              (response) => {
                console.log('Médicos obtenidos:', response);
                if (response && response.payload) {
                  this.medicos = response.payload;  // Aquí guardamos los médicos
                } else {
                  console.error('No se encontraron médicos para esta especialidad');
                }
              },
              (error) => {
                console.error('Error al obtener médicos:', error);
              }
            );
          } else {
            console.error('Especialidad no seleccionada');
          }
        }









    
  onFechaChange() {
    const id_medico = this.profesional;
    const fechaSeleccionada = new Date(this.fecha).toISOString().split('T')[0];
    this.turnoService.obtenerAgenda(id_medico).subscribe(response => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.horariosDisponibles = response.payload
          .filter((agenda: any) => new Date(agenda.fecha).toISOString().split('T')[0] === fechaSeleccionada)
          .map((agenda: any) => agenda.hora_entrada);
      } else {
        console.error(response.mensaje);
      }
    });
  }




  
  onSubmit(turnoForm: any): void {
    if (turnoForm.valid) {
      this.profesionalNombre = this.profesionales.find(
        (p) => p.id_medico === this.profesional
      )?.nombre;
      this.showModal = true;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TurnoConfirmadoDialogComponent, {
      data: {
        profesionalNombre: this.profesionalNombre,
        fecha: this.fecha,
        hora: this.hora
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/pacientes']);
    });
  }

  cancelar() {
    this.router.navigate(['/pacientes']);
  }

  closeModal(): void {
    this.showModal = false;
  }

  confirm(): void {
    console.log('Turno confirmado:', {
      cobertura: this.coberturaSeleccionada,
      especialidad: this.especialidad,
      profesional: this.profesional,
      fecha: this.fecha,
      hora: this.horariosDisponibles
    });
    this.closeModal();
  }
}
 