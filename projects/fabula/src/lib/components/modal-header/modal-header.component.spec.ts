import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ModalHeaderComponent } from './modal-header.component';

// Modules
import { ModalModule } from '../../modules/modal.module';

@Component({
    template: `<fab-modal-header>Content</fab-modal-header>`,
})
class ModalHeaderExample implements AfterViewChecked {
    constructor(public cdRef: ChangeDetectorRef) { }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
}

describe('Modal Header Component', () => {
    let component: ModalHeaderComponent;
    let fixture: ComponentFixture<ModalHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ModalHeaderExample
            ],
            imports: [
                ModalModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const componentElement = compiled.querySelector('[data-fab-component]');
        const element = compiled.querySelector('.fab-modal-header');

        expect(componentElement).toBeTruthy();
        expect(element).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(ModalHeaderExample);
        let element;
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        element = compiled.querySelector('.fab-modal-header');

        expect(element.textContent).toContain('Content');
    });
});
