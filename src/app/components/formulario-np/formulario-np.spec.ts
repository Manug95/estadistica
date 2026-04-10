import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNP } from './formulario-np';

describe('FormularioNP', () => {
  let component: FormularioNP;
  let fixture: ComponentFixture<FormularioNP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioNP],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioNP);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
