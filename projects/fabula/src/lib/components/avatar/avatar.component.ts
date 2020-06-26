import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

// Methods
import getInitials from '@fabula/core/styles/methods/misc/getInitials';

// Styles
import AvatarStyles from '@fabula/core/styles/components/avatar/avatar';

@Component({
  selector: 'fab-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent implements OnInit {
  @Input() adaptColor = false;
  @Input() color = '';
  @Input() icon: any = 'image';
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

    host.classList.add(styles);
  }

  // Methods
  
  isObject(subject) {
    return typeof subject === 'object';
  }

  // Getters

  get initials(): string {
    return getInitials(this.showInitials);
  }

}
