
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownModule } from '../../modules/dropdown.module';
import { DropdownToggleComponent } from './dropdown-toggle.component';
import { By } from '@angular/platform-browser';

describe('Dropdown Toggle Component', () => {
    let component: DropdownToggleComponent;
    let fixture: ComponentFixture<DropdownToggleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                DropdownModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownToggleComponent);
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

    it('Should have an icon', () => {
        component.icon = 'map-pin';
        component.label = 'Label';

        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const iconElement = compiled.querySelector('.fab-dropdown-toggle__icon');

        expect(iconElement).toBeTruthy();
    });

    // it('Should set color', () => {
    //     component.color = 'blue';
    //     component.label = 'Label';

    //     component.ngOnInit();
    //     fixture.detectChanges();

    //     const compiled: HTMLElement = fixture.debugElement.nativeElement;
    //     const buttonElement = compiled.querySelector('.fab-button');
    //     const buttonStyle = window.getComputedStyle(buttonElement);

    //     expect(buttonStyle.backgroundColor).toBe('blue');
    // });

});
