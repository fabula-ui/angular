import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'fab-input',
    styleUrls: ['input.component.scss'],
    templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
    @Input() color = '';
    @Input() disabled = false;
    @Input() expand: boolean;
    @Input() has: string;
    @Input() message: string;
    @Input('message-color') messageColor: string;
    @Input() placeholder = '';
    @Input() size: string;

    hasFocus = false;
    host;

    constructor(
        private elRef: ElementRef,
        private themeService: ThemeService,
    ) { }

    ngOnInit() {
        const props = {
            color: this.color,
            expand: this.expand,
            has: this.has,
            message: this.message,
            messageColor: this.messageColor,
            size: this.size
        };

        this.host = this.elRef.nativeElement;
        this.themeService.attachClasses(this.host, 'input', props);
    }

    onFocus(hasFocus: boolean) {
        this.hasFocus = hasFocus;
    }

}
