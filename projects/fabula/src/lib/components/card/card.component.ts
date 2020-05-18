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
    let props;

    this.host = this.elRef.nativeElement;

    props = {
      color: this.color,
      glow: this.glow,
      padding: this.host.hasAttribute('padding')
    };

    this.themeService.attachClasses(this.host, 'card', props);
  }

}
