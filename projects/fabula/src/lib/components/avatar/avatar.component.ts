import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Methods
import getInitials from '@fabula/core/methods/misc/getInitials';

// Models
import { Icon } from '../../models/icon.model';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import AvatarStyles from '@fabula/core/styles/components/avatar/avatar';

@Component({
  selector: 'fab-avatar',
  styleUrls: ['./avatar.component.scss'],
  templateUrl: './avatar.component.html'
})
export class AvatarComponent extends CommonComponent implements OnInit {
  @Input() color = '';
  @Input() darken = false;
  @Input() faded = false;
  @Input() icon: Icon = {
    name: 'image'
  };
  @Input() lighten = false;
  @Input() rounded = false;
  @Input() showInitials = '';
  @Input() size = 'md';
  @Input() src = '';

  inline = true;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
    ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.styles = AvatarStyles;
    this.initStyles();
  }

  // Getters
  get initials(): string {
    return getInitials(this.showInitials);
  }
}
