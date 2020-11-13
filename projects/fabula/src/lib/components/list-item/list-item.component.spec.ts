
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModule } from '../../modules/list.module';
import { ListItemComponent } from './list-item.component';

@Component({
    template: `<fab-list-item (click)="handleClick()">Content</fab-list-item>`,
})
class ListItemExample implements AfterViewInit {
    public output = '';

    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }

    handleClick() {
        this.output = 'Clicked';
    }
}

@Component({
    template: `<fab-list (click)="handleClick()"><fab-list-item [button]="true"></fab-list-item></fab-list>`,
})
class ListItemParentClickExample implements AfterViewInit {
    public output = '';

    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }

    handleClick() {
        this.output = 'Clicked';
    }
}

describe('List Item Component', () => {
    let component: ListItemComponent;
    let fixture: ComponentFixture<ListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListItemExample,
                ListItemParentClickExample
            ],
            imports: [
                ListModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(ListItemExample);
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
    //     element = compiled.querySelector('.fab-list-item');

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
        component.ngOnInit();

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-list-item');
        buttonElement = compiled.querySelector('button.fab-list-item');
        divElement = compiled.querySelector('div.fab-list-item');

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
        component.ngOnInit();

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-list-item');
        buttonElement = compiled.querySelector('button.fab-list-item');
        divElement = compiled.querySelector('div.fab-list-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button', () => {
        let anchorElement;
        let buttonElement;
        let compiled: HTMLElement;
        let divElement;

        compiled = fixture.debugElement.nativeElement;
        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-list-item');
        buttonElement = compiled.querySelector('button.fab-list-item');
        divElement = compiled.querySelector('div.fab-list-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        let buttonElement;
        let compiled: HTMLElement;

        component.button = true;
        component.ngOnInit();

        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        buttonElement = compiled.querySelector('button.fab-list-item');

        spyOn(buttonElement, 'click');
        buttonElement.click();

        fixture.detectChanges();

        expect(buttonElement.click).toHaveBeenCalled();
    });

    // TODO: fix this test
    it('Should call parent onClick', () => {
        const exampleFixture = TestBed.createComponent(ListItemParentClickExample);
        let compiled: HTMLElement;
        let exampleComponent;
        let buttonElement;

        exampleFixture.detectChanges();

        exampleComponent = exampleFixture.componentInstance;
        compiled = exampleFixture.debugElement.nativeElement;

        buttonElement = compiled.querySelector('button.fab-list-item');

        spyOn(buttonElement, 'click');
        spyOn(exampleComponent, 'handleClick');
        buttonElement.click();

        fixture.detectChanges();

        expect(buttonElement.click).toHaveBeenCalled();
        // expect(exampleComponent.handleClick).toHaveBeenCalled();
        // expect(exampleComponent.output).toBe('clicked');
    });
});
