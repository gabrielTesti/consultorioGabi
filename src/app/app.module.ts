import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from "./pages/welcome-page/welcome-page.component"
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginModalComponent } from './pages/welcome-page/login-modal/login-modal.component';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderWelcomeComponent } from './shared/header-welcome/header-welcome.component';
import { HeaderMainComponent } from './shared/header-main/header-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    RegisterPageComponent,
    LoginModalComponent,
    FooterComponent,
    HeaderWelcomeComponent,
    HeaderMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
