import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Methods
import getInitials from '@fabula/core/styles/methods/misc/getInitials';

// Styles
import AvatarStyles from '@fabula/core/styles/components/avatar/avatar';

@Component({
  selector: 'fab-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent extends CommonComponent implements OnInit {
  @Input() color = '';
  @Input() darken = false;
  @Input() icon: any = 'image';
  @Input() image = '';
  @Input() lighten = false;
  @Input() rounded = false;
  @Input() showInitials = '';
  @Input() size = 'md';

  props;

  constructor(public elRef: ElementRef) {
    super(elRef);
  }

  ngOnInit() {
    this.props = this;
    this.styles = AvatarStyles;
    this.initStyles();
  }

  // Getters
  get initials(): string {
    return getInitials(this.showInitials);
  }

}
