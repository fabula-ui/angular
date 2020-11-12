import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { HeadingComponent } from './heading.component';

// Modules
import { GridModule } from '../../modules/grid.module';

@Component({
    template: `<fab-heading>Content</fab-heading>`,
})
class HeadingExample { }

describe('Heading Component', () => {
    let component: HeadingComponent;
    let fixture: ComponentFixture<HeadingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeadingComponent,
                HeadingExample
            ],
            imports: [
                GridModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have levels', () => {
        let compiled: HTMLElement = fixture.debugElement.nativeElement;
        let headingElement = compiled.querySelector('h1');

        expect(headingElement).toBeTruthy();

        // H2
        component.level = 2;
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        headingElement = compiled.querySelector('h2');

        // H3
        component.level = 3;
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        headingElement = compiled.querySelector('h3');

        // H4
        component.level = 4;
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        headingElement = compiled.querySelector('h4');

        // H5
        component.level = 5;
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        headingElement = compiled.querySelector('h5');

        // H6
        component.level = 6;
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        headingElement = compiled.querySelector('h6');
    });

    it('Should have inner content as children', () => {
        const labelFixture = TestBed.createComponent(HeadingExample);
        const compiled: HTMLElement = labelFixture.debugElement.nativeElement;

        labelFixture.detectChanges();

        expect(compiled.textContent.trim()).toBe('Content');
    });

    // TODO: fix this test
    // it('Should set color', () => {
    //     let compiled: HTMLElement;
    //     let element;

    //     component.color = 'blue';
    //     component.ngOnInit();

    //     fixture.detectChanges();

    //     compiled = fixture.debugElement.nativeElement;
    //     element = compiled.querySelector('.fab-heading');

    //     expect(getComputedStyle(element).color).toBe('blue');
    // });
});
