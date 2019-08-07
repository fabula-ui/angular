import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabulaComponent } from './fabula.component';

describe('FabulaComponent', () => {
  let component: FabulaComponent;
  let fixture: ComponentFixture<FabulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
