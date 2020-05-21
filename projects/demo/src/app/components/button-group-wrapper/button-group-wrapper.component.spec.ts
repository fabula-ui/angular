import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupWrapperComponent } from './button-group-wrapper.component';

describe('ButtonGroupWrapperComponent', () => {
  let component: ButtonGroupWrapperComponent;
  let fixture: ComponentFixture<ButtonGroupWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGroupWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
