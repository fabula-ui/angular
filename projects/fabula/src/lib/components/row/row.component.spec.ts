import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { RowComponent } from './row.component';

// Modules
import { GridModule } from '../../modules/grid.module';

@Component({
    template: `<fab-row>Content</fab-row>`,
})
class RowExample { }

describe('Row Component', () => {
    let component: RowComponent;
    let fixture: ComponentFixture<RowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RowExample
            ],
            imports: [
                GridModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const componentElement = compiled.querySelector('[data-fab-component]');
        const element = compiled.querySelector('.fab-row');

        expect(componentElement).toBeTruthy();
        expect(element).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(RowExample);
        let element;
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        element = compiled.querySelector('.fab-row');

        expect(element.textContent).toContain('Content');
    });
});
