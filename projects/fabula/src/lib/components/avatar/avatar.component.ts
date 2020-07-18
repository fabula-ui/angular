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
  @Input() darken = false;
  @Input() icon: any = 'image';
  @Input() image = '';
  @Input() lighten = false;
  @Input() rounded = false;
  @Input() showInitials = '';
  @Input() size = 'md';

  props;

  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(AvatarStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
    this.props = this;
  }

  // Getters
  get initials(): string {
    return getInitials(this.showInitials);
  }

}
