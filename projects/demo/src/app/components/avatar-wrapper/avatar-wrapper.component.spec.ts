import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarWrapperComponent } from './avatar-wrapper.component';

describe('AvatarWrapperComponent', () => {
  let component: AvatarWrapperComponent;
  let fixture: ComponentFixture<AvatarWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
