import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Components
import { InputComponent } from '../input/input.component';

// Styles
import TagInputStyles from '@fabula/core/theme/styles/TagInput';


@Component({
  selector: 'fab-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent extends InputComponent implements OnInit {
  @Input() tags = ['Angular'];

  focus = false;
  inputStatus = 'clear';
  host;
  tag;
  width;

  constructor(
    public elRef: ElementRef
  ) {
    super(elRef);
  }

  ngOnInit() {
    let props;
    let styles;

    super.ngOnInit();

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {};

    // Set and apply styles
    styles = css(TagInputStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

  addTag() {
    this.inputStatus = 'clear';
    this.tags.push(this.tag);
    this.tag = '';
    this.width = null;
  }

  handleBlur() {
    this.focus = false;
  }

  handleChange(e) {
    this.inputStatus = 'dirty';
    this.width = `${e.target.scrollWidth}px`;
  }

  handleFocus() {
    this.focus = true;
  }

  handleKeypress(e) {
    if (e.keyCode === 13) {
      this.addTag();
    } else if (!this.tag && e.keyCode === 8) {
      if (this.inputStatus === 'clear') {
        this.removeLastTag();
      } else {
        this.inputStatus = 'clear';
      }

    }
  }

  // handleTag() {
  //   if (!this.tag) {
  //     setTimeout(() => {
  //       this.tagIsEmpty = true;
  //     }, 150);
  //   } else {
  //     this.tagIsEmpty = false;
  //   }
  // }

  removeLastTag() {
    this.tags.pop();
  }

}
