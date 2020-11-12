
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownModule } from '../../modules/dropdown.module';
import { DropdownItemComponent } from './dropdown-item.component';

@Component({
    template: `
            <fab-dropdown-item>Label</fab-dropdown-item>
        `,
})
class DropdownExample implements AfterViewInit {
    public output = '';

    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }

    handleClick() {
        this.output = 'Clicked';
    }
}

@Component({
    template: `<fab-dropdown [isOpen]="true">
        <fab-dropdown-menu (clickItem)="handleClick()" [items]="[{ button: true, label: 'Item 1'}]"></fab-dropdown-menu>
    </fab-dropdown>`,
})
class DropdownParentClickExample implements AfterViewInit {
    output = '';

    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }

    handleClick() {
        this.output = 'Clicked';
    }
}

describe('Dropdown Toggle Component', () => {
    let component: DropdownItemComponent;
    let fixture: ComponentFixture<DropdownItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DropdownExample,
                DropdownParentClickExample
            ],
            imports: [
                DropdownModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownItemComponent);
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

    it('Should have children as label', () => {
        const tempFixture = TestBed.createComponent(DropdownExample);
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;

        expect(compiled.textContent).toBe('Label');
    });

    // TODO: fix this test
    // it('Should set color', () => {
    //     let compiled: HTMLElement;
    //     let element;

    //     component.color = 'blue';
    //     component.ngAfterViewInit();

    //     fixture.detectChanges();

    //     compiled = fixture.debugElement.nativeElement;
    //     element = compiled.querySelector('.fab-dropdown-item');

    //     expect(getComputedStyle(element).backgroundColor).toBe('blue');
    // });

    it('Should be an anchor', () => {
        let anchorElement;
        let buttonElement;
        let compiled: HTMLElement;
        let divElement;

        component.href = 'href';
        component.rel = 'rel';
        component.target = 'target';
        component.ngAfterViewInit();

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-dropdown-item');
        buttonElement = compiled.querySelector('button.fab-dropdown-item');
        divElement = compiled.querySelector('div.fab-dropdown-item');

        expect(anchorElement.getAttribute('href')).toBe('href');
        expect(anchorElement.getAttribute('rel')).toBe('rel');
        expect(anchorElement.getAttribute('target')).toBe('target');
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button', () => {
        let anchorElement;
        let buttonElement;
        let compiled: HTMLElement;
        let divElement;

        component.button = true;
        component.ngAfterViewInit();

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-dropdown-item');
        buttonElement = compiled.querySelector('button.fab-dropdown-item');
        divElement = compiled.querySelector('div.fab-dropdown-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button', () => {
        let anchorElement;
        let buttonElement;
        let compiled: HTMLElement;
        let divElement;

        compiled = fixture.debugElement.nativeElement;
        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-dropdown-item');
        buttonElement = compiled.querySelector('button.fab-dropdown-item');
        divElement = compiled.querySelector('div.fab-dropdown-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        let buttonElement;
        let compiled: HTMLElement;

        component.button = true;
        component.ngAfterViewInit();

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        buttonElement = compiled.querySelector('button.fab-dropdown-item');

        spyOn(buttonElement, 'click');
        buttonElement.click();

        fixture.detectChanges();

        expect(buttonElement.click).toHaveBeenCalled();
    });

    // TODO: fix this test
    // it('Should call parent onClick', () => {
    //     const exampleFixture = TestBed.createComponent(DropdownParentClickExample);
    //     const compiled: HTMLElement = exampleFixture.debugElement.nativeElement;
    //     let exampleComponent = exampleFixture.componentInstance;
    //     let buttonElement;

    //     exampleFixture.detectChanges();

    //     buttonElement = compiled.querySelector('button.fab-dropdown-item');

    //     spyOn(buttonElement, 'click');
    //     spyOn(exampleComponent, 'handleClick');
    //     buttonElement.click();

    //     fixture.detectChanges();

    //     expect(buttonElement.click).toHaveBeenCalled();
    //     expect(exampleComponent.handleClick).toHaveBeenCalled();
    //     expect(exampleComponent.output).toBe('clicked');
    // });
});
