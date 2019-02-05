import { TestBed } from '@angular/core/testing';
import { MitarbeiterService } from './mitarbeiter.service';


describe('MitarbeiterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MitarbeiterService = TestBed.get(MitarbeiterService);
    expect(service).toBeTruthy();
  });
});
