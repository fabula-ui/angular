import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit {
  @Input() color: string;
  @Input() divider: string;

  host;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    let props;

    this.host = this.elRef.nativeElement;

    props = {
      color: this.color,
      divider: this.divider,
      padding: this.host.hasAttribute('padding')
    };

    this.themeService.attachClasses(this.host, 'cardSection', props);
  }

}
