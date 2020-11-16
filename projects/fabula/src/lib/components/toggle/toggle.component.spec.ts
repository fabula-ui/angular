import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ToggleComponent } from './toggle.component';

// Modules
import { ToggleModule } from '../../modules/toggle.module';

@Component({
    template: `<fab-toggle (click)="handleToggle()">Content</fab-toggle>`,
})
class ToggleExample { 
    output = '';

    handleToggle() {
        this.output = 'called';
    }
}

describe('Toggle Component', () => {
    let component: ToggleComponent;
    let fixture: ComponentFixture<ToggleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ToggleExample
            ],
            imports: [
                ToggleModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const labelElement = compiled.querySelector('.fab-toggle__label');
        const toggleElement = compiled.querySelector('.fab-toggle');
        const wrapperElement = compiled.querySelector('.fab-toggle-wrapper');

        expect(labelElement).toBeTruthy();
        expect(toggleElement).toBeTruthy();
        expect(wrapperElement.getAttribute('data-disabled')).toBe('false');
    });

    it('Should have label', () => {
        component.label = 'Label';
        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;

        expect(compiled.textContent.trim()).toBe('Label');
    });

    it('Should have inner content as children', () => {
        const tempFixture = TestBed.createComponent(ToggleExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;

        tempFixture.detectChanges();

        expect(compiled.textContent.trim()).toBe('Content');
    });

    it('Should be disabled', () => {
        let compiled: HTMLElement;
        let wrapperElement;

        component.disabled = true;

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        wrapperElement = compiled.querySelector('.fab-toggle-wrapper');

        expect(wrapperElement.getAttribute('data-disabled')).toBe('true');
    });

    it('Should toggle', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const labelElement: HTMLElement = compiled.querySelector('.fab-toggle__label');
        const toggleElement: HTMLElement = compiled.querySelector('.fab-toggle');
        const wrapperElement: HTMLElement = compiled.querySelector('.fab-toggle-wrapper');

        expect(wrapperElement.getAttribute('data-active')).toBe('false');

        toggleElement.click();
        fixture.detectChanges();

        expect(wrapperElement.getAttribute('data-active')).toBe('true');

        labelElement.click();
        fixture.detectChanges();

        expect(wrapperElement.getAttribute('data-active')).toBe('false');

        labelElement.click();
        fixture.detectChanges();

        expect(wrapperElement.getAttribute('data-active')).toBe('true');
    });

    it('Should call onToggle', () => {
        const tempFixture = TestBed.createComponent(ToggleExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
        const toggleElement: HTMLElement = compiled.querySelector('.fab-toggle');
        let tempComponent;

        toggleElement.click();
        fixture.detectChanges();

        tempComponent = tempFixture.componentInstance;

        expect(tempComponent.output).toBe('called');
    });
});