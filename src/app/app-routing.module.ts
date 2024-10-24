import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { NuevoTurnoComponent } from './pages/paciente/nuevo-turno/nuevo-turno.component';
import { MisTurnosComponent } from './pages/paciente/mis-turnos/mis-turnos.component';
import { MisDatosComponent } from './pages/paciente/mis-datos/mis-datos.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { TurnosProgramadosComponent } from './pages/medico/turnos-programados/turnos-programados.component';
import { GestionAgendaComponent } from './pages/medico/gestion-agenda/gestion-agenda.component';
import { OperadorComponent } from './pages/operador/operador.component';
import { TurnosProgramadosOperadorComponent } from './pages/operador/turnos-programados-operador/turnos-programados-operador.component';
import { RegistrarPacientesComponent } from './pages/operador/registrar-pacientes/registrar-pacientes.component';

const routes: Routes = [
  {path: "welcome", component: WelcomePageComponent },
  {path: "", redirectTo: 'welcome', pathMatch: 'full' },
  { path: "**", redirectTo: 'welcome' },
  {path: "pacientes", component: PacienteComponent},
  { path: "pacientes/nuevo-turno", component: NuevoTurnoComponent },
  { path: "pacientes/mis-turnos", component: MisTurnosComponent },
  { path: "pacientes/mis-datos", component: MisDatosComponent },
  {path: "admin", component: AdminComponent},
  {path: "medico", component: MedicoComponent},
  {path: "medico/turnos-programados", component: TurnosProgramadosComponent},
  {path: "medico/gestion-agenda", component: GestionAgendaComponent},
  {path: "operador", component: OperadorComponent},
  {path: "operador/turnos-programados-operador", component: TurnosProgramadosOperadorComponent},
  {path: "operador/registrar-pacientes", component: RegistrarPacientesComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
