import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoConfirmadoDialogComponent } from './turno-confirmado-dialog.component';

describe('TurnoConfirmadoDialogComponent', () => {
  let component: TurnoConfirmadoDialogComponent;
  let fixture: ComponentFixture<TurnoConfirmadoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnoConfirmadoDialogComponent]
    });
    fixture = TestBed.createComponent(TurnoConfirmadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
