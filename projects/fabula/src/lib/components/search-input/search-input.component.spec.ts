import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ButtonComponent } from '../button/button.component';
import { SearchInputComponent } from './search-input.component';

// Modules
import { SearchInputModule } from '../../modules/search-input.module';
import { ButtonModule } from '../../modules/button.module';

@Component({
    template: `<fab-search-input><fab-button></fab-button></fab-search-input>`,
})
class SearchInputExample { }

describe('Input Component', () => {
    let component: SearchInputComponent;
    let fixture: ComponentFixture<SearchInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchInputExample
            ],
            imports: [
                ButtonModule,
                SearchInputModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have an input', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const inputElement = compiled.querySelector('.fab-input');

        expect(inputElement).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const tempFixture = TestBed.createComponent(SearchInputExample);
        let buttonElement;
        let compiled: HTMLElement;

        tempFixture.detectChanges();

        compiled = tempFixture.debugElement.nativeElement;
        buttonElement = compiled.querySelector('.fab-button');

        expect(buttonElement).toBeTruthy();
    });
});