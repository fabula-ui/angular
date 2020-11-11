import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ColumnComponent } from './column.component';

// Modules
import { GridModule } from '../../modules/grid.module';

@Component({
    template: `<fab-column>Text</fab-column>`,
})
class ColumnExample { }

describe('Column Component', () => {
    let component: ColumnComponent;
    let fixture: ComponentFixture<ColumnComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ColumnExample
            ],
            imports: [
                GridModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColumnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.fab-column');

        expect(element).toBeTruthy();
    });

    it('Should have inner text as children', () => {
        const labelFixture = TestBed.createComponent(ColumnExample);
        const compiled: HTMLElement = labelFixture.debugElement.nativeElement;

        labelFixture.detectChanges();

        expect(compiled.textContent.trim()).toBe('Text');
    });
});