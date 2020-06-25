import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { CloseButtonComponent } from '../close-button/close-button.component';
import { IconComponent } from '../icon/icon.component';
import { TextComponent } from '../text/text.component';

describe('Alert Component', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlertComponent,
        CloseButtonComponent,
        IconComponent,
        TextComponent
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an icon as an object', () => {
    component.icon = { name: 'icon' };
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const iconElement = compiled.querySelector('.fab-icon');
    const name = iconElement.getAttribute('data-name');

    expect(name).toBe('icon');
  });

  it('Should have an icon as a string', () => {
    component.icon = 'icon';
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const iconElement = compiled.querySelector('.fab-icon');
    const name = iconElement.getAttribute('data-name');

    expect(name).toBe('icon');
  });

  it('Should have a text as an object', () => {
    component.text = { content: 'This is a text' };
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const textElement: HTMLElement = compiled.querySelector('.fab-alert__text');
    const text = textElement.textContent;

    expect(text).toBe('This is a text');
  });

  it('Should have a text as a string', () => {
    component.text = 'This is a text';
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const textElement: HTMLElement = compiled.querySelector('.fab-alert__text');
    const text = textElement.textContent;

    expect(text).toBe('This is a text');
  });

  it('Should have a title as an object', () => {
    component.title = { content: 'This is a title' };
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const titleElement: HTMLElement = compiled.querySelector('.fab-alert__title');
    const title = titleElement.textContent;

    expect(title).toBe('This is a title');
  });

  it('Should have a title as a string', () => {
    component.title = 'This is a title';
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const titleElement: HTMLElement = compiled.querySelector('.fab-alert__title');
    const title = titleElement.textContent;

    expect(title).toBe('This is a title');
  });

  it('Should have a close button', () => {
    component.closeButton = true;
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const closeButtonElement: HTMLElement = compiled.querySelector('.fab-close-button');

    expect(closeButtonElement).toBeTruthy();
  });

  it('Should call onClose', () => {
    spyOn(component.close, 'emit');

    component.handleClose();

    expect(component.close.emit).toHaveBeenCalled();
  });
});
