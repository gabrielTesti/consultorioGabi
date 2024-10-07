import { Injectable } from '@angular/core';
import { Turno } from '../interfaces/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
private turnos: Turno[] = []


constructor() { }



agregarTurno(turno: Turno){
this.turnos.push(turno);
this.ordenarTurnos();
}

obtenerTurnos(): Turno[]{
  return this.turnos;
}



//borrador ordena del mas antiguo al mas nuevo
private ordenarTurnos() {
  this.turnos.sort((a, b) => {
  const fechaA = new Date(`${a.fecha} ${a.hora}`).getTime();
  const fechaB = new Date(`${b.fecha} ${b.hora}`).getTime();
  return fechaA - fechaB;
  });
}






}
