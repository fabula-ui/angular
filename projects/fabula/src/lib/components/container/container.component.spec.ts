import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ContainerComponent } from './container.component';

// Modules
import { GridModule } from '../../modules/grid.module';

@Component({
    template: `<fab-container>Text</fab-container>`,
})
class ContainerExample { }

describe('Container Component', () => {
    let component: ContainerComponent;
    let fixture: ComponentFixture<ContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContainerExample
            ],
            imports: [
                GridModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.fab-container');

        expect(element).toBeTruthy();
    });

    it('Should have inner text as children', () => {
        const labelFixture = TestBed.createComponent(ContainerExample);
        const compiled: HTMLElement = labelFixture.debugElement.nativeElement;

        labelFixture.detectChanges();

        expect(compiled.textContent.trim()).toBe('Text');
    });
});