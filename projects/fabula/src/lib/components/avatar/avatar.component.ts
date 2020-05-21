import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import AvatarStyles from '@fabula/core/theme/styles/Avatar';

@Component({
  selector: 'fab-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent implements OnInit {
  @Input() color = '';
  @Input() image = '';
  @Input() rounded = false;
  @Input('show-initials') showInitials = '';
  @Input() size = 'md';

  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const props = {
      color: this.color,
      size: this.size
    };
    const styles = css(AvatarStyles({ framework: 'angular', props }));

    host.classList.add(styles);
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
