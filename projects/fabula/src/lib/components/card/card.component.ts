import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() color = 'default';
  @Input('corner-style') cornerStyle = 'hard';
  @Input() flow = 'vertical';

  host;


  private element: any;
  constructor(
    private elRef: ElementRef,
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    const props = {};

    this.host = this.elRef.nativeElement;
    this.themeService.attachClasses(this.host, 'card', props);
  }

}
