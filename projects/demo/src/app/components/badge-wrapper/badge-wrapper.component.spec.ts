import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeWrapperComponent } from './badge-wrapper.component';

describe('BadgeWrapperComponent', () => {
  let component: BadgeWrapperComponent;
  let fixture: ComponentFixture<BadgeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
