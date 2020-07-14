import { Component, OnInit } from '@angular/core';

import { ToastService } from '../../../../public-api';

@Component({
    selector: 'app-toast-stacks',
    templateUrl: './toast-stacks.wrapper.html'
})
export class ToastStacksWrapper implements OnInit {
    test: string;
    constructor(private toastService: ToastService) {
        this.test = toastService.test;
    }

    ngOnInit() {
        this.createStacks();
    }

    addToast(stack) {
        this.toastService.showToast({
            color: 'primary',
            closeButton: {
                color: 'primary',
                invert: true,
                label: 'Go there'
            },
            hideDelay: 4000,
            message: 'Here is an example of a toast component working...',
            stack
        });

        console.log('stacks', this.toastService.stacks);
    }

    createStacks() {
        this.toastService.createStacks([
            {
                name: 'bottomCenter',
                placement: {
                    x: 'center',
                    y: 'bottom'
                }
            },
            {
                name: 'bottomLeft',
                placement: {
                    x: 'left',
                    y: 'bottom'
                }
            },
            {
                name: 'bottomRight',
                placement: {
                    x: 'right',
                    y: 'bottom'
                }
            },
            {
                name: 'topCenter',
                placement: {
                    x: 'center',
                    y: 'top'
                }
            },
            {
                name: 'topLeft',
                placement: {
                    x: 'left',
                    y: 'top'
                }
            },
            {
                name: 'topRight',
                placement: {
                    x: 'right',
                    y: 'top'
                }
            }
        ]);

        console.log('stacks', this.toastService.stacks);
    }

}
