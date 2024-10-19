import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAgendaModalComponent } from './editar-agenda-modal.component';

describe('EditarAgendaModalComponent', () => {
  let component: EditarAgendaModalComponent;
  let fixture: ComponentFixture<EditarAgendaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAgendaModalComponent]
    });
    fixture = TestBed.createComponent(EditarAgendaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
