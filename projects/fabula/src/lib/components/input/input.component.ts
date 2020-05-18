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
    props;

    constructor(
        private elRef: ElementRef,
        private themeService: ThemeService,
    ) { }

    ngOnInit() {
        this.host = this.elRef.nativeElement;
        this.props = {
            color: this.color,
            expand: this.expand,
            glow: this.host.hasAttribute('glow'),
            has: this.has,
            message: this.message,
            messageColor: this.messageColor,
            size: this.size
        };

        this.themeService.attachClasses(this.host, 'input', this.props);
    }

    onFocus(hasFocus: boolean) {
        this.hasFocus = hasFocus;
    }

}
