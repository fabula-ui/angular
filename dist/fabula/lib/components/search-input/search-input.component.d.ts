import { ElementRef, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { FabulaService } from '../../services/fabula.service';
export declare class SearchInputComponent extends InputComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    button: any;
    placeholder: string;
    buttonEl: ButtonComponent;
    inputEl: InputComponent;
    buttonProps: any;
    inputProps: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
    handleButton(): void;
}
