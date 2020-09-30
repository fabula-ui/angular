import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import IconStyles from '@fabula/core/styles/components/icon/icon';

@Component({
  selector: 'fab-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit {
  @Input() color: string;
  @Input() name: string;
  @Input() props;
  @Input() size = 'md';

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const props = {
      color: this.color,
      name: this.name,
      size: this.size,
      ...this.props,
    };
    const styles = css(IconStyles({ framework: 'angular', props }));

    host.classList.add(styles);

    // Pass props to component
    this.props = props;
  }
}
