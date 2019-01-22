import { TestBed } from '@angular/core/testing';

import { TelefonatService } from './telefonat.service';

describe('TelefonatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelefonatService = TestBed.get(TelefonatService);
    expect(service).toBeTruthy();
  });
});
