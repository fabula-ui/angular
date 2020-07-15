import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver, EmbeddedViewRef } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    test = 'Teste';
    portal = false;
    stacks = {
        default: {
            hideDelay: 2000,
            placement: {
                x: 'right',
                y: 'bottom'
            },
            toasts: []
        }
    };

    constructor() { }

    createStack(params) {
        const { name, placement } = params;

        this.stacks[name] = {
            placement,
            toasts: []
        }
    }

    createStacks(newStacks) {
        for (let i = 0; i < newStacks.length; i++) {
            const newStack = newStacks[i];
            const { name, placement } = newStack;

            this.stacks[name] = {
                placement,
                toasts: []
            };
        }
    }

    handleToast(toast, stackName) {
        const stack = this.stacks[stackName];
        const index = stack.toasts.length - 1;
        const delay = toast.hideDelay || stack.hideDelay;
        let duration;
        let toastEl;
        let transitionDuration;

        setTimeout(() => {
            toastEl = document.querySelector('.fab-toast-wrapper');
            duration = window.getComputedStyle(toastEl).transitionDuration;
            transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;

            setTimeout(() => {
                stack.toasts[index].hiding = true;
            }, delay);

            setTimeout(() => {
                stack.toasts[index].hidden = true;
            }, delay + transitionDuration + 1);
        }, 1);
    }

    showToast(params) {
        const { stack, ...rest } = params;

        if (this.stacks[stack]) {
            this.stacks[stack].toasts.push({ ...rest });
        } else {
            this.stacks.default.toasts.push({ ...rest });
        }

        this.handleToast({ ...rest }, stack);
    }
}
