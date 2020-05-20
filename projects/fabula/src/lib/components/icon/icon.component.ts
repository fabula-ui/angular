import { Component, ElementRef, OnInit, Input } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() name: string;
  host;
  props;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    this.host = this.elRef.nativeElement;
    this.props = {
      name: this.name
    };

    this.themeService.attachClasses(this.host, 'icon', this.props);
  }

}
