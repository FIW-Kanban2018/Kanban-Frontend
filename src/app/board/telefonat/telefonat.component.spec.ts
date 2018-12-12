import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonatComponent } from './telefonat.component';

describe('TelefonatComponent', () => {
  let component: TelefonatComponent;
  let fixture: ComponentFixture<TelefonatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
