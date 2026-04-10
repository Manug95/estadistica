import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinacionCRepeticion } from './combinacion-c-repeticion';

describe('CombinacionCRepeticion', () => {
  let component: CombinacionCRepeticion;
  let fixture: ComponentFixture<CombinacionCRepeticion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinacionCRepeticion],
    }).compileComponents();

    fixture = TestBed.createComponent(CombinacionCRepeticion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
