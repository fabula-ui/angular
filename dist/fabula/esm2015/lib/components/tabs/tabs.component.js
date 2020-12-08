/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tabs/tabs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ContentChildren, QueryList } from '@angular/core';
import { css } from 'emotion';
// Components
import { SegmentsComponent } from '../segments/segments.component';
import { TabComponent } from '../tab/tab.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import TabsStyles from '@fabula/core/styles/components/tabs/tabs';
export class TabsComponent extends SegmentsComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.tabComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        (child) => {
            if (!child.type) {
                child.type = this.type;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const styles = css(TabsStyles({
            framework: 'angular', props: Object.assign({}, this, this.props)
        }));
        host.classList.add(styles);
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tabs',
                template: "<div class=\"fab-tabs-wrapper\" data-fab-wrapper=\"tabs\">\n  <div class=\"fab-tabs\" data-fab-component=\"tabs\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: [":host .fab-tabs-wrapper{height:100%}"]
            }] }
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
TabsComponent.propDecorators = {
    tabComponents: [{ type: ContentChildren, args: [TabComponent,] }],
    alignment: [{ type: Input }],
    props: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TabsComponent.prototype.tabComponents;
    /** @type {?} */
    TabsComponent.prototype.alignment;
    /** @type {?} */
    TabsComponent.prototype.props;
    /** @type {?} */
    TabsComponent.prototype.elRef;
    /** @type {?} */
    TabsComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW1ELE1BQU0sZUFBZSxDQUFDO0FBQ2xKLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRzlCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLFVBQVUsTUFBTSwwQ0FBMEMsQ0FBQztBQU9sRSxNQUFNLE9BQU8sYUFBYyxTQUFRLGlCQUFpQjs7Ozs7SUFLbEQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDSixDQUFDOzs7O0lBRWxDLGVBQWU7UUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFtQixFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQUU7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTs7Y0FDQSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztjQUMvQixNQUFNLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUM1QixTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssb0JBQ3RCLElBQUksRUFDSixJQUFJLENBQUMsS0FBSyxDQUNkO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFFcEIsK0tBQW9DOzthQUNyQzs7OztZQWpCMkIsVUFBVTtZQVE3QixhQUFhOzs7NEJBV25CLGVBQWUsU0FBQyxZQUFZO3dCQUM1QixLQUFLO29CQUNMLEtBQUs7Ozs7SUFGTixzQ0FBc0U7O0lBQ3RFLGtDQUEyQjs7SUFDM0IsOEJBQW9COztJQUdsQiw4QkFBd0I7O0lBQ3hCLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgU2VnbWVudHNDb21wb25lbnQgfSBmcm9tICcuLi9zZWdtZW50cy9zZWdtZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiL3RhYi5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVGFic1N0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvdGFicy90YWJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLXRhYnMnLFxuICBzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGV4dGVuZHMgU2VnbWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFRhYkNvbXBvbmVudCkgdGFiQ29tcG9uZW50czogUXVlcnlMaXN0PFRhYkNvbXBvbmVudD47XG4gIEBJbnB1dCgpIGFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBwcm9wczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG4gICAgdGhpcy50YWJDb21wb25lbnRzLmZvckVhY2goKGNoaWxkOiBUYWJDb21wb25lbnQpID0+IHtcbiAgICAgIGlmICghY2hpbGQudHlwZSkgeyBjaGlsZC50eXBlID0gdGhpcy50eXBlOyB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHN0eWxlcyA9IGNzcyhUYWJzU3R5bGVzKHtcbiAgICAgIGZyYW1ld29yazogJ2FuZ3VsYXInLCBwcm9wczoge1xuICAgICAgICAuLi50aGlzLFxuICAgICAgICAuLi50aGlzLnByb3BzXG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgaG9zdC5jbGFzc0xpc3QuYWRkKHN0eWxlcyk7XG4gIH1cbn1cbiJdfQ==