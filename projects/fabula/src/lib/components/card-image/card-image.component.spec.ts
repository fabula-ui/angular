
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { CardImageComponent } from './card-image.component';

// Modules
import { CardModule } from '../../modules/card.module';

describe('Card Image Component', () => {
    let component: CardImageComponent;
    let fixture: ComponentFixture<CardImageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CardModule
            ]
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

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.fab-card-image');

        expect(element).toBeTruthy();
    });

    it('Should have an image', () => {
        let compiled: HTMLElement;
        let element;
    
        component.src = 'image';
        fixture.detectChanges();
    
        compiled = fixture.debugElement.nativeElement;
        element = compiled.querySelector('img');
    
        expect(element).toBeTruthy();
        expect(element.getAttribute('src')).toBe('image');
      });
});
