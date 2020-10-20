import { Component, OnInit } from '@angular/core';

import { ToastService } from '../../../../public-api';

@Component({
    selector: 'app-toast-stacks',
    templateUrl: './toast-stacks.wrapper.html'
})
export class ToastStacksWrapper implements OnInit {
    constructor(private toastService: ToastService) { }

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
            icon: {
                name: 'compass'
            },
            message: 'Here is an example of a toast component working...',
            stack
        });
    }

    createStacks() {
        this.toastService.createStack({
            name: 'bottomCenter',
            placement: {
                x: 'center',
                y: 'bottom'
            }
        });

        this.toastService.createStack({
            name: 'bottomLeft',
            placement: {
                x: 'left',
                y: 'bottom'
            }
        });

        this.toastService.createStack({
            name: 'bottomRight',
            placement: {
                x: 'right',
                y: 'bottom'
            }
        });

        this.toastService.createStack({
            name: 'topCenter',
            placement: {
                x: 'center',
                y: 'top'
            }
        });

        this.toastService.createStack({
            name: 'topLeft',
            placement: {
                x: 'left',
                y: 'top'
            }
        });

        this.toastService.createStack({
            name: 'topRight',
            placement: {
                x: 'right',
                y: 'top'
            }
        });
    }

}
