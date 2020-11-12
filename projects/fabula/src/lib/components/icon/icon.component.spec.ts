import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { IconComponent } from './icon.component';

// Modules
import { IconsModule } from '../../modules/icons.module';

describe('Divider Component', () => {
    let component: IconComponent;
    let fixture: ComponentFixture<IconComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                IconsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.fab-icon');

        expect(element).toBeTruthy();
    });
});
