import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Components
import { TabsComponent } from '../tabs/tabs.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import NavbarTabsStyles from '@fabula/core/styles/components/navbar-tabs/navbar-tabs';

@Component({
  selector: 'fab-navbar-tabs',
  templateUrl: './navbar-tabs.component.html',
})
export class NavbarTabsComponent extends TabsComponent implements OnInit {
  @Input() alignment: string;
  @Input() expand = false;
  
  tabsProps;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(NavbarTabsStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);

    this.tabsProps = this;
  }
}
