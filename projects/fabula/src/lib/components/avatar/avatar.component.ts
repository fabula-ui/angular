import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

// Methods
import getInitials from '@fabula/core/theme/methods/misc/getInitials';

// Styles
import AvatarStyles from '@fabula/core/theme/styles/Avatar';

@Component({
  selector: 'fab-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent implements OnInit {
  @Input() adaptColor = false;
  @Input() color = '';
  @Input() icon: string;
  @Input() image = '';
  @Input() rounded = false;
  @Input() showInitials = '';
  @Input() size = 'md';

  avatarIcon;

  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const props = {
      adaptColor: this.adaptColor,
      color: this.color,
      rounded: this.rounded,
      size: this.size
    };
    const styles = css(AvatarStyles({ framework: 'angular', props }));

    this.avatarIcon = typeof this.icon === 'string' ? this.icon : 'image';

    host.classList.add(styles);
  }

  get initials(): string {
    return getInitials(this.showInitials);
  }

}
