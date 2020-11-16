import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SegmentsComponent } from './segments.component';

// Modules
import { SegmentsModule } from '../../modules/segments.module';

@Component({
    template: `<fab-segments scope="segment">
        <fab-segment [active]="true" name="segment1"></fab-segment>
        <fab-segment name="segment2"></fab-segment>
        <fab-segment name="segment3"></fab-segment>
    </fab-segments>`,
})
class SegmentsExample { }

describe('Segment Content Component', () => {
    let component: SegmentsComponent;
    let fixture: ComponentFixture<SegmentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SegmentsExample
            ],
            imports: [
                SegmentsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SegmentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have segments as inner content', () => {
        const tempFixture = TestBed.createComponent(SegmentsExample);
        let compiled: HTMLElement;
        let elements;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        elements = compiled.querySelectorAll('.fab-segment');

        expect(elements.length).toBe(3);
    });

    it('Should toggle visibility via segment', () => {
        const tempFixture = TestBed.createComponent(SegmentsExample);
        let compiled: HTMLElement;
        let content1;
        let content2;
        let content3;
        let segment1;
        let segment2;
        let segment3;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;

        // Segment 1
        segment1 = compiled.querySelector('.fab-segment[data-name="segment1"]');
        segment2 = compiled.querySelector('.fab-segment[data-name="segment2"]');
        segment3 = compiled.querySelector('.fab-segment[data-name="segment3"]');

        expect(segment1.getAttribute('data-active')).toBe('true');
        expect(segment2.getAttribute('data-active')).toBe('false');
        expect(segment3.getAttribute('data-active')).toBe('false');
        
        // Segment 2
        segment2.click();
        tempFixture.detectChanges();

        expect(segment1.getAttribute('data-active')).toBe('false');
        expect(segment2.getAttribute('data-active')).toBe('true');
        expect(segment3.getAttribute('data-active')).toBe('false');

        // Segment 3
        segment3.click();
        tempFixture.detectChanges();

        expect(segment1.getAttribute('data-active')).toBe('false');
        expect(segment2.getAttribute('data-active')).toBe('false');
        expect(segment3.getAttribute('data-active')).toBe('true');
    });
});