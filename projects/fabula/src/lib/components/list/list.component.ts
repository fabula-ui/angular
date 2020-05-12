import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() color: string;
  @Input() padded = true;
  @Input() striped = false;

  host;
  
  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    let props;

    this.host = this.elRef.nativeElement;

    // Set props
    props = {
      color: this.color,
      framework: 'angular',
      padded: this.padded,
      striped: this.striped
    };

    // Attach classes to host
    this.themeService.attachClasses(this.host, 'list', props);
  }

}
