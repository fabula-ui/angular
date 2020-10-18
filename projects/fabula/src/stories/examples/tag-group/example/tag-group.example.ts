import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tag-group-example',
    templateUrl: './tag-group.example.html'
})
export class TagGroupExample {
    @Input() color: string;
    @Input() mb: any;
    @Input() spacing: any;
}
