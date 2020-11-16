import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ModalFooterComponent } from './modal-footer.component';

// Modules
import { ModalModule } from '../../modules/modal.module';

@Component({
    template: `<fab-modal-footer>Content</fab-modal-footer>`,
})
class ModalFooterExample { }

describe('Modal Footer Component', () => {
    let component: ModalFooterComponent;
    let fixture: ComponentFixture<ModalFooterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ModalFooterExample
            ],
            imports: [
                ModalModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const componentElement = compiled.querySelector('[data-fab-component]');
        const element = compiled.querySelector('.fab-modal-footer');

        expect(componentElement).toBeTruthy();
        expect(element).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(ModalFooterExample);
        let element;
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        element = compiled.querySelector('.fab-modal-footer');

        expect(element.textContent).toContain('Content');
    });
});
