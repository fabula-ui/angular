import { Component, ElementRef, OnInit } from '@angular/core';

// Services
import { FabulaService } from '../../services/fabula.service';

@Component({
  selector: 'fab-collapse-toggle',
  templateUrl: './collapse-toggle.component.html',
})
export class CollapseToggleComponent implements OnInit {

  constructor(
    private elRef: ElementRef,
    private fabulaService: FabulaService
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
  }

}
