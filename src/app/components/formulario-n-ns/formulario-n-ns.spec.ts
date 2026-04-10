import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNNs } from './formulario-n-ns';

describe('FormularioNNs', () => {
  let component: FormularioNNs;
  let fixture: ComponentFixture<FormularioNNs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioNNs],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioNNs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
