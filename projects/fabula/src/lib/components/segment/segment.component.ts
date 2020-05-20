import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  @Input() active = false;
  @Input() activeColor: string;
  @Input() activeFillColor: string;
  @Input() activeTextColor: string;
  @Input() color: string;
  @Input() expand: boolean;
  @Input() faded: boolean;
  @Input() href: string;
  @Input() invert: boolean;
  @Input() link: string;
  @Input() name: string;
  @Input() rounded: boolean;
  @Input() scope: string;
  @Input() stacked: boolean;
  @Input() target: string;

  @Output() selectedSegment = new EventEmitter();

  host;
  props;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngOnInit() {}

  childViewInit() {
    this.host = this.elRef.nativeElement;
    this.props = {
      activeColor: this.activeColor,
      activeFillColor: this.activeFillColor,
      activeTextColor: this.activeTextColor,
      color: this.color,
      expand: this.expand,
      faded: this.faded,
      invert: this.invert,
      rounded: this.rounded,
      stacked: this.stacked
    };

    if (this.active && this.scope && this.target) { this.toggleContent(); }

    this.themeService.attachClasses(this.host, 'segment', this.props);
  }

  handleClick() {
    if (this.name) { this.selectedSegment.emit(this.name); }
    if (this.scope && this.target) { this.toggleContent(); }
  }

  listen(events) {
    events.onChangeSegment.subscribe(segment => {
      this.active = segment === this.name;
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
