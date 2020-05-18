import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() color: string;
  @Input() marker: string;
  @Input() text: string;
  @Input() title: string;

  host;
  props;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    this.host = this.elRef.nativeElement;
    this.props = {
      color: this.color,
      marker: this.marker
    };

    this.themeService.attachClasses(this.host, 'alert', this.props);
  }

}
