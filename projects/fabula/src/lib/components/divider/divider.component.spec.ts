import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { DividerComponent } from './divider.component';

// Modules
import { DividerModule } from '../../modules/divider.module';

describe('Divider Component', () => {
    let component: DividerComponent;
    let fixture: ComponentFixture<DividerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                DividerModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DividerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.fab-divider');

        expect(element).toBeTruthy();
    });
});