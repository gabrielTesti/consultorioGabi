import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from "./pages/welcome-page/welcome-page.component"
import { RegisterPageComponent } from './pages/register-page/register-page.component';


import { FooterComponent } from './shared/footer/footer.component';
import { HeaderWelcomeComponent } from './shared/header-welcome/header-welcome.component';
import { HeaderMainComponent } from './shared/header-main/header-main.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { OperadorComponent } from './pages/operador/operador.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { NuevoTurnoComponent } from './pages/paciente/nuevo-turno/nuevo-turno.component';
import { MisTurnosComponent } from './pages/paciente/mis-turnos/mis-turnos.component';
import { MisDatosComponent } from './pages/paciente/mis-datos/mis-datos.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { TurnosProgramadosComponent } from './pages/medico/turnos-programados/turnos-programados.component';
import { GestionAgendaComponent } from './pages/medico/gestion-agenda/gestion-agenda.component';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    RegisterPageComponent,
    FooterComponent,
    HeaderWelcomeComponent,
    HeaderMainComponent,
    LoginPageComponent,
    MainPageComponent,
    AdminComponent,
    OperadorComponent,
    MedicoComponent,
    PacienteComponent,
    NuevoTurnoComponent,
    MisTurnosComponent,
    MisDatosComponent,
    TurnosProgramadosComponent,
    GestionAgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
