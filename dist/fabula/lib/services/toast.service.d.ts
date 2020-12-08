export declare class ToastService {
    portal: boolean;
    stacks: {
        default: {
            hideDelay: number;
            placement: {
                x: string;
                y: string;
            };
            toasts: any[];
        };
    };
    transitionDuration: any;
    constructor();
    createStack(params: any): void;
    createStacks(newStacks: any): void;
    handleToast(stackName: any): void;
    hideToast(params: any): void;
    showToast(params: any): void;
}
