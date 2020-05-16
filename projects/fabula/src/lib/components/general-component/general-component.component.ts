import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'fab-component',
  template: '<div>Dummy component</div>'
})
export class GeneralComponent implements OnInit {
  al: any;
  alH: any;
  alV: any;
  align: any;
  alignH: any;
  alignV: any;
  host: any;
  p: any;
  pb: any;
  pl: any;
  pr: any;
  pt: any;
  px: any;
  py: any;

  constructor(public elRef: ElementRef) {}

  ngOnInit() {
    this.host = this.elRef.nativeElement;

    this.al = this.host.getAttribute('al');
    this.alH = this.host.getAttribute('al-h');
    this.alV = this.host.getAttribute('al-v');
    this.align = this.host.getAttribute('align');
    this.alignH = this.host.getAttribute('align-h');
    this.alignV = this.host.getAttribute('align-v');

    this.p = this.host.getAttribute('p');
    this.pb = this.host.getAttribute('pb');
    this.pl = this.host.getAttribute('pl');
    this.pr = this.host.getAttribute('pr');
    this.pt = this.host.getAttribute('pt');
    this.px = this.host.getAttribute('px');
    this.py = this.host.getAttribute('py');
  }

}
