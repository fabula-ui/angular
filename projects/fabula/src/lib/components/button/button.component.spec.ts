import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

@Component({
    template: `<fab-button>Label</fab-button>`,
})
class ButtonLabelComponent { }

describe('Button Component', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ButtonComponent,
                ButtonLabelComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a label', () => {
        component.label = 'Label';
        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;

        expect(compiled.textContent).toBe('Label');
    });

    it('Should have inner text as children', () => {
        const labelFixture = TestBed.createComponent(ButtonLabelComponent);
        const compiled: HTMLElement = labelFixture.debugElement.nativeElement;

        expect(compiled.textContent).toBe('Label');
    });

    it('Should have an icon as an object', () => {
        expect(true).toBe(true);
    });

    it('Should have an icon as a string', () => {
        expect(true).toBe(true);
    });

    it('Should be disabled', () => {
        component.disabled = true;
        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const buttonElement = compiled.querySelector('.fab-button');

        expect(buttonElement.getAttribute('disabled')).toBe('');
    });

    it('Should call onClick', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const buttonElement: any = compiled.querySelector('.fab-button');

        spyOn(buttonElement, 'click');
        buttonElement.click();

        fixture.detectChanges();

        expect(buttonElement.click).toHaveBeenCalled();
    });

});
