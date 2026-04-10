import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioN } from './formulario-n';

describe('FormularioN', () => {
  let component: FormularioN;
  let fixture: ComponentFixture<FormularioN>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioN],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioN);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
