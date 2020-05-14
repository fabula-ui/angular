import { Component, OnInit, ElementRef, Input } from '@angular/core';

// Services
import { FabulaService } from '../../services/fabula.service';

@Component({
  selector: 'fab-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent implements OnInit {
  @Input() color = '';
  constructor(
    private elRef: ElementRef,
    private fabulaService: FabulaService
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
    const props = {
      color: this.color
    };
  }

}
