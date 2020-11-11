
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { CardComponent } from './card.component';

// Modules
import { CardModule } from '../../modules/card.module';

@Component({
    template: `<fab-card layout="h"><fab-card-image></fab-card-image><fab-card-section></fab-card-section></fab-card>`,
})
class CardExample implements AfterViewInit {
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
                CardExample
            ],
            imports: [
                CardModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const cardElement = compiled.querySelector('.fab-card');

        expect(cardElement).toBeTruthy();
    });

    it('Should have card components as children', () => {
        const tempFixture = TestBed.createComponent(CardExample);
        let compiled: HTMLElement;
        let imageElement;
        let sectionElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        imageElement = compiled.querySelector('.fab-card-image');
        sectionElement = compiled.querySelector('.fab-card-section');

        expect(imageElement).toBeTruthy();
        expect(sectionElement).toBeTruthy();
    });

    it('Should pass layout prop to children', () => {
        const childrenFixture = TestBed.createComponent(CardExample);
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
