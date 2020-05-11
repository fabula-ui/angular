import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {
  @Input() flow = 'horizontal';
  @Input() glued = false;
  @Input() spacing: string;

  host;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService,
  ) { }

  ngOnInit() {
    const props = {
      flow: this.flow,
      glued: this.glued,
      spacing: this.spacing
    };

    this.host = this.elRef.nativeElement;
    this.themeService.attachClasses(this.host, 'inputGroup', props);
  }

}
