import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaDescriptivaService } from './estadistica-descriptiva';

describe('EstadisticaDescriptiva', () => {
  let component: EstadisticaDescriptivaService;
  let fixture: ComponentFixture<EstadisticaDescriptivaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticaDescriptivaService],
    }).compileComponents();

    fixture = TestBed.createComponent(EstadisticaDescriptivaService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
