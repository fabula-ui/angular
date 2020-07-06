
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { DropdownModule } from '../../modules/dropdown.module';

@Component({
    template: `<fab-dropdown><fab-dropdown-toggle></fab-dropdown-toggle><fab-dropdown-menu></fab-dropdown-menu></fab-dropdown>`,
})
class DropdownExample implements AfterViewInit {
    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }
}

describe('Dropdown Component', () => {
    let component: DropdownComponent;
    let fixture: ComponentFixture<DropdownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DropdownExample
            ],
            imports: [
                DropdownModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a dropdown toggle', () => {
        const exampleFixture = TestBed.createComponent(DropdownExample);
        const compiled: HTMLElement = exampleFixture.debugElement.nativeElement;
        const toggleElement = compiled.querySelector('.fab-dropdown-toggle');

        expect(toggleElement).toBeTruthy();
    });

    it('Should have a dropdown menu', () => {
        const exampleFixture = TestBed.createComponent(DropdownExample);
        const compiled: HTMLElement = exampleFixture.debugElement.nativeElement;
        const menuElement = compiled.querySelector('.fab-dropdown-menu');

        expect(menuElement).toBeTruthy();
    });

    it('Should have a dropdown menu', () => {
        const exampleFixture = TestBed.createComponent(DropdownExample);
        const compiled: HTMLElement = exampleFixture.debugElement.nativeElement;

        exampleFixture.detectChanges();

        const menuElement = compiled.querySelector('.fab-dropdown-menu');
        const toggleElement = compiled.querySelector('.fab-dropdown-toggle');

        expect(menuElement.getAttribute('data-direction')).toBe('down');
        expect(menuElement.getAttribute('data-open')).toBe('false');
        expect(toggleElement.getAttribute('data-direction')).toBe('down');
        expect(toggleElement.getAttribute('data-open')).toBe('false');
    });

});
