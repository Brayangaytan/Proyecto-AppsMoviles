import { TestBed } from '@angular/core/testing';

import { DetalleCovidService } from './detalle-covid.service';

describe('DetalleCovidService', () => {
  let service: DetalleCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
