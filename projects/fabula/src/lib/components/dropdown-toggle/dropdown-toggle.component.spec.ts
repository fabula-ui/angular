
import { ChangeDetectorRef, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownModule } from '../../modules/dropdown.module';
import { DropdownToggleComponent } from './dropdown-toggle.component';

@Component({
    template: `<fab-dropdown-toggle>Custom Content</fab-dropdown-toggle>`,
})
class DropdownExample {
    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }
}

describe('Dropdown Toggle Component', () => {
    let component: DropdownToggleComponent;
    let fixture: ComponentFixture<DropdownToggleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DropdownExample
            ],
            imports: [
                DropdownModule
            ]
        }).compileComponents();
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

    it('Should have inner content as label', () => {
        const exampleFixture = TestBed.createComponent(DropdownExample);
        const compiled: HTMLElement = exampleFixture.debugElement.nativeElement;

        exampleFixture.detectChanges();

        expect(compiled.textContent).toBe('Custom Content');
    });

    it('Should be able to hide arrow', () => {
        let arrowElement;
        let compiled: HTMLElement;

        compiled = fixture.debugElement.nativeElement;
        arrowElement = compiled.querySelector('.fab-dropdown-toggle__chevron');
        
        expect(arrowElement).toBeTruthy();

        component.arrow = false;

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        arrowElement = compiled.querySelector('.fab-dropdown-toggle__chevron');

        expect(arrowElement).toBeFalsy();
    });

    // TODO: fix this test
    // it('Should set color', () => {
    //     component.color = 'blue';

    //     fixture.detectChanges();
    //     component.ngAfterViewInit();

    //     const compiled: HTMLElement = fixture.debugElement.nativeElement;
    //     const buttonElement = compiled.querySelector('.fab-button');
    //     const buttonStyle = window.getComputedStyle(buttonElement);

    //     expect(buttonStyle.backgroundColor).toBe('blue');
    // });
});
