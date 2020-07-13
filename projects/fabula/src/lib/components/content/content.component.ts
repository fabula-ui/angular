import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import ContentStyles from '@fabula/core/styles/components/content/content';

@Component({
  selector: 'fab-content',
  templateUrl: './content.component.html',
})
export class ContentComponent implements OnInit {
  @Input() active = false;
  @Input() name: string;
  @Input() scope: string;

  constructor(public elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(ContentStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

}
