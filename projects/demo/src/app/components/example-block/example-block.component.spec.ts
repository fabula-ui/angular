import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBlockComponent } from './example-block.component';

describe('ExampleBlockComponent', () => {
  let component: ExampleBlockComponent;
  let fixture: ComponentFixture<ExampleBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
