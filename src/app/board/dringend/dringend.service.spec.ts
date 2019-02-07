import {TestBed} from '@angular/core/testing';
import {DringendService} from './dringend.service';



describe('DringendService', ( ) => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it( 'should be created', () => {
    const service: DringendService = TestBed.get(DringendService);
    expect(service).toBeTruthy();

  });
});
