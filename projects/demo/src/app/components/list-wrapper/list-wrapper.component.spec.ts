import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWrapperComponent } from './list-wrapper.component';

describe('ListWrapperComponent', () => {
  let component: ListWrapperComponent;
  let fixture: ComponentFixture<ListWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
