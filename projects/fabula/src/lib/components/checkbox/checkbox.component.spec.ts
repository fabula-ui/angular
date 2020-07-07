
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';

@Component({
    template: `<fab-checkbox>Label</fab-checkbox>`,
})
class CheckboxLabelComponent { }

describe('Card Component', () => {
    let component: CheckboxComponent;
    let fixture: ComponentFixture<CheckboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CheckboxComponent,
                CheckboxLabelComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have label', () => {
        component.label = 'Label';
        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;

        expect(compiled.textContent.trim()).toBe('Label');
    });

    it('Should have inner text as children', () => {
        const labelFixture = TestBed.createComponent(CheckboxLabelComponent);
        const compiled: HTMLElement = labelFixture.debugElement.nativeElement;

        labelFixture.detectChanges();

        expect(compiled.textContent.trim()).toBe('Label');
    });

    it('Should have checked attribute', () => {
        component.checked = true;
        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const inputElement = compiled.querySelector('input');
        const wrapperElement = compiled.querySelector('.fab-checkbox-wrapper');

        expect(inputElement.checked).toBeTruthy();
        expect(wrapperElement.getAttribute('data-checked')).toBe('true');
    });

    it('Should have indeterminate attribute', () => {
        component.indeterminate = true;
        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const wrapperElement = compiled.querySelector('.fab-checkbox-wrapper');

        expect(wrapperElement.getAttribute('data-indeterminate')).toBe('true');
    });

    it('Should call onChange clicking checkbox', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const checkboxElement: any = compiled.querySelector('.fab-checkbox');

        spyOn(component.change, 'emit');

        checkboxElement.dispatchEvent(new Event('click'));

        fixture.detectChanges();

        expect(component.change.emit).toHaveBeenCalled();
    });

    it('Should call onChange clicking label', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const labelElement: any = compiled.querySelector('.fab-checkbox__label');

        spyOn(component.change, 'emit');

        labelElement.click();

        fixture.detectChanges();

        expect(component.change.emit).toHaveBeenCalled();
    });

    it('Should call onCheck clicking checkbox', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const checkboxElement: any = compiled.querySelector('.fab-checkbox');

        spyOn(component.check, 'emit');

        checkboxElement.dispatchEvent(new Event('click'));

        fixture.detectChanges();

        expect(component.check.emit).toHaveBeenCalled();
    });

    it('Should call onCheck clicking label', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const labelElement: any = compiled.querySelector('.fab-checkbox__label');

        spyOn(component.check, 'emit');

        labelElement.click();

        fixture.detectChanges();

        expect(component.check.emit).toHaveBeenCalled();
    });

    it('Should call onUncheck clicking checkbox', () => {
        component.checked = true;

        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const checkboxElement: any = compiled.querySelector('.fab-checkbox');

        spyOn(component.uncheck, 'emit');

        checkboxElement.dispatchEvent(new Event('click'));

        fixture.detectChanges();

        expect(component.uncheck.emit).toHaveBeenCalled();
    });

    it('Should call onUncheck clicking label', () => {
        component.checked = true;

        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const labelElement: any = compiled.querySelector('.fab-checkbox__label');

        spyOn(component.uncheck, 'emit');

        labelElement.click();

        fixture.detectChanges();

        expect(component.uncheck.emit).toHaveBeenCalled();
    });

});