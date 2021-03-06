import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SegmentComponent } from './segment.component';

// Modules
import { SegmentsModule } from '../../modules/segments.module';

@Component({
    template: `<fab-segments><fab-segment name="segment" (click)="handleClick()"></fab-segment></fab-segments>`,
})
class SegmentExample { 
    public output = '';

    handleClick() {
        this.output = 'Clicked';
    }
}

describe('Segment Component', () => {
    let component: SegmentComponent;
    let fixture: ComponentFixture<SegmentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SegmentExample
            ],
            imports: [
                SegmentsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SegmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should be a button by default', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const buttonElement = compiled.querySelector('button.fab-segment');

        expect(buttonElement).toBeTruthy();
    });

    it('Should be an anchor', () => {
        let anchorElement;
        let compiled: HTMLElement;

        component.href = 'href';
        component.rel = 'rel';
        component.target = 'target';
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        anchorElement = compiled.querySelector('a.fab-segment');

        expect(anchorElement.getAttribute('href')).toBe('href');
        expect(anchorElement.getAttribute('rel')).toBe('rel');
        expect(anchorElement.getAttribute('target')).toBe('target');
    });

    it('Should call onClick', () => {
        const tempFixture = TestBed.createComponent(SegmentExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
        let component;
        let segmentElement: any;

        tempFixture.detectChanges();

        segmentElement = compiled.querySelector('.fab-segment');

        segmentElement.click();

        tempFixture.detectChanges();

        segmentElement = compiled.querySelector('.fab-segment');

        component = tempFixture.componentInstance;

        expect(component.output).toBe('Clicked');
    });

    it('Should toggle', () => {
        const tempFixture = TestBed.createComponent(SegmentExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;
        let segmentElement: any;

        tempFixture.detectChanges();

        segmentElement = compiled.querySelector('.fab-segment');

        expect(segmentElement.getAttribute('data-active')).toBe('false');

        segmentElement.click();
        tempFixture.detectChanges();

        segmentElement = compiled.querySelector('.fab-segment');

        expect(segmentElement.getAttribute('data-active')).toBe('true');
    });
});
