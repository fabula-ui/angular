import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver, EmbeddedViewRef } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    test = 'Teste';
    portal = false;
    stacks = {
        default: {
            placement: {
                x: 'right',
                y: 'bottom'
            },
            toasts: []
        }
    };

    componentRef;

    constructor(
        private appRef: ApplicationRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver
    ) {}

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

    showToast(params) {
        const { stack, ...rest } = params;

        if (this.stacks[stack]) {
            this.stacks[stack].toasts.push({ ...rest });
        } else {
            this.stacks.default.toasts.push({ ...rest });
        }
    }
}
