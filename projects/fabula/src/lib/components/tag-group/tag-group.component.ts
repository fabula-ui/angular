import { Component, ElementRef, OnInit } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.css']
})
export class TagGroupComponent implements OnInit {
  host;
  props;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    this.host = this.elRef.nativeElement;

    this.props = {};

    this.themeService.attachClasses(this.host, 'tagGroup', this.props);
  }

}
