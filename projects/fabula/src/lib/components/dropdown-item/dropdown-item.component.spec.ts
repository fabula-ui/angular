
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownModule } from '../../modules/dropdown.module';
import { DropdownItemComponent } from './dropdown-item.component';

@Component({
    template: `
            <fab-dropdown-item>Custom Content</fab-dropdown-item>
        `,
})
class DropdownCustomContent implements AfterViewInit {
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
    template: `<fab-dropdown [open]="true">
        <fab-dropdown-menu (clickItem)="handleClick()" [items]="[{ button: true, label: 'Item 1'}]"></fab-dropdown-menu>
    </fab-dropdown>`,
})
class DropdownParentClick implements AfterViewInit {
    output = '';

    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }

    handleClick() {
        this.output = 'Clicked';
    }
}

describe('Dropdown Toggle Component', () => {
    let component: DropdownItemComponent;
    let fixture: ComponentFixture<DropdownItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DropdownCustomContent,
                DropdownParentClick
            ],
            imports: [
                DropdownModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a label', () => {
        component.label = 'Label';
        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;

        expect(compiled.textContent).toBe('Label');
    });

    it('Should have custom content', () => {
        const tempFixture = TestBed.createComponent(DropdownCustomContent);
        tempFixture.detectChanges();

        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;

        expect(compiled.textContent).toBe('Custom Content');
    });

    it('Should be a button', () => {
        component.button = true;
        component.ngOnInit();

        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const buttonElement = compiled.querySelector('.fab-button');

        expect(buttonElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        component.button = true;
        component.ngOnInit();

        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const buttonElement: any = compiled.querySelector('.fab-button');

        spyOn(buttonElement, 'click');
        buttonElement.click();

        fixture.detectChanges();

        expect(buttonElement.click).toHaveBeenCalled();
    });

    // it('Should call parent onClick', () => {
    //     const tempFixture = TestBed.createComponent(DropdownParentClick);

    //     tempFixture.detectChanges();

    //     const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
    //     const buttonElement: any = compiled.querySelector('.fab-dropdown-item');

    //     spyOn(buttonElement, 'click');
    //     buttonElement.click();

    //     tempFixture.detectChanges();

    //     const tempComponent = tempFixture.componentInstance;

    //     expect(buttonElement.click).toHaveBeenCalled();
    //     expect(tempComponent.output).toBe('Clicked');
    // });

});
