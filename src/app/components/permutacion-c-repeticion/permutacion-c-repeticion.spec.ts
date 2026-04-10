import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutacionCRepeticion } from './permutacion-c-repeticion';

describe('PermutacionCRepeticion', () => {
  let component: PermutacionCRepeticion;
  let fixture: ComponentFixture<PermutacionCRepeticion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermutacionCRepeticion],
    }).compileComponents();

    fixture = TestBed.createComponent(PermutacionCRepeticion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
