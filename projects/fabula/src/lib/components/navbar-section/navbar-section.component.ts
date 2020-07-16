import { Component, OnInit, ElementRef, Input, ContentChild, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import NavbarSectionStyles from '@fabula/core/styles/components/navbar-section/navbar-section';

@Component({
  selector: 'fab-navbar-section',
  templateUrl: './navbar-section.component.html',
})
export class NavbarSectionComponent implements AfterViewInit {
  @Input() alignment: string;
  @Input() expand: boolean;
  
  constructor(public elRef: ElementRef) {}

  ngAfterViewInit() {
    const host = this.elRef.nativeElement;
    const styles = css(NavbarSectionStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }
}
