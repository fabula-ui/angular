import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { WrapperComponent } from './wrapper.component';

// Modules
import { HelpersModule } from '../../modules/helpers.module';

@Component({
    template: `<fab-element>Content</fab-element>`,
})
class WrapperExample { }

describe('Wrapper Component', () => {
    let component: WrapperComponent;
    let fixture: ComponentFixture<WrapperComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                WrapperExample
            ],
            imports: [
                HelpersModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.fab-wrapper');

        expect(element).toBeTruthy();
    });

    it('Should have inner content as children', () => {
        const tempFixture = TestBed.createComponent(WrapperExample);
        const compiled: HTMLElement = tempFixture.debugElement.nativeElement;

        tempFixture.detectChanges();

        expect(compiled.textContent.trim()).toBe('Content');
    });
});
