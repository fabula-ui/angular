import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from './input.component';

// Modules
import { InputModule } from '../../modules/input.module';

@Component({
    template: `<fab-input><fab-button></fab-button></fab-input>`,
})
class InputExample { }

describe('Input Component', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ButtonComponent,
                InputExample
            ],
            imports: [
                InputModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const inputElement = compiled.querySelector('.fab-input');
        const inputFieldElement = compiled.querySelector('.fab-input__field');
        const messageElement = compiled.querySelector('.fab-input__message');
        const textareaElement = compiled.querySelector('textarea.fab-input__field');
        const toggleElement = compiled.querySelector('.fab-input__password-toggle');
        const wrapperElement = compiled.querySelector('.fab-input-wrapper');

        expect(inputElement).toBeTruthy();
        expect(inputFieldElement).toBeTruthy();
        expect(messageElement).toBeFalsy();
        expect(textareaElement).toBeFalsy();
        expect(toggleElement).toBeFalsy();
        expect(wrapperElement).toBeTruthy();
    });

    it('Should be disabled', () => {
        let compiled: HTMLElement;
        let inputElement;
        let inputFieldElement;

        component.disabled = true;
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        inputElement = compiled.querySelector('.fab-button');

        inputElement = compiled.querySelector('.fab-input');
        inputFieldElement = compiled.querySelector('.fab-input__field');

        expect(inputElement.getAttribute('data-disabled')).toBe('true');
        expect(inputFieldElement.getAttribute('disabled')).toBe('');
    });

    it('Should have an icon', () => {
        let compiled: HTMLElement;
        let iconElement;
        let toggleElement;

        // Icon
        component.icon = { name: 'icon' };
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        iconElement = compiled.querySelector('.fab-icon');
        toggleElement = compiled.querySelector('.fab-input__password-toggle');

        expect(iconElement).toBeTruthy();
        expect(toggleElement).toBeFalsy();

        component.icon = null;

        // Icon start
        component.iconStart = { name: 'icon' };
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        iconElement = compiled.querySelector('.fab-icon');

        expect(iconElement).toBeTruthy();
        expect(toggleElement).toBeFalsy();

        component.iconStart = null;

        // Icon end
        component.iconEnd = { name: 'icon' };
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        iconElement = compiled.querySelector('.fab-icon');

        expect(iconElement).toBeTruthy();
        expect(toggleElement).toBeFalsy();
    });

    it('Should have password toggle', () => {
        let compiled: HTMLElement;
        let iconElement;
        let toggleElement;

        component.passwordToggle = true;
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        iconElement = compiled.querySelector('.fab-input__icon');
        toggleElement = compiled.querySelector('.fab-input__password-toggle');

        expect(iconElement).toBeFalsy();
        expect(toggleElement).toBeTruthy();
    });

    it('Should have elements inside of it', () => {
        const tempFixture = TestBed.createComponent(InputExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
        let buttonElement;

        tempFixture.detectChanges();

        buttonElement = compiled.querySelector('.fab-input__elements .fab-button');

        expect(buttonElement).toBeTruthy();
    });

    it('Should have a message', () => {
        let compiled: HTMLElement;
        let messageElement;

        component.message = { text: 'Message' };
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        messageElement = compiled.querySelector('.fab-input__message');

        expect(messageElement.textContent).toBe('Message');
    });

    it('Should change to a textarea', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        let inputFieldElement;
        let textareaElement;

        component.textarea = true;
        fixture.detectChanges();

        inputFieldElement = compiled.querySelector('input.fab-input__field');
        textareaElement = compiled.querySelector('textarea.fab-input__field');

        expect(inputFieldElement).toBeFalsy();
        expect(textareaElement).toBeTruthy();
    });

    it('Should change input type', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const inputFieldElement = compiled.querySelector('input.fab-input__field');

        expect(inputFieldElement.getAttribute('type')).toBe('text');

        // Email
        component.type = 'email';
        fixture.detectChanges();

        expect(inputFieldElement.getAttribute('type')).toBe('email');

        // Password
        component.type = 'password';
        fixture.detectChanges();

        expect(inputFieldElement.getAttribute('type')).toBe('password');
    });
});
