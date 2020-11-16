import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ButtonComponent } from '../button/button.component';
import { TooltipComponent } from './tooltip.component';

// Modules
import { TooltipModule } from '../../modules/tooltip.module';

@Component({
    template: `<fab-button [tooltip]="{label: 'Tooltip'}"></fab-button>`,
})
class TooltipExample { }

describe('Tooltip Component', () => {
    let component: TooltipComponent;
    let fixture: ComponentFixture<TooltipComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ButtonComponent,
                TooltipExample
            ],
            imports: [
                TooltipModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should not have tooltip visible by default', () => {
        const tempFixture = TestBed.createComponent(TooltipExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
        const tooltipElement = compiled.querySelector('.fab-tooltip');

        expect(tooltipElement).toBeFalsy();
    });

    it('Should show tooltip on mouse over', () => {
        const tempFixture = TestBed.createComponent(TooltipExample);
        let buttonElement: HTMLElement;
        let compiled: HTMLElement;
        let tooltipElement: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        buttonElement = compiled.querySelector('.fab-button');

        buttonElement.dispatchEvent(new MouseEvent('mouseover', {
            view: window,
            bubbles: true,
            cancelable: true
        }));

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        tooltipElement = document.querySelector('.fab-tooltip');

        expect(tooltipElement).toBeTruthy();
    });
});