import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagInputWrapperComponent } from './tag-input-wrapper.component';

describe('TagInputWrapperComponent', () => {
  let component: TagInputWrapperComponent;
  let fixture: ComponentFixture<TagInputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagInputWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
