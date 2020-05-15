import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() color: string;
  @Input() flow = 'vertical';
  @Input() glow = !this.color;

  host;

  private element: any;
  constructor(
    private elRef: ElementRef,
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    const props = {
      color: this.color,
      glow: this.glow
    };

    this.host = this.elRef.nativeElement;
    this.themeService.attachClasses(this.host, 'card', props);
  }

}
