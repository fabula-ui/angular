/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card/card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ContentChildren, QueryList } from '@angular/core';
// Components
import { CardImageComponent } from '../card-image/card-image.component';
import { CardSectionComponent } from '../card-section/card-section.component';
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import CardStyles from '@fabula/core/styles/components/card/card';
export class CardComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.glow = false;
        this.layout = 'v';
        this.padding = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.cardImageComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        (child) => {
            child.layout = this.layout;
            child.ngOnInit();
        }));
        this.cardSectionComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        (child) => {
            child.layout = this.layout;
            child.ngOnInit();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = CardStyles;
        this.initStyles();
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-card',
                template: "<div class=\"fab-card\" data-fab-component=\"card\">\n    <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
CardComponent.propDecorators = {
    cardImageComponents: [{ type: ContentChildren, args: [CardImageComponent,] }],
    cardSectionComponents: [{ type: ContentChildren, args: [CardSectionComponent,] }],
    color: [{ type: Input }],
    glow: [{ type: Input }],
    layout: [{ type: Input }],
    padding: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CardComponent.prototype.cardImageComponents;
    /** @type {?} */
    CardComponent.prototype.cardSectionComponents;
    /** @type {?} */
    CardComponent.prototype.color;
    /** @type {?} */
    CardComponent.prototype.glow;
    /** @type {?} */
    CardComponent.prototype.layout;
    /** @type {?} */
    CardComponent.prototype.padding;
    /** @type {?} */
    CardComponent.prototype.elRef;
    /** @type {?} */
    CardComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLGVBQWUsRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdoSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxVQUFVLE1BQU0sMENBQTBDLENBQUM7QUFNbEUsTUFBTSxPQUFPLGFBQWMsU0FBUSxlQUFlOzs7OztJQVNoRCxZQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ2pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFGdkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU41QixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFLUSxDQUFDOzs7O0lBRWxDLGVBQWU7UUFDYixJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1lBQzdELEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBMkIsRUFBRSxFQUFFO1lBQ2pFLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQix5R0FBb0M7YUFDckM7Ozs7WUFoQm1CLFVBQVU7WUFRckIsYUFBYTs7O2tDQVVuQixlQUFlLFNBQUMsa0JBQWtCO29DQUNsQyxlQUFlLFNBQUMsb0JBQW9CO29CQUVwQyxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBTk4sNENBQXdGOztJQUN4Riw4Q0FBOEY7O0lBRTlGLDhCQUF1Qjs7SUFDdkIsNkJBQXNCOztJQUN0QiwrQkFBc0I7O0lBQ3RCLGdDQUF5Qjs7SUFHdkIsOEJBQXdCOztJQUN4QixzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENhcmRJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2NhcmQtaW1hZ2UvY2FyZC1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuLi9jYXJkLXNlY3Rpb24vY2FyZC1zZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IENhcmRTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2NhcmQvY2FyZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihDYXJkSW1hZ2VDb21wb25lbnQpIGNhcmRJbWFnZUNvbXBvbmVudHM6IFF1ZXJ5TGlzdDxDYXJkSW1hZ2VDb21wb25lbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKENhcmRTZWN0aW9uQ29tcG9uZW50KSBjYXJkU2VjdGlvbkNvbXBvbmVudHM6IFF1ZXJ5TGlzdDxDYXJkU2VjdGlvbkNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZ2xvdyA9IGZhbHNlO1xuICBASW5wdXQoKSBsYXlvdXQgPSAndic7XG4gIEBJbnB1dCgpIHBhZGRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNhcmRJbWFnZUNvbXBvbmVudHMuZm9yRWFjaCgoY2hpbGQ6IENhcmRJbWFnZUNvbXBvbmVudCkgPT4ge1xuICAgICAgY2hpbGQubGF5b3V0ID0gdGhpcy5sYXlvdXQ7XG4gICAgICBjaGlsZC5uZ09uSW5pdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jYXJkU2VjdGlvbkNvbXBvbmVudHMuZm9yRWFjaCgoY2hpbGQ6IENhcmRTZWN0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICBjaGlsZC5sYXlvdXQgPSB0aGlzLmxheW91dDtcbiAgICAgIGNoaWxkLm5nT25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IENhcmRTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cbn1cbiJdfQ==