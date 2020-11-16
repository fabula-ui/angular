import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { TabsComponent } from './tabs.component';

// Modules
import { TabsModule } from '../../modules/tabs.module';

@Component({
    template: `<fab-tabs scope="tab">
        <fab-tab [active]="true" name="tab1"></fab-tab>
        <fab-tab name="tab2"></fab-tab>
        <fab-tab name="tab3"></fab-tab>
    </fab-tabs>`,
})
class TabsExample { }

describe('Tab Content Component', () => {
    let component: TabsComponent;
    let fixture: ComponentFixture<TabsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TabsExample
            ],
            imports: [
                TabsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have tabs as inner content', () => {
        const tempFixture = TestBed.createComponent(TabsExample);
        let compiled: HTMLElement;
        let elements;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        elements = compiled.querySelectorAll('.fab-tab');

        expect(elements.length).toBe(3);
    });

    it('Should toggle visibility via tab', () => {
        const tempFixture = TestBed.createComponent(TabsExample);
        let compiled: HTMLElement;
        let content1;
        let content2;
        let content3;
        let tab1;
        let tab2;
        let tab3;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;

        // Tab 1
        tab1 = compiled.querySelector('.fab-tab[data-name="tab1"]');
        tab2 = compiled.querySelector('.fab-tab[data-name="tab2"]');
        tab3 = compiled.querySelector('.fab-tab[data-name="tab3"]');

        expect(tab1.getAttribute('data-active')).toBe('true');
        expect(tab2.getAttribute('data-active')).toBe('false');
        expect(tab3.getAttribute('data-active')).toBe('false');
        
        // Tab 2
        tab2.click();
        tempFixture.detectChanges();

        expect(tab1.getAttribute('data-active')).toBe('false');
        expect(tab2.getAttribute('data-active')).toBe('true');
        expect(tab3.getAttribute('data-active')).toBe('false');

        // Tab 3
        tab3.click();
        tempFixture.detectChanges();

        expect(tab1.getAttribute('data-active')).toBe('false');
        expect(tab2.getAttribute('data-active')).toBe('false');
        expect(tab3.getAttribute('data-active')).toBe('true');
    });
});