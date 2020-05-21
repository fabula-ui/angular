import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWrapperComponent } from './alert-wrapper.component';

describe('AlertComponent', () => {
  let component: AlertWrapperComponent;
  let fixture: ComponentFixture<AlertWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
