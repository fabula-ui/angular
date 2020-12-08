import { OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
export declare class ToastPortalComponent implements OnInit {
    toastService: ToastService;
    constructor(toastService: ToastService);
    ngOnInit(): void;
    readonly stacks: any[];
}
