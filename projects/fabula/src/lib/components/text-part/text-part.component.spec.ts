import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPartComponent } from './text-part.component';

describe('TextPartComponent', () => {
  let component: TextPartComponent;
  let fixture: ComponentFixture<TextPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
