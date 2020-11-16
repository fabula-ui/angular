import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ModalSectionComponent } from './modal-section.component';

// Modules
import { ModalModule } from '../../modules/modal.module';

@Component({
    template: `<fab-modal-section>Content</fab-modal-section>`,
})
class ModalSectionExample { }

describe('Modal Section Component', () => {
    let component: ModalSectionComponent;
    let fixture: ComponentFixture<ModalSectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ModalSectionExample
            ],
            imports: [
                ModalModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const componentElement = compiled.querySelector('[data-fab-component]');
        const element = compiled.querySelector('.fab-modal-section');

        expect(componentElement).toBeTruthy();
        expect(element).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(ModalSectionExample);
        let element;
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        element = compiled.querySelector('.fab-modal-section');

        expect(element.textContent).toContain('Content');
    });
});
