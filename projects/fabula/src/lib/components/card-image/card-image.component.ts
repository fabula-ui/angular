import { Component, ElementRef, OnInit, Input } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {
  @Input() color: string;
  @Input() height: any;
  @Input() src: string;
  
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
      cover: this.host.hasAttribute('cover'),
      height: this.height
    };

    this.themeService.attachClasses(this.host, 'cardImage', props);
  }

}
