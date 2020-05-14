import { Component, ElementRef, OnInit } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  host;

  constructor(
    private elRef: ElementRef,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    const props = {};

    this.host = this.elRef.nativeElement;

    // Attach classes to host
    this.themeService.attachClasses(this.host, 'row', props);
  }

}
