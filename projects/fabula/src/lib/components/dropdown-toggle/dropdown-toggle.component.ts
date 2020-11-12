import {
    AfterViewChecked,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';

// Components
import { ButtonComponent } from '../button/button.component';

// Models
import { Icon } from '../../models/icon.model';

// Styles
import DropdownToggleStyles from '@fabula/core/styles/components/dropdown-toggle/dropdown-toggle';

@Component({
    selector: 'fab-dropdown-toggle',
    templateUrl: './dropdown-toggle.component.html',
})
export class DropdownToggleComponent extends ButtonComponent implements AfterViewChecked, OnInit {
    @Input() arrow = true;
    @Input() direction: string;
    @Input() icon: Icon;
    @Input() label: string;
    @Input() isOpen = false;

    @Output() toggle: EventEmitter<any> = new EventEmitter();

    @ViewChild('label') labelEl: ElementRef;

    constructor(
        public cdRef: ChangeDetectorRef,
        public elRef: ElementRef,
    ) { super(elRef); }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }

    ngOnInit() {
        this.props = { ...this };
        this.styles = DropdownToggleStyles;
        this.initStyles();
    }

    handleClick() {
        this.toggle.emit(true);
    }

    get arrowIsOnlyChild(): boolean {
        if (this.labelEl && this.labelEl.nativeElement && this.labelEl.nativeElement.childNodes) {
            return !this.labelEl.nativeElement.childNodes.length;
        } else {
            return false;
        }
    }
}
