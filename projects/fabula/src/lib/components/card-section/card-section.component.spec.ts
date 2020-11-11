
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { CardSectionComponent } from './card-section.component';

// Modules
import { CardModule } from '../../modules/card.module';

@Component({
    template: `<fab-card-section>Text</fab-card-section>`,
})
class CardSectionExample implements AfterViewInit {
    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }
}

describe('Card Section Component', () => {
    let component: CardSectionComponent;
    let fixture: ComponentFixture<CardSectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CardSectionExample
            ],
            imports: [CardModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.fab-card-section');

        expect(element).toBeTruthy();
    });

    it('Should have inner text as children', () => {
        const tempFixture = TestBed.createComponent(CardSectionExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;

        expect(compiled.textContent).toBe('Text');
    });

});
