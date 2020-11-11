import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { CloseButtonComponent } from './close-button.component';

// Modules
import { IconsModule } from '../../modules/icons.module';

describe('Close Button Component', () => {
    let component: CloseButtonComponent;
    let fixture: ComponentFixture<CloseButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CloseButtonComponent
            ],
            imports: [
                IconsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CloseButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const buttonElement = compiled.querySelector('button.fab-close-button');
        const iconElement = compiled.querySelector('.fab-icon');

        expect(buttonElement).toBeTruthy();
        expect(iconElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const buttonElement: any = compiled.querySelector('.fab-close-button');

        spyOn(buttonElement, 'click');
        buttonElement.click();

        fixture.detectChanges();

        expect(buttonElement.click).toHaveBeenCalled();
    });
});