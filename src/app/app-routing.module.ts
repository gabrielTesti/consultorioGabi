import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { NuevoTurnoComponent } from './pages/paciente/nuevo-turno/nuevo-turno.component';
import { MisTurnosComponent } from './pages/paciente/mis-turnos/mis-turnos.component';
import { MisDatosComponent } from './pages/paciente/mis-datos/mis-datos.component';

const routes: Routes = [
  {path: "welcome", component: WelcomePageComponent },
  {path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: "pacientes", component: PacienteComponent},
  { path: "pacientes/nuevo-turno", component: NuevoTurnoComponent },
  { path: "pacientes/mis-turnos", component: MisTurnosComponent },
  { path: "pacientes/mis-datos", component: MisDatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
