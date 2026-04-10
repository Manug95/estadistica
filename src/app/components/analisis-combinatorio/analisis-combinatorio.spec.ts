import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisCombinatorio } from './analisis-combinatorio';

describe('AnalisisCombinatorio', () => {
  let component: AnalisisCombinatorio;
  let fixture: ComponentFixture<AnalisisCombinatorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisCombinatorio],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalisisCombinatorio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
