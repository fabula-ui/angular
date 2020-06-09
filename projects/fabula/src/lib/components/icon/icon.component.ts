import { AfterViewInit, Component, ElementRef, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { css } from 'emotion';

// Styles
import IconStyles from '@fabula/core/theme/styles/Icon';

@Component({
  selector: 'fab-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() color = '';
  @Input() name: string;
  @Input() props;

  appended;
  host;
  svg;
  svgObject;

  constructor(
    public elRef: ElementRef,
    public renderer: Renderer2,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    let props;
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {
      color: this.color,
      name: this.name,
      ...this.props,
    };

    // Set and apply styles
    styles = css(IconStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);

    // Pass props to component
    this.props = props;

    // Handle svg
    this.handleSvg();
  }

  handleLoad(e) {
    const svgDocument = e.target.contentDocument;
    const svgObject = svgDocument.querySelector('svg');
    const svgWrapper = this.host.querySelector('.fab-icon__svg');

    if (svgObject) {
      this.renderer.appendChild(svgWrapper, svgObject);
    }
  }

  handleSvg() {
    let url;

    try {
      url = require(`@fabula/core/icons/${this.name}.svg`);

      this.svg = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } catch (err) {
      this.svg = null;
    }
  }

}
