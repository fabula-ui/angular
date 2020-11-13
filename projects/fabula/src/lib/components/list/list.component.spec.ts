import { ChangeDetectorRef, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ListComponent } from './list.component';

// Modules
import { ListModule } from '../../modules/list.module';

@Component({
    template: `<fab-list><fab-list-header></fab-list-header><fab-list-item></fab-list-item></fab-list>`,
})
class ListExample {
    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }
}

describe('List Component', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListExample
            ],
            imports: [
                ListModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const listElement = compiled.querySelector('.fab-list');
        const wrapperElement = compiled.querySelector('.fab-list-wrapper');

        expect(listElement).toBeTruthy();
        expect(wrapperElement).toBeTruthy();
    });

    it('Should have components as inner content', () => {
        const tempFixture = TestBed.createComponent(ListExample);

        let headerElement;
        let itemElement;

        tempFixture.detectChanges();

        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;

        headerElement = compiled.querySelector('.fab-list-header');
        itemElement = compiled.querySelector('.fab-list-item');

        expect(headerElement).toBeTruthy();
        expect(itemElement).toBeTruthy();
    });

    // TODO: add 'Should set color' test
});