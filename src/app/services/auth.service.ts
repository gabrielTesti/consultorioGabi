import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false; // indica si el usuario esta logueado

  constructor() { }

 // metodo para iniciar sesion
 login(): void {
  this.loggedIn = true;
}

// metodo para cerrar sesión
logout(): void {
  this.loggedIn = false;
}

// metodo para verificar si el usuario esta logueado
isLoggedIn(): boolean {
  return this.loggedIn;
}



}
