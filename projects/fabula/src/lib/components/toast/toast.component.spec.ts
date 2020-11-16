import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ToastComponent } from './toast.component';

// Modules
import { ToastModule } from '../../modules/toast.module';

@Component({
    template: `<fab-toast>Content</fab-toast>`,
})
class ToastExample { }

describe('Toast Component', () => {
    let component: ToastComponent;
    let fixture: ComponentFixture<ToastComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ToastExample
            ],
            imports: [
                ToastModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const toastElement = compiled.querySelector('.fab-toast');
        const wrapperElement = compiled.querySelector('.fab-toast-wrapper');

        expect(toastElement.getAttribute('data-fab-component')).toBe('toast');
        expect(wrapperElement.getAttribute('data-fab-wrapper')).toBe('toast');
    });

    it('Should have an icon', () => {
        let compiled: HTMLElement;
        let iconElement;

        fixture.detectChanges();

        component.icon = { name: 'compass' };

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        iconElement = compiled.querySelector('.fab-icon');

        expect(iconElement).toBeTruthy();
    });

    it('Should have a message', () => {
        let compiled: HTMLElement;
        let messageElement;

        fixture.detectChanges();

        component.message = 'Message';

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        messageElement = compiled.querySelector('.fab-toast__message');

        expect(messageElement.textContent).toBe('Message');
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(ToastExample);
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;

        expect(compiled.textContent.trim()).toBe('Content');
    });

    it('Should have a button', () => {
        let compiled: HTMLElement;
        let buttonElement;

        fixture.detectChanges();

        component.button = { color: 'primary' };

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        buttonElement = compiled.querySelector('.fab-button');

        expect(buttonElement).toBeTruthy();
    });

    it('Should have a hide button', () => {
        let compiled: HTMLElement;
        let buttonElement;

        fixture.detectChanges();

        component.hideButton = true;

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        buttonElement = compiled.querySelector('.fab-button');

        expect(buttonElement).toBeTruthy();
    });
});
