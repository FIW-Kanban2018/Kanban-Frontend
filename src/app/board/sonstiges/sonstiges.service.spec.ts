import { TestBed } from '@angular/core/testing';

import {SonstigesService} from './sonstiges.service';


describe('SonstigesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SonstigesService = TestBed.get( SonstigesService);
    expect(service).toBeTruthy();
  });
});
