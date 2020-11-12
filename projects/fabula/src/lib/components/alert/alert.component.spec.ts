import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { CloseButtonComponent } from '../close-button/close-button.component';
import { IconComponent } from '../icon/icon.component';
import { TextComponent } from '../text/text.component';

// Modules
import { AlertModule } from '../../modules/alert.module';
import { By } from '@angular/platform-browser';

describe('Alert Component', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AlertModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a defined structure', () => {
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const alertElement = compiled.querySelector('.fab-alert');
    const stageElement = compiled.querySelector('.fab-alert__stage');

    expect(alertElement).toBeTruthy();
    expect(stageElement).toBeTruthy();
  });

  it('Should have a text', () => {
    const text = 'This is a text';
    let compiled: HTMLElement;
    let element;

    component.text = text;
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
    element = compiled.querySelector('.fab-alert__text');

    expect(element.textContent).toBe(text);
  });

  it('Should have a title', () => {
    const title = 'This is a title';
    let compiled: HTMLElement;
    let element;

    component.title = title;
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
    element = compiled.querySelector('.fab-alert__title');

    expect(element.textContent).toBe(title);
  });

  it('Should have an icon', () => {
    let compiled: HTMLElement;
    let element;

    component.icon = { name: 'icon' };
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
    element = compiled.querySelector('.fab-icon');

    expect(element).toBeTruthy();
  });

  it('Should have an icon if there is a type', () => {
    let compiled: HTMLElement;
    let element;

    component.type = 'success';
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
    element = compiled.querySelector('.fab-icon');

    expect(element).toBeTruthy();
  });

  it('Should have a close button', () => {
    let compiled: HTMLElement;
    let element;

    component.closeButton = true;
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
    element = compiled.querySelector('.fab-close-button');

    expect(element).toBeTruthy();
  });

  // TODO: fix this test
  // it('Should call onClose', fakeAsync(() => {
  //   let compiled: HTMLElement;
  //   let buttonElement: any;

  //   component.closeButton = true;

  //   spyOn(component, 'closeAlert');

  //   fixture.detectChanges();

  //   compiled = fixture.debugElement.nativeElement;
  //   buttonElement = compiled.querySelector('.fab-close-button');

  //   spyOn(buttonElement, 'click');

  //   buttonElement.click();
  //   tick();

  //   expect(buttonElement.click).toHaveBeenCalled();
  //   expect(component.closeAlert).toHaveBeenCalled();
  // }));
});
