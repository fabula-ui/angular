import { Component, OnInit } from '@angular/core';

// Services
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'fab-toast-portal',
  templateUrl: './toast-portal.component.html'
})
export class ToastPortalComponent implements OnInit {
  constructor(public toastService: ToastService) { }

  ngOnInit() { }

  get stacks() {
    return Object.keys(this.toastService.stacks).map(name => {
      return this.toastService.stacks[name];
    });
  }
}
