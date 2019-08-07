import { TestBed } from '@angular/core/testing';

import { FabulaService } from './fabula.service';

describe('FabulaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabulaService = TestBed.get(FabulaService);
    expect(service).toBeTruthy();
  });
});
