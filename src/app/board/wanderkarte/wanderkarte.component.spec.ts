import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanderkarteComponent } from './wanderkarte.component';

describe('WanderkarteComponent', () => {
  let component: WanderkarteComponent;
  let fixture: ComponentFixture<WanderkarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanderkarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanderkarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
