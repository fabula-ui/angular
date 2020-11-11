
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownHeaderComponent } from './dropdown-header.component';
import { DropdownModule } from '../../modules/dropdown.module';

@Component({
    template: `<fab-dropdown-header>Label</fab-dropdown-header>`,
})
class DropdownHeaderExample implements AfterViewInit {
    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }
}

describe('Dropdown Header Component', () => {
    let component: DropdownHeaderComponent;
    let fixture: ComponentFixture<DropdownHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DropdownHeaderExample
            ],
            imports: [
                DropdownModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a label', () => {
        let compiled: HTMLElement;

        component.label = 'Label';
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;

        expect(compiled.textContent).toBe('Label');
    });

    // TODO: fix this test
    // it('Should have children as label', () => {
    //     const tempFixture = TestBed.createComponent(DropdownHeaderExample);
    //     let compiled: HTMLElement;
    //     let element;

    //     fixture.detectChanges();

    //     compiled = tempFixture.elementRef.nativeElement;
    //     element = compiled.querySelector('.fab-dropdown-header');

    //     expect(compiled.textContent).toContain('Label');
    // });
});