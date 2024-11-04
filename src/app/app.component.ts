import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(public authService: AuthService) {}


  ngOnInit() {
    // inicializa el estado de sesion
    this.loggedIn = this.authService.isLoggedIn();
  }

}
