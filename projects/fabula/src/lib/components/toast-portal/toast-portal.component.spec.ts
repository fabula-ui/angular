import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ToastPortalComponent } from './toast-portal.component';

// Modules
import { ToastModule } from '../../modules/toast.module';

describe('Toast Portal Component', () => {
    let component: ToastPortalComponent;
    let fixture: ComponentFixture<ToastPortalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ToastModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastPortalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });
});
