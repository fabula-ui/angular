import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupComponent } from './button-group.component';

// Modules
import { ButtonGroupModule } from '../../modules/button-group.module';
import { ButtonModule } from '../../modules/button.module';

@Component({
    template: `<fab-button-group><fab-button>Label</fab-button></fab-button-group>`,
})
class ButtonGroupExample { }

describe('Button Group Component', () => {
    let component: ButtonGroupComponent;
    let fixture: ComponentFixture<ButtonGroupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ButtonGroupExample
            ],
            imports: [
                ButtonGroupModule,
                ButtonModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.fab-button-group');
    
        expect(element).toBeTruthy();
      });

    it('Should have button as children', () => {
        const labelFixture = TestBed.createComponent(ButtonGroupExample);
        let buttonElement;
        let compiled: HTMLElement;

        labelFixture.detectChanges();

        compiled = labelFixture.debugElement.nativeElement;
        buttonElement = compiled.querySelector('.fab-button');

        expect(buttonElement).toBeTruthy();
    });
});
