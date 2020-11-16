import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SegmentContentComponent } from './segment-content.component';

// Modules
import { SegmentsModule } from '../../modules/segments.module';

@Component({
    template: `<fab-segment-content scope="scope">Content</fab-segment-content>`,
})
class SegmentContentExample { }

@Component({
    template: `<fab-segments scope="segment">
        <fab-segment [active]="true" name="segment1"></fab-segment>
        <fab-segment name="segment2"></fab-segment>
        <fab-segment name="segment3"></fab-segment>
    </fab-segments>
    <fab-segment-content [active]="true" name="segment1" scope="segment"></fab-segment-content>
    <fab-segment-content name="segment2" scope="segment"></fab-segment-content>
    <fab-segment-content name="segment3" scope="segment"></fab-segment-content>`,
})
class SegmentToggleExample { }

describe('Segment Content Component', () => {
    let component: SegmentContentComponent;
    let fixture: ComponentFixture<SegmentContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SegmentContentExample,
                SegmentToggleExample
            ],
            imports: [
                SegmentsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SegmentContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(SegmentContentExample);
        let element;
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        element = compiled.querySelector('.fab-segment-content');

        expect(element.textContent).toContain('Content');
    });

    it('Should have scope', () => {
        const tempFixture = TestBed.createComponent(SegmentContentExample);
        let compiled: HTMLElement;
        let element;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        element = compiled.querySelector('.fab-segment-content');

        expect(element.getAttribute('data-scope')).toBe('scope');
    });

    it('Should toggle visibility via segment', () => {
        const tempFixture = TestBed.createComponent(SegmentToggleExample);
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
        content1 = compiled.querySelector('.fab-segment-content[data-name="segment1"]');
        content2 = compiled.querySelector('.fab-segment-content[data-name="segment2"]');
        content3 = compiled.querySelector('.fab-segment-content[data-name="segment3"]');
        segment1 = compiled.querySelector('.fab-segment[data-name="segment1"]');
        segment2 = compiled.querySelector('.fab-segment[data-name="segment2"]');
        segment3 = compiled.querySelector('.fab-segment[data-name="segment3"]');

        expect(content1.getAttribute('data-active')).toBe('true');
        expect(content2.getAttribute('data-active')).toBe('false');
        expect(content3.getAttribute('data-active')).toBe('false');

        expect(segment1.getAttribute('data-active')).toBe('true');
        expect(segment2.getAttribute('data-active')).toBe('false');
        expect(segment3.getAttribute('data-active')).toBe('false');
        
        // Segment 2
        segment2.click();
        tempFixture.detectChanges();

        expect(content1.getAttribute('data-active')).toBe('false');
        expect(content2.getAttribute('data-active')).toBe('true');
        expect(content3.getAttribute('data-active')).toBe('false');

        expect(segment1.getAttribute('data-active')).toBe('false');
        expect(segment2.getAttribute('data-active')).toBe('true');
        expect(segment3.getAttribute('data-active')).toBe('false');

        // Segment 3
        segment3.click();
        tempFixture.detectChanges();

        expect(content1.getAttribute('data-active')).toBe('false');
        expect(content2.getAttribute('data-active')).toBe('false');
        expect(content3.getAttribute('data-active')).toBe('true');

        expect(segment1.getAttribute('data-active')).toBe('false');
        expect(segment2.getAttribute('data-active')).toBe('false');
        expect(segment3.getAttribute('data-active')).toBe('true');
    });
});