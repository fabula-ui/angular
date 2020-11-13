import { ChangeDetectorRef, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ListHeaderComponent } from './list-header.component';

// Modules
import { ListModule } from '../../modules/list.module';

@Component({
    template: `<fab-list-header>Content</fab-list-header>`,
})
class ListHeaderExample {
    constructor(public cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }
}

describe('List Header Component', () => {
    let component: ListHeaderComponent;
    let fixture: ComponentFixture<ListHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListHeaderExample
            ],
            imports: [
                ListModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(ListHeaderExample);
        let element;

        tempFixture.detectChanges();

        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;

        element = compiled.querySelector('.fab-list-header');

        expect(element.textContent).toBe('Content');
    });

    // TODO: fix this test
    // it('Should set color', () => {
    //     let element;

    //     component.color = 'blue';
    //     fixture.detectChanges();

    //     element = fixture.debugElement.nativeElement;

    //     expect(getComputedStyle(element).color).toBe('blue');
    // });
});