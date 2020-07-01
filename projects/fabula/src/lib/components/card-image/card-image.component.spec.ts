
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageComponent } from './card-image.component';

describe('Card Image Component', () => {
    let component: CardImageComponent;
    let fixture: ComponentFixture<CardImageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CardImageComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

});
