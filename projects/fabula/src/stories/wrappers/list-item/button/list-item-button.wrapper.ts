import { Component } from '@angular/core';

@Component({
    templateUrl: './list-item-button.wrapper.html'
})
export class ListItemButtonWrapper {
    handleClick() {
        alert('Click event triggered');
    }
}
