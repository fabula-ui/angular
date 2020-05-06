import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent implements OnInit {
  @Input() color = '';
  @Input('corner-style') cornerStyle = 'circle';
  @Input() image = '';
  @Input() size = 'md';

  constructor(
    private elRef: ElementRef,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
    const props = {};

    this.themeService.attachClasses(el, 'avatar');
    // this.fabulaService.setStyles(el, this.styles, props);
  }

}
