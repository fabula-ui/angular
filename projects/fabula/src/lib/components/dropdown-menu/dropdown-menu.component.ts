import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';
import { css } from 'emotion';

// Styles
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';

@Component({
    selector: 'fab-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent implements OnInit {
    public host;

    open = false;

    constructor(
        private elRef: ElementRef
    ) { }

    ngOnInit() {
        let props = {};
        let styles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set and apply styles
        styles = css(DropdownMenuStyles({ framework: 'angular', props }));
        this.host.classList.add(styles);
    }

    // Listeners
    listen(events) {
        events.toggle.subscribe(open => {
          this.open = open;
          alert('open');
        });
      }
}
