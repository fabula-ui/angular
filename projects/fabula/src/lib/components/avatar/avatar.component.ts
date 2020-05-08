import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent implements OnInit {
  @Input() color = '';
  @Input() image = '';
  @Input() rounded = false;
  @Input() showInitials = '';
  @Input() size = 'md';

  constructor(
    private elRef: ElementRef,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
    const props = {
      color: this.color,
      size: this.size
    };

    this.themeService.attachClasses(el, 'avatar', props);
  }

  get initials(): string {
    const words = this.showInitials.split(' ');

    if (words.length > 1) {
      return `${words[0].slice(0, 1)}${words[1].slice(0,1)}`;
    } else if (words.length === 1) {
      return this.showInitials.slice(0, 2);
    } else {
      return '';
    }
  }

}
