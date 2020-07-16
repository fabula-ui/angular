import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import NavbarLogoStyles from '@fabula/core/styles/components/navbar-logo/navbar-logo';

@Component({
  selector: 'fab-navbar-logo',
  templateUrl: './navbar-logo.component.html',
})
export class NavbarLogoComponent implements OnInit {
  @Input() alt: string;
  @Input() src: string;
  
  constructor(public elRef: ElementRef) {}

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(NavbarLogoStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);
  }
}
