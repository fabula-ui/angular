import { Component, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements AfterViewInit, OnInit {
  @Input() color: string;
  @Input() link: string;
  @Input() size: string;

  host;
  props;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngAfterViewInit() {
    this.host = this.elRef.nativeElement;

    this.props = {
      anchor: !!this.host.querySelector('a'),
      button: !!this.host.querySelector('button'),
      color: this.color,
      size: this.size
    };

    this.themeService.attachClasses(this.host, 'tag', this.props);
  }

  ngOnInit() {}

}
