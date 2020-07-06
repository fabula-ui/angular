import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuComponent } from './dropdown-menu.component';
import { DropdownModule } from '../../modules/dropdown.module';

@Component({
    template: `<fab-dropdown-menu color="blue">Custom Content</fab-dropdown-menu>`,
})
class DropdownExample {}

describe('Dropdown Menu Component', () => {
    let component: DropdownMenuComponent;
    let fixture: ComponentFixture<DropdownMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DropdownExample
            ],
            imports: [
                DropdownModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have items', () => {
        component.items = [{ label: 'Item 1'}, { label: 'Item 2' }, { label: 'Item 3' }];

        fixture.detectChanges();

        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const items = compiled.querySelectorAll('.fab-dropdown-item');

        expect(items[0].textContent).toBe('Item 1');
        expect(items[1].textContent).toBe('Item 2');
        expect(items[2].textContent).toBe('Item 3');
    });

    it('Should have custom content', () => {
        const exampleFixture = TestBed.createComponent(DropdownExample);
        const compiled: HTMLElement = exampleFixture.debugElement.nativeElement;

        exampleFixture.detectChanges();

        expect(compiled.textContent).toBe('Custom Content');
    });

    // it('Should set color', () => {
    //     component.color = 'blue';
    //     component.ngOnInit();

    //     fixture.detectChanges();

    //     const compiled: HTMLElement = fixture.debugElement.nativeElement;

    //     const menuElement = compiled.querySelector('.fab-dropdown-menu');
    //     const menuStyle = window.getComputedStyle(menuElement);

    //     expect(menuStyle.backgroundColor).toBe('blue');
    // });

});
