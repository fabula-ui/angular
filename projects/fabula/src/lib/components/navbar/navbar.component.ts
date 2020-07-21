import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import NavbarStyles from '@fabula/core/styles/components/navbar/navbar';

@Component({
  selector: 'fab-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit {
  @Input() color: string;
  @Input() height: any;

  constructor(public elRef: ElementRef) { }

  ngAfterViewInit() {
    const host = this.elRef.nativeElement;
    const styles = css(NavbarStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);
  }
}
