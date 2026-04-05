import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTablaFrec } from './form-tabla-frec';

describe('FormTablaFrec', () => {
  let component: FormTablaFrec;
  let fixture: ComponentFixture<FormTablaFrec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTablaFrec],
    }).compileComponents();

    fixture = TestBed.createComponent(FormTablaFrec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
