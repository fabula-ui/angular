import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ModalBodyComponent } from './modal-body.component';

// Modules
import { ModalModule } from '../../modules/modal.module';

@Component({
    template: `<fab-modal-body>Content</fab-modal-body>`,
})
class ModalBodyExample { }

describe('Modal Body Component', () => {
    let component: ModalBodyComponent;
    let fixture: ComponentFixture<ModalBodyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ModalBodyExample
            ],
            imports: [
                ModalModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalBodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const componentElement = compiled.querySelector('[data-fab-component]');
        const element = compiled.querySelector('.fab-modal-body');

        expect(componentElement).toBeTruthy();
        expect(element).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(ModalBodyExample);
        let element;
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        element = compiled.querySelector('.fab-modal-body');

        expect(element.textContent).toContain('Content');
    });
});
