import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupWrapperComponent } from './input-group-wrapper.component';

describe('InputGroupWrapperComponent', () => {
  let component: InputGroupWrapperComponent;
  let fixture: ComponentFixture<InputGroupWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputGroupWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGroupWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
