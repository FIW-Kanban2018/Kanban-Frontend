import { TestBed } from '@angular/core/testing';
import { WanderkarteService} from "./wanderkarte.service";

describe('WanderkarteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WanderkarteService= TestBed.get(WanderkarteService);
    expect(service).toBeTruthy();
  });
});
