import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagGroupComponent } from './tag-group.component';

describe('TagGroupComponent', () => {
  let component: TagGroupComponent;
  let fixture: ComponentFixture<TagGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
