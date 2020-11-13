import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { LinkComponent } from './link.component';

// Modules
import { LinkModule } from '../../modules/link.module';

@Component({
    template: `<fab-link>Content</fab-link>`,
})
class LinkExample { }

describe('Link Component', () => {
    let component: LinkComponent;
    let fixture: ComponentFixture<LinkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LinkExample
            ],
            imports: [
                LinkModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have an anchor', () => {
        let anchorElement;
        let compiled: HTMLElement;

        component.href = 'href';
        component.rel = 'rel';
        component.target = 'target';
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-link');

        expect(anchorElement.getAttribute('href')).toBe('href');
        expect(anchorElement.getAttribute('rel')).toBe('rel');
        expect(anchorElement.getAttribute('target')).toBe('target');
    });

    it('Should have a label', () => {
        let compiled: HTMLElement;

        component.label = 'Label';
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;

        expect(compiled.textContent).toBe('Label');
    });

     it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(LinkExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
        const buttonElement = compiled.querySelector('.fab-link');

        fixture.detectChanges();

        expect(buttonElement.textContent).toContain('Content');
    });
});