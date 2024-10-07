import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/interfaces/turno';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.css']
})
export class MisTurnosComponent implements OnInit {
  turnos: Turno[] = [];

  constructor(private turnoService: TurnoService) {}

  ngOnInit(): void {
    this.turnos = this.turnoService.obtenerTurnos();
  }
}
