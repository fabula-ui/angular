import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeComponent } from './badge.component';

@Component({
    template: `<fab-badge>Label</fab-badge>`,
})
class BadgeLabelComponent { }

describe('Avatar Component', () => {
    let component: BadgeComponent;
    let fixture: ComponentFixture<BadgeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BadgeComponent,
                BadgeLabelComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BadgeComponent);
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

    it('Should have inner text as children', () => {
        const labelFixture = TestBed.createComponent(BadgeLabelComponent);
        const compiled: HTMLElement = labelFixture.debugElement.nativeElement;

        expect(compiled.textContent).toBe('Label');
    });

});
