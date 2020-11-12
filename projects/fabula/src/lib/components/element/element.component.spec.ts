import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ElementComponent } from './element.component';

// Modules
import { GridModule } from '../../modules/grid.module';

@Component({
    template: `<fab-element>Content</fab-element>`,
})
class ElementExample { }

describe('Element Component', () => {
    let component: ElementComponent;
    let fixture: ComponentFixture<ElementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ElementComponent,
                ElementExample
            ],
            imports: [
                GridModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.fab-element');

        expect(element).toBeTruthy();
    });

    it('Should have inner content as children', () => {
        const labelFixture = TestBed.createComponent(ElementExample);
        const compiled: HTMLElement = labelFixture.debugElement.nativeElement;

        labelFixture.detectChanges();

        expect(compiled.textContent.trim()).toBe('Content');
    });
});
