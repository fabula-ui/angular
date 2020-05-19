import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentGroupComponent } from './segment-group.component';

describe('SegmentGroupComponent', () => {
  let component: SegmentGroupComponent;
  let fixture: ComponentFixture<SegmentGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
