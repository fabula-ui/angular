/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/list/list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren, } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
import { ListItemComponent } from '../list-item/list-item.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ListStyles from '@fabula/core/styles/components/list/list';
export class ListComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.divider = true;
        this.padding = false;
        this.striped = false;
        this.clickItem = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.contentItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => { this.handleItem(item); }));
        this.viewItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => { this.handleItem(item); }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ListStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @param {?} item
     * @return {?}
     */
    handleItem(item) {
        if (this.color && !item.color) {
            item.color = this.color;
        }
        item.clicked.subscribe((/**
         * @return {?}
         */
        () => {
            this.clickItem.emit();
        }));
        item.divider = this.divider;
        item.padding = this.padding;
        item.striped = this.striped;
        item.ngOnInit();
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-list',
                template: "<div class=\"fab-list-wrapper\" data-fab-wrapper=\"list\">\n  <div class=\"fab-list\" data-fab-component=\"list\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ListComponent.propDecorators = {
    contentItems: [{ type: ContentChildren, args: [ListItemComponent,] }],
    viewItems: [{ type: ViewChildren, args: [ListItemComponent,] }],
    color: [{ type: Input }],
    divider: [{ type: Input }],
    padding: [{ type: Input }],
    props: [{ type: Input }],
    striped: [{ type: Input }],
    clickItem: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ListComponent.prototype.contentItems;
    /** @type {?} */
    ListComponent.prototype.viewItems;
    /** @type {?} */
    ListComponent.prototype.color;
    /** @type {?} */
    ListComponent.prototype.divider;
    /** @type {?} */
    ListComponent.prototype.padding;
    /** @type {?} */
    ListComponent.prototype.props;
    /** @type {?} */
    ListComponent.prototype.striped;
    /** @type {?} */
    ListComponent.prototype.clickItem;
    /** @type {?} */
    ListComponent.prototype.elRef;
    /** @type {?} */
    ListComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFFWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7O0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLFVBQVUsTUFBTSwwQ0FBMEMsQ0FBQztBQU9sRSxNQUFNLE9BQU8sYUFBYyxTQUFRLGVBQWU7Ozs7O0lBWWhELFlBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUZ2QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBVDVCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFZixjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFLM0IsQ0FBQzs7OztJQUVsQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUF1QixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUF1QixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDbEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBR0QsVUFBVSxDQUFDLElBQUk7UUFDYixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQUU7UUFFM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixpTEFBb0M7O2FBRXJDOzs7O1lBdkJDLFVBQVU7WUFjSCxhQUFhOzs7MkJBV25CLGVBQWUsU0FBQyxpQkFBaUI7d0JBQ2pDLFlBQVksU0FBQyxpQkFBaUI7b0JBRTlCLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFFTCxNQUFNOzs7O0lBVFAscUNBQStFOztJQUMvRSxrQ0FBeUU7O0lBRXpFLDhCQUF1Qjs7SUFDdkIsZ0NBQXdCOztJQUN4QixnQ0FBeUI7O0lBQ3pCLDhCQUFvQjs7SUFDcEIsZ0NBQXlCOztJQUV6QixrQ0FBNEQ7O0lBRzFELDhCQUF3Qjs7SUFDeEIsc0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBMaXN0U3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9saXN0L2xpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKExpc3RJdGVtQ29tcG9uZW50KSBjb250ZW50SXRlbXM6IFF1ZXJ5TGlzdDxMaXN0SXRlbUNvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGRyZW4oTGlzdEl0ZW1Db21wb25lbnQpIHZpZXdJdGVtczogUXVlcnlMaXN0PExpc3RJdGVtQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBkaXZpZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFkZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBwcm9wczogYW55O1xuICBASW5wdXQoKSBzdHJpcGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGNsaWNrSXRlbTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb250ZW50SXRlbXMuZm9yRWFjaCgoaXRlbTogTGlzdEl0ZW1Db21wb25lbnQpID0+IHsgdGhpcy5oYW5kbGVJdGVtKGl0ZW0pOyB9KTtcbiAgICB0aGlzLnZpZXdJdGVtcy5mb3JFYWNoKChpdGVtOiBMaXN0SXRlbUNvbXBvbmVudCkgPT4geyB0aGlzLmhhbmRsZUl0ZW0oaXRlbSk7IH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBMaXN0U3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG5cbiAgLy8gTWV0aG9kc1xuICBoYW5kbGVJdGVtKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5jb2xvciAmJiAhaXRlbS5jb2xvcikgeyBpdGVtLmNvbG9yID0gdGhpcy5jb2xvcjsgfVxuXG4gICAgaXRlbS5jbGlja2VkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNsaWNrSXRlbS5lbWl0KCk7XG4gICAgfSk7XG5cbiAgICBpdGVtLmRpdmlkZXIgPSB0aGlzLmRpdmlkZXI7XG4gICAgaXRlbS5wYWRkaW5nID0gdGhpcy5wYWRkaW5nO1xuICAgIGl0ZW0uc3RyaXBlZCA9IHRoaXMuc3RyaXBlZDtcblxuICAgIGl0ZW0ubmdPbkluaXQoKTtcbiAgfVxufVxuIl19