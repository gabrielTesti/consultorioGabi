/* 

  import { Component, OnInit } from '@angular/core';
  import { TurnoService } from 'src/app/services/turno.service';
  import { EspecialidadService } from 'src/app/services/especialidad.service';
  import { Router } from '@angular/router';
  import { MatDialog } from '@angular/material/dialog';
  import { TurnoConfirmadoDialogComponent } from './turno-confirmado-dialog/turno-confirmado-dialog.component';
  import { Turno } from 'src/app/interfaces/turno';
  
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
    especialidades: any[] = [];
    profesionales: any[] = [];
    horariosDisponibles: string[] = [];
    profesionalNombre: string = '';
    id_agenda: number = 0; 
    id_paciente: number = 0; 
  
    constructor(
      private turnoService: TurnoService,
      private especialidadService: EspecialidadService,
      private router: Router,
      public dialog: MatDialog
    ) { }
  
   

      ngOnInit(): void {
        this.cargarCoberturas(); 
        this.cargarEspecialidades(); 
        this.obtenerIdPaciente(); 
        this.cargarCoberturaUsuario(); 
      
        
        const coberturaSeleccionada = localStorage.getItem('cobertura');
        if (coberturaSeleccionada) {
          this.cobertura = Number(coberturaSeleccionada);
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
    }
  
    
    cargarCoberturas() {
      this.especialidadService.obtenerCoberturas().subscribe(response => {
        if (response.codigo === 200 && Array.isArray(response.payload)) {
          this.coberturas = response.payload[0];  
        } else {
          console.error('Error al cargar coberturas:', response.mensaje);
        }
      });
    }
  
    
 


      cargarEspecialidades() {
        this.especialidadService.obtenerEspecialidades().subscribe(response => {
          console.log(response);  
          if (response.codigo === 200) {
            this.especialidades = response.payload[0];  
            console.log(this.especialidades);  
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
      const fechaSeleccionada = new Date(this.fecha).toISOString().split('T')[0];  // Formato de fecha YYYY-MM-DD
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
  }
   */



  import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  cobertura: number = 0;  // Variable que guardará el id de la cobertura
  especialidad: number = 0;
  profesional: number = 0;
  fecha: string = '';
  hora: string = '';
  notas: string = '';
  showModal: boolean = false;
  coberturas: any[] = [];
  especialidades: any[] = [];
  profesionales: any[] = [];
  horariosDisponibles: string[] = [];
  profesionalNombre: string = '';
  id_agenda: number = 0;
  id_paciente: number = 0;

  constructor(
    private turnoService: TurnoService,
    private especialidadService: EspecialidadService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  nombreCobertura: string = ''; // Nueva variable para mostrar el nombre de la cobertura
  coberturaSeleccionada: string | undefined;

 
  /*   ngOnInit(): void {
      const datosUsuario = this.authService.getDatosUsuario();
      if (datosUsuario && datosUsuario.cobertura) {
        this.coberturaSeleccionada = datosUsuario.cobertura; // Ajusta "cobertura" según la estructura de tu JSON
      }
    } */


      ngOnInit(): void {
        const datosUsuario = this.authService.getDatosUsuario();
        if (datosUsuario && datosUsuario.cobertura) {
          this.coberturaSeleccionada = datosUsuario.cobertura;
          this.cdr.detectChanges(); // Forzar la detección de cambios
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

 /*  cargarCoberturaUsuario() {
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario') || '{}');
    this.cobertura = datosUsuario.id_cobertura || 0;
  } */



    cargarCoberturaUsuario() {
      const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario') || '{}');
      this.cobertura = datosUsuario.id_cobertura || 0;
      this.nombreCobertura = datosUsuario.nombre_cobertura || ''; // Supón que este es el nombre de la cobertura
    }


  cargarCoberturas() {
    this.especialidadService.obtenerCoberturas().subscribe(response => {
      if (response.codigo === 200 && Array.isArray(response.payload)) {
        this.coberturas = response.payload;  // Asegúrate de que payload es un array
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
}