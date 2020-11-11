import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ContentComponent } from './content.component';

// Modules
import { GridModule } from '../../modules/grid.module';

@Component({
    template: `<fab-content>Text</fab-content>`,
})
class ContentExample { }

describe('Content Component', () => {
    let component: ContentComponent;
    let fixture: ComponentFixture<ContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContentComponent,
                ContentExample
            ],
            imports: [
                GridModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.fab-content');

        expect(element).toBeTruthy();
    });

    it('Should have inner text as children', () => {
        const labelFixture = TestBed.createComponent(ContentExample);
        const compiled: HTMLElement = labelFixture.debugElement.nativeElement;

        labelFixture.detectChanges();

        expect(compiled.textContent.trim()).toBe('Text');
    });
});