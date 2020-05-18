import { Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements AfterViewInit {
  @Input() active: boolean;
  @Input('active-border-color') activeBorderColor: string;
  @Input('active-fill-color') activeFillColor: string;
  @Input('active-color') activeColor: string;
  @Input() color: string;
  @Input() expand: boolean;
  @Input() faded: boolean;
  @Input() invert: boolean;
  @Input() stacked: boolean;
  @Input() type: string;
  @Output() clicked = new EventEmitter();

  host;
  props;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngAfterViewInit() {
    // this.host = this.elRef.nativeElement;
    // this.props = {
    //   active: this.active,
    //   activeBorderColor: this.activeBorderColor,
    //   activeColor: this.activeColor,
    //   expand: this.expand,
    //   stacked: this.stacked,
    //   type: this.type
    // };

    // this.themeService.attachClasses(this.host, 'tab', this.props);
  }

  childViewInit() {
    this.host = this.elRef.nativeElement;
    this.props = {
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

    console.log(this.props);

    this.themeService.attachClasses(this.host, 'tab', this.props);
  }

  handleClick() {
    this.clicked.emit(true);
  }

}
