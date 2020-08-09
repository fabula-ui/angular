import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { css } from 'emotion';

// Styles
import CheckboxStyles from '@fabula/core/styles/components/checkbox/checkbox';

@Component({
  selector: 'fab-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent implements OnInit {
  @Input() activeColor: string;
  @Input() checked = false;
  @Input() color: string;
  @Input() disabled = false;
  @Input() inactiveColor: string;
  @Input() indeterminate = false;
  @Input() label: string;
  @Input() readOnly = false;
  @Input() rounded = false;
  @Input() size = 'md';

  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() check: EventEmitter<any> = new EventEmitter();
  @Output() uncheck: EventEmitter<any> = new EventEmitter();

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(CheckboxStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);
  }

  // Methods
  handleChange(e) {
    if (!this.disabled && !this.readOnly) {
      this.checked = !!e ? e.target.checked : !this.checked;
      this.indeterminate = !!e ? e.target.indeterminate : false;
    }

    this.handleEvents();
  }

  handleEvents() {
    this.change.emit();

    if (this.checked) { this.check.emit(); }
    if (!this.checked) { this.uncheck.emit(); }
  }
}
