import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

@Component({
    template: `<fab-button>Label</fab-button>`,
})
class ButtonExample { }

describe('Button Component', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ButtonComponent,
                ButtonExample
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const anchorElement = compiled.querySelector('a.fab-anchor');
        const buttonElement = compiled.querySelector('button.fab-button');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
    });

    it('Should have a label', () => {
        let compiled: HTMLElement;

        component.label = 'Label';
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;

        expect(compiled.textContent).toBe('Label');
    });

    // TODO: fix this test
    // it('Should have inner text as children', () => {
    //     const tempFixture = TestBed.createComponent(ButtonExample);
    //     const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
    //     const buttonElement = compiled.querySelector('.fab-button');

    //     fixture.detectChanges();

    //     expect(buttonElement.textContent).toContain('Label');
    // });

    it('Should be disabled', () => {
        let buttonElement;
        let compiled: HTMLElement;

        component.disabled = true;
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        buttonElement = compiled.querySelector('.fab-button');

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

    it('Should have an anchor', () => {
        let anchorElement;
        let buttonElement;
        let compiled: HTMLElement;

        component.href = 'href';
        component.rel = 'rel';
        component.target = 'target';
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-button');
        buttonElement = compiled.querySelector('button.fab-button');

        expect(anchorElement.getAttribute('href')).toBe('href');
        expect(anchorElement.getAttribute('rel')).toBe('rel');
        expect(anchorElement.getAttribute('target')).toBe('target');
        expect(buttonElement).toBeFalsy();
    });
});
