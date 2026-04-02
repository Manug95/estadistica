import { TestBed } from '@angular/core/testing';

import { EstadisticaDescriptivaService } from './estadistica-descriptiva-service';

describe('EstadisticaDescriptiva', () => {
  let service: EstadisticaDescriptivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadisticaDescriptivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
