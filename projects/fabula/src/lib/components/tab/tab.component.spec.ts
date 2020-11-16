import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { TabComponent } from './tab.component';

// Modules
import { TabsModule } from '../../modules/tabs.module';

@Component({
    template: `<fab-tabs><fab-tab name="tab" (click)="handleClick()"></fab-tab></fab-tabs>`,
})
class TabExample { 
    public output = '';

    handleClick() {
        this.output = 'Clicked';
    }
}

describe('Tab Component', () => {
    let component: TabComponent;
    let fixture: ComponentFixture<TabComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TabExample
            ],
            imports: [
                TabsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should be a button by default', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const buttonElement = compiled.querySelector('button.fab-tab');

        expect(buttonElement).toBeTruthy();
    });

    it('Should be an anchor', () => {
        let anchorElement;
        let compiled: HTMLElement;

        component.href = 'href';
        component.rel = 'rel';
        component.target = 'target';
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-tab');

        expect(anchorElement.getAttribute('href')).toBe('href');
        expect(anchorElement.getAttribute('rel')).toBe('rel');
        expect(anchorElement.getAttribute('target')).toBe('target');
    });

    it('Should call onClick', () => {
        const tempFixture = TestBed.createComponent(TabExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
        let component;
        let tabElement: any;

        tempFixture.detectChanges();

        tabElement = compiled.querySelector('.fab-tab');

        tabElement.click();

        tempFixture.detectChanges();

        tabElement = compiled.querySelector('.fab-tab');

        component = tempFixture.componentInstance;

        expect(component.output).toBe('Clicked');
    });

    it('Should toggle', () => {
        const tempFixture = TestBed.createComponent(TabExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
        let tabElement: any;

        tempFixture.detectChanges();

        tabElement = compiled.querySelector('.fab-tab');

        expect(tabElement.getAttribute('data-active')).toBe('false');

        tabElement.click();
        tempFixture.detectChanges();

        tabElement = compiled.querySelector('.fab-tab');

        expect(tabElement.getAttribute('data-active')).toBe('true');
    });
});
