import { ChangeDetectorRef, Component, OnInit, ElementRef, Input, AfterContentChecked, AfterViewInit } from '@angular/core';

// Services
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'fab-toast-portal',
  templateUrl: './toast-portal.component.html'
})
export class ToastPortalComponent implements OnInit {
  // stacks: any;

  constructor(
    public toastService: ToastService
  ) {
    // this.stacks = this.toastService.stacks;
  }

  ngOnInit() { }

  get stacks() {
    return Object.keys(this.toastService.stacks).map(name => {
      return this.toastService.stacks[name];
    });
  }


}
