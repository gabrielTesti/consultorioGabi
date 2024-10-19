import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosProgramadosOperadorComponent } from './turnos-programados-operador.component';

describe('TurnosProgramadosOperadorComponent', () => {
  let component: TurnosProgramadosOperadorComponent;
  let fixture: ComponentFixture<TurnosProgramadosOperadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnosProgramadosOperadorComponent]
    });
    fixture = TestBed.createComponent(TurnosProgramadosOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
