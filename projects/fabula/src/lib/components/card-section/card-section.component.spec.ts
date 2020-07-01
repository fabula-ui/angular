
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSectionComponent } from './card-section.component';

describe('Card Section Component', () => {
    let component: CardSectionComponent;
    let fixture: ComponentFixture<CardSectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CardSectionComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

});
