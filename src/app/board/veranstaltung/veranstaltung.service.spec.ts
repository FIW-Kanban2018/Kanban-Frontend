import { TestBed } from '@angular/core/testing';
import { VeranstaltungService} from './veranstaltung.service';

describe('VeranstaltungService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeranstaltungService= TestBed.get(VeranstaltungService);
    expect(service).toBeTruthy();
  });
});
