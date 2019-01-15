import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DringendComponent } from './dringend.component';

describe('DringendComponent', () => {
  let component: DringendComponent;
  let fixture: ComponentFixture<DringendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DringendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DringendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
