import { Component, ElementRef, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import TabStyles from '@fabula/core/theme/styles/Tab';

@Component({
  selector: 'fab-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements AfterViewInit {
  @Input() active = false;
  @Input('active-border-color') activeBorderColor: string;
  @Input('active-fill-color') activeFillColor: string;
  @Input('active-color') activeColor: string;
  @Input() color: string;
  @Input() expand: boolean;
  @Input() faded: boolean;
  @Input() href: string;
  @Input() invert: boolean;
  @Input() link: string;
  @Input() name: string;
  @Input() scope: string;
  @Input() stacked: boolean;
  @Input() target: string;
  @Input() type: string;

  @Output() selectedTab = new EventEmitter();

  host;
  props;

  constructor(
    public elRef: ElementRef,
  ) { }

  ngAfterViewInit() {}

  childViewInit() {
    let props;
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {
      active: this.active,
      activeBorderColor: this.activeBorderColor,
      activeFillColor: this.activeFillColor,
      activeColor: this.activeColor,
      color: this.color,
      expand: this.expand,
      invert: this.invert,
      stacked: this.stacked,
      type: this.type
    };

    // Toggle content
    if (this.active && this.scope && this.target) { this.toggleContent(); }

    // Set and apply styles
    styles = css(TabStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

  handleClick() {
    if (this.name) { this.selectedTab.emit(this.name); }
    if (this.scope && this.target) { this.toggleContent(); }
  }

  listen(events) {
    events.onChangeTab.subscribe(tab => {
      this.active = tab === this.name;
    });
  }

  toggleContent() {
    const allOtherContent = document.querySelectorAll(`[data-scope='${this.scope}']:not(${this.target})`);
    const targetContent = document.querySelector(`${this.target}[data-scope='${this.scope}']`);

    allOtherContent.forEach(other => {
      other.setAttribute('data-visible', 'false');
    });

    targetContent.setAttribute('data-visible', 'true');
  }

}
