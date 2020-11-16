
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagModule } from '../../modules/tag.module';
import { TagComponent } from './tag.component';

@Component({
    template: `<fab-tag (click)="handleClick()">Content</fab-tag>`,
})
class TagExample implements AfterViewInit {
    public output = '';

    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }

    handleClick() {
        this.output = 'Clicked';
    }
}

describe('Tag Component', () => {
    let component: TagComponent;
    let fixture: ComponentFixture<TagComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TagExample
            ],
            imports: [
                TagModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TagComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(TagExample);
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;

        expect(compiled.textContent.trim()).toBe('Content');
    });

    // TODO: fix this test
    // it('Should set color', () => {
    //     let compiled: HTMLElement;
    //     let element;

    //     component.color = 'blue';
    //     component.ngAfterViewInit();

    //     fixture.detectChanges();

    //     compiled = fixture.debugElement.nativeElement;
    //     element = compiled.querySelector('.fab-tag');

    //     expect(getComputedStyle(element).backgroundColor).toBe('blue');
    // });

    it('Should be an anchor', () => {
        let anchorElement;
        let buttonElement;
        let compiled: HTMLElement;
        let divElement;

        component.href = 'href';
        component.rel = 'rel';
        component.target = 'target';

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-tag');
        buttonElement = compiled.querySelector('button.fab-tag');
        divElement = compiled.querySelector('div.fab-tag');

        expect(anchorElement.getAttribute('href')).toBe('href');
        expect(anchorElement.getAttribute('rel')).toBe('rel');
        expect(anchorElement.getAttribute('target')).toBe('target');
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button', () => {
        let anchorElement;
        let buttonElement;
        let compiled: HTMLElement;
        let divElement;

        component.button = true;

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-tag');
        buttonElement = compiled.querySelector('button.fab-tag');
        divElement = compiled.querySelector('div.fab-tag');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a div', () => {
        let anchorElement;
        let buttonElement;
        let compiled: HTMLElement;
        let divElement;

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-tag');
        buttonElement = compiled.querySelector('button.fab-tag');
        divElement = compiled.querySelector('div.fab-tag');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeTruthy();
    });

    // TODO: fix this test
    // it('Should call onClick', () => {
    //     const exampleFixture = TestBed.createComponent(TagExample);
    //     let compiled: HTMLElement;
    //     let exampleComponent;
    //     let buttonElement;

    //     exampleComponent = exampleFixture.componentInstance;
    //     exampleComponent.button = true;

    //     exampleFixture.detectChanges();

    //     exampleComponent = exampleFixture.componentInstance;
    //     compiled = exampleFixture.debugElement.nativeElement;

    //     buttonElement = compiled.querySelector('button.fab-tag');
    //     buttonElement.click();

    //     exampleFixture.detectChanges();

    //     expect(exampleComponent.output).toBe('clicked');
    // });
});
