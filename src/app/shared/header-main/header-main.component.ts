import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})

export class HeaderMainComponent {
  constructor(private router: Router) { }
nombreUsuario: string = "";
tipoUsuario: string = "Administrador";




cerrarSesion(){
/* this.router.navigate(["/welcome"]) */
} 

}
