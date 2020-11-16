import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ToastStackComponent } from './toast-stack.component';

// Modules
import { ToastModule } from '../../modules/toast.module';

describe('Toast Portal Component', () => {
    let component: ToastStackComponent;
    let fixture: ComponentFixture<ToastStackComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ToastModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastStackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });
});
