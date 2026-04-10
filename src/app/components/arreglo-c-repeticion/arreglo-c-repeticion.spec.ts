import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArregloCRepeticion } from './arreglo-c-repeticion';

describe('ArregloCRepeticion', () => {
  let component: ArregloCRepeticion;
  let fixture: ComponentFixture<ArregloCRepeticion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArregloCRepeticion],
    }).compileComponents();

    fixture = TestBed.createComponent(ArregloCRepeticion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
