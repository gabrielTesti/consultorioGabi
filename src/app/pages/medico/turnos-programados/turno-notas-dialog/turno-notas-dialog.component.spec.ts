import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoNotasDialogComponent } from './turno-notas-dialog.component';

describe('TurnoNotasDialogComponent', () => {
  let component: TurnoNotasDialogComponent;
  let fixture: ComponentFixture<TurnoNotasDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnoNotasDialogComponent]
    });
    fixture = TestBed.createComponent(TurnoNotasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
