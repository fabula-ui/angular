import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver, EmbeddedViewRef } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
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
    transitionDuration;

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

    handleToast(stackName) {
        const stack = this.stacks[stackName];
        const index = stack.toasts.length - 1;
        const toast = stack.toasts[index];
        const delay = toast.hideDelay || stack.hideDelay;

        setTimeout(() => {
            this.hideToast({ index, stack });
        }, delay);
    }

    hideToast(params) {
        const { index, stack } = params;

        let duration;
        let toastEl;

        if (!this.transitionDuration) {
            toastEl = document.querySelector('.fab-toast-wrapper');
            duration = window.getComputedStyle(toastEl).transitionDuration;
            this.transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
        }

        stack.toasts[index].hiding = true;

        setTimeout(() => {
            stack.toasts[index].hidden = true;
        }, this.transitionDuration + 1);
    }

    showToast(params) {
        const { stack, ...rest } = params;

        if (this.stacks[stack]) {
            this.stacks[stack].toasts.push({ ...rest, stack });
        } else {
            this.stacks.default.toasts.push({ ...rest, stack });
        }

        this.handleToast(stack);
    }
}
