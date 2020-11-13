import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { InputGroupComponent } from './input-group.component';

// Modules
import { ButtonModule } from '../../modules/button.module';
import { InputGroupModule } from '../../modules/input-group.module';
import { InputModule } from '../../modules/input.module';

@Component({
    template: `<fab-input-group><fab-button></fab-button><fab-input></fab-input></fab-input-group>`,
})
class InputGroupExample { }

describe('Input Group Component', () => {
    let component: InputGroupComponent;
    let fixture: ComponentFixture<InputGroupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                InputGroupExample,
            ],
            imports: [
                ButtonModule,
                InputGroupModule,
                InputModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const inputGroupElement = compiled.querySelector('.fab-input-group');
        const wrapperElement = compiled.querySelector('.fab-input-group-wrapper');

        expect(inputGroupElement).toBeTruthy();
        expect(wrapperElement).toBeTruthy();
    });

    it('Should have components as inner content', () => {
        const tempFixture = TestBed.createComponent(InputGroupExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
        let buttonElement;
        let inputElement;

        tempFixture.detectChanges();

        buttonElement = compiled.querySelector('.fab-button');
        inputElement = compiled.querySelector('.fab-input');

        expect(buttonElement).toBeTruthy();
    });
});
