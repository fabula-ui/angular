import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownWrapperComponent } from './dropdown-wrapper.component';

describe('DropdownWrapperComponent', () => {
  let component: DropdownWrapperComponent;
  let fixture: ComponentFixture<DropdownWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
