import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-example-wrapper',
    templateUrl: './card-example.wrapper.html'
})
export class CardExampleWrapper implements OnInit {
    items = [
        {
            badges: [
                {
                    color: '',
                    label: 'Badge 1'
                },
                {
                    color: 'primary',
                    label: 'Badge 2'
                }
            ]
        },
        {
            badges: [
                {
                    color: 'lavender',
                    label: 'Badge 3'
                },
                {
                    color: 'hot',
                    label: 'Badge 4'
                }
            ]
        },
        {
            badges: [
                {
                    color: 'aux',
                    label: 'Badge 5'
                },
                {
                    color: 'dark',
                    label: 'Badge 6'
                }
            ]
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}
