import { TestBed } from '@angular/core/testing';

import { AnalisisCombinatorioService } from './analisis-combinatorio-service';

describe('AnalisisCombinatorio', () => {
  let service: AnalisisCombinatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalisisCombinatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
