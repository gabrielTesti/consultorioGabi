import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/pages/register-page/register-page.component';

@Component({
  selector: 'app-header-welcome',
  templateUrl: './header-welcome.component.html',
  styleUrls: ['./header-welcome.component.css']
})
export class HeaderWelcomeComponent {

constructor(public dialog: MatDialog){}




openRegisterModal(){
  this.dialog.open(RegisterPageComponent,{
    width: "400px",
  });

}
  

  openLoginModal(){
  this.dialog.open(LoginPageComponent, {
    width: '400px',
  })
  }



}
