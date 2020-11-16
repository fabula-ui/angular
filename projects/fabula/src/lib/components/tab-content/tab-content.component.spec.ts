import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { TabContentComponent } from './tab-content.component';

// Modules
import { TabsModule } from '../../modules/tabs.module';

@Component({
    template: `<fab-tab-content scope="scope">Content</fab-tab-content>`,
})
class TabContentExample { }

@Component({
    template: `<fab-tabs scope="tab">
        <fab-tab [active]="true" name="tab1"></fab-tab>
        <fab-tab name="tab2"></fab-tab>
        <fab-tab name="tab3"></fab-tab>
    </fab-tabs>
    <fab-tab-content [active]="true" name="tab1" scope="tab"></fab-tab-content>
    <fab-tab-content name="tab2" scope="tab"></fab-tab-content>
    <fab-tab-content name="tab3" scope="tab"></fab-tab-content>`,
})
class TabToggleExample { }

describe('Tab Content Component', () => {
    let component: TabContentComponent;
    let fixture: ComponentFixture<TabContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TabContentExample,
                TabToggleExample
            ],
            imports: [
                TabsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(TabContentExample);
        let element;
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        element = compiled.querySelector('.fab-tab-content');

        expect(element.textContent).toContain('Content');
    });

    it('Should have scope', () => {
        const tempFixture = TestBed.createComponent(TabContentExample);
        let compiled: HTMLElement;
        let element;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        element = compiled.querySelector('.fab-tab-content');

        expect(element.getAttribute('data-scope')).toBe('scope');
    });

    it('Should toggle visibility via tab', () => {
        const tempFixture = TestBed.createComponent(TabToggleExample);
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
        content1 = compiled.querySelector('.fab-tab-content[data-name="tab1"]');
        content2 = compiled.querySelector('.fab-tab-content[data-name="tab2"]');
        content3 = compiled.querySelector('.fab-tab-content[data-name="tab3"]');
        tab1 = compiled.querySelector('.fab-tab[data-name="tab1"]');
        tab2 = compiled.querySelector('.fab-tab[data-name="tab2"]');
        tab3 = compiled.querySelector('.fab-tab[data-name="tab3"]');

        expect(content1.getAttribute('data-active')).toBe('true');
        expect(content2.getAttribute('data-active')).toBe('false');
        expect(content3.getAttribute('data-active')).toBe('false');

        expect(tab1.getAttribute('data-active')).toBe('true');
        expect(tab2.getAttribute('data-active')).toBe('false');
        expect(tab3.getAttribute('data-active')).toBe('false');
        
        // Tab 2
        tab2.click();
        tempFixture.detectChanges();

        expect(content1.getAttribute('data-active')).toBe('false');
        expect(content2.getAttribute('data-active')).toBe('true');
        expect(content3.getAttribute('data-active')).toBe('false');

        expect(tab1.getAttribute('data-active')).toBe('false');
        expect(tab2.getAttribute('data-active')).toBe('true');
        expect(tab3.getAttribute('data-active')).toBe('false');

        // Tab 3
        tab3.click();
        tempFixture.detectChanges();

        expect(content1.getAttribute('data-active')).toBe('false');
        expect(content2.getAttribute('data-active')).toBe('false');
        expect(content3.getAttribute('data-active')).toBe('true');

        expect(tab1.getAttribute('data-active')).toBe('false');
        expect(tab2.getAttribute('data-active')).toBe('false');
        expect(tab3.getAttribute('data-active')).toBe('true');
    });
});