import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupComponent } from './button-group.component';
import { ButtonComponent } from '../button/button.component';

@Component({
    template: `<fab-button-group><fab-button>Label</fab-button></fab-button-group>`,
})
class ButtonsComponent { }

describe('Button Group Component', () => {
    let component: ButtonGroupComponent;
    let fixture: ComponentFixture<ButtonGroupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ButtonComponent,
                ButtonsComponent,
                ButtonGroupComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have button as children', () => {
        const labelFixture = TestBed.createComponent(ButtonsComponent);
        const compiled: HTMLElement = labelFixture.debugElement.nativeElement;
        const buttonElement = compiled.querySelector('.fab-button');

        expect(buttonElement).toBeTruthy();
    });

});
