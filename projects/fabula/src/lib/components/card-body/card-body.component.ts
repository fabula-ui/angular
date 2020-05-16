import { Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
    selector: 'fab-card-body',
    templateUrl: './card-body.component.html',
})
export class CardBodyComponent implements OnInit {
    host;
    padding;

    constructor(
        public elRef: ElementRef,
    ) { }

    ngOnInit() {
        this.host = this.elRef.nativeElement;

        this.padding = this.host.hasAttribute('padding');
        // const host = this.elRef.nativeElement;
        // const element = host.querySelector('.fab-card__body');
        // const children = [];
        // const avatar = host.querySelector('fab-avatar');

        // if (avatar) {
        //     const div = document.createElement('div');

        //     avatar.style.display = 'flex';
        //     div.classList.add('fab-card__body__content');
        //     element.setAttribute('data-has-avatar', true);

        //     for (const child of element.children) {
        //         if (child !== avatar) {
        //             children.push(child);
        //         }
        //     }

        //     for (const child of children) {
        //         div.append(child);
        //     }

        //     element.append(div);
        // }
    }

}
