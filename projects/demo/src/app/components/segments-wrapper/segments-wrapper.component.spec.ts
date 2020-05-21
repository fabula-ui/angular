import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsWrapperComponent } from './segments-wrapper.component';

describe('SegmentsWrapperComponent', () => {
  let component: SegmentsWrapperComponent;
  let fixture: ComponentFixture<SegmentsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
