import { Injectable, Input } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FabulaService {
    @Input() responsiveness = false;
    @Input() utils = false;

    constructor() { }
}
