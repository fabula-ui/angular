import { Component, ElementRef, OnInit } from '@angular/core';

// Servides
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent implements OnInit {
  host;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    let props;

    this.host = this.elRef.nativeElement;

    props = {
      padding: this.host.hasAttribute('padding')
    };

    this.themeService.attachClasses(this.host, 'cardFooter', props);
  }

}
