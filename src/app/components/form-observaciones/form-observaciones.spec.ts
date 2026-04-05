import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObservaciones } from './form-observaciones';

describe('FormObservaciones', () => {
  let component: FormObservaciones;
  let fixture: ComponentFixture<FormObservaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormObservaciones],
    }).compileComponents();

    fixture = TestBed.createComponent(FormObservaciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
