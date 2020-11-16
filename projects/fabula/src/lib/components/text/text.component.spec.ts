import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { TextComponent } from './text.component';

// Modules
import { TextModule } from '../../modules/text.module';

@Component({
    template: `<fab-text>Content</fab-text>`,
})
class TextExample { }

describe('Text Component', () => {
    let component: TextComponent;
    let fixture: ComponentFixture<TextComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TextExample
            ],
            imports: [
                TextModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(TextExample);
        let element;
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        element = compiled.querySelector('.fab-text');

        expect(element.textContent).toContain('Content');
    });

    it('Should have prop content as inner content', () => {
        let compiled: HTMLElement;

        component.content = 'Content';
        fixture.detectChanges();

        compiled = fixture.debugElement.nativeElement;
        
        expect(compiled.textContent).toBe('Content')
    });

    // TODO: fix this test
    // it('Should change weight', () => {
    //     let compiled: HTMLElement;
    //     let element;

    //     fixture.detectChanges();
        
    //     compiled = fixture.debugElement.nativeElement;
    //     element = compiled.querySelector('.fab-text');

    //     expect(getComputedStyle(compiled).fontWeight).toBe('');
    // });

    // TODO: add block and inline tests
});
