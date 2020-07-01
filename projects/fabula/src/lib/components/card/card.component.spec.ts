
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CardImageComponent } from '../card-image/card-image.component';
import { CardSectionComponent } from '../card-section/card-section.component';

@Component({
    template: `<fab-card layout="h"><fab-card-image></fab-card-image><fab-card-section></fab-card-section></fab-card>`,
})
class CardChildrenComponent implements AfterViewInit {
    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }
}

describe('Card Component', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CardComponent,
                CardChildrenComponent,
                CardImageComponent,
                CardSectionComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should pass layout prop to children', () => {
        const childrenFixture = TestBed.createComponent(CardChildrenComponent);
        const compiled: HTMLElement = childrenFixture.debugElement.nativeElement;
        let cardImageElement;
        let cardSectionElement;

        cardImageElement = compiled.querySelector('.fab-card-image');
        cardSectionElement = compiled.querySelector('.fab-card-section');

        childrenFixture.detectChanges();

        expect(cardImageElement.getAttribute('data-layout')).toBe('h');
        expect(cardSectionElement.getAttribute('data-layout')).toBe('h');
    });

});
