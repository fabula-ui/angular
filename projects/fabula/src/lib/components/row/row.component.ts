import { Component, ElementRef, OnInit } from '@angular/core';

// Components
import { GeneralComponent } from '../general-component/general-component.component';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent extends GeneralComponent implements OnInit {
  host;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) {
    super(elRef);
  }

  ngOnInit() {
    let props = {};

    super.ngOnInit();

    this.host = this.elRef.nativeElement;

    props = {
      p: this.p,
      pb: this.pb,
      pl: this.pl,
      pr: this.pr,
      pt: this.pt,
      px: this.px,
      py: this.py,
    };

    // Attach classes to host
    // this.themeService.attachClasses(this.host, 'row', props);
  }

}
