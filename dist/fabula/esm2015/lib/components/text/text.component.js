/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/text/text.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import TextStyles from '@fabula/core/styles/components/text/text';
export class TextComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.inline = false;
        this.wrap = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        // Get attributes
        this.bold = host.hasAttribute('bold');
        this.italic = host.hasAttribute('italic');
        this.medium = host.hasAttribute('medium');
        this.semibold = host.hasAttribute('semibold');
        if (!this.weight && (this.bold || this.strong)) {
            this.weight = '700';
        }
        if (!this.weight && this.semibold) {
            this.weight = '600';
        }
        if (!this.weight && this.medium) {
            this.weight = '500';
        }
        // Set props
        this.props = {
            aux: this.aux,
            bold: this.bold,
            italic: this.italic,
        };
        this.styles = TextStyles;
        this.initStyles();
    }
}
TextComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-text',
                template: "<div class=\"fab-text\" [attr.data-aux]=\"aux\" [attr.data-color]=\"color\" [attr.data-size]=\"size\" data-fab-component=\"text\">\n  <ng-container *ngIf=\"!content\">\n    <ng-content></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"content\">{{content}}</ng-container>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
TextComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
TextComponent.propDecorators = {
    aux: [{ type: Input }],
    color: [{ type: Input }],
    content: [{ type: Input }],
    inline: [{ type: Input }],
    props: [{ type: Input }],
    size: [{ type: Input }],
    strong: [{ type: Input }],
    weight: [{ type: Input }],
    wrap: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextComponent.prototype.aux;
    /** @type {?} */
    TextComponent.prototype.color;
    /** @type {?} */
    TextComponent.prototype.content;
    /** @type {?} */
    TextComponent.prototype.inline;
    /** @type {?} */
    TextComponent.prototype.props;
    /** @type {?} */
    TextComponent.prototype.size;
    /** @type {?} */
    TextComponent.prototype.strong;
    /** @type {?} */
    TextComponent.prototype.weight;
    /** @type {?} */
    TextComponent.prototype.wrap;
    /** @type {?} */
    TextComponent.prototype.bold;
    /** @type {?} */
    TextComponent.prototype.italic;
    /** @type {?} */
    TextComponent.prototype.medium;
    /** @type {?} */
    TextComponent.prototype.semibold;
    /** @type {?} */
    TextComponent.prototype.elRef;
    /** @type {?} */
    TextComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxVQUFVLE1BQU0sMENBQTBDLENBQUM7QUFPbEUsTUFBTSxPQUFPLGFBQWMsU0FBUSxlQUFlOzs7OztJQWdCaEQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFkNUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUtmLFNBQUksR0FBRyxJQUFJLENBQUM7SUFVWSxDQUFDOzs7O0lBRWxDLFFBQVE7O2NBQ0EsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTtRQUVyQyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtRQUVELFlBQVk7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsMlNBQW9DOzthQUVyQzs7OztZQWZtQixVQUFVO1lBTXJCLGFBQWE7OztrQkFXbkIsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFSTiw0QkFBc0I7O0lBQ3RCLDhCQUF1Qjs7SUFDdkIsZ0NBQXlCOztJQUN6QiwrQkFBd0I7O0lBQ3hCLDhCQUFvQjs7SUFDcEIsNkJBQXNCOztJQUN0QiwrQkFBeUI7O0lBQ3pCLCtCQUFxQjs7SUFDckIsNkJBQXFCOztJQUVyQiw2QkFBSzs7SUFDTCwrQkFBTzs7SUFDUCwrQkFBTzs7SUFDUCxpQ0FBUzs7SUFHUCw4QkFBd0I7O0lBQ3hCLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFRleHRTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3RleHQvdGV4dCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi10ZXh0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGF1eDogYm9vbGVhbjtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgY29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBpbmxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJvcHM6IGFueTtcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdHJvbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdlaWdodDogYW55O1xuICBASW5wdXQoKSB3cmFwID0gdHJ1ZTtcblxuICBib2xkO1xuICBpdGFsaWM7XG4gIG1lZGl1bTtcbiAgc2VtaWJvbGQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gR2V0IGF0dHJpYnV0ZXNcbiAgICB0aGlzLmJvbGQgPSBob3N0Lmhhc0F0dHJpYnV0ZSgnYm9sZCcpO1xuICAgIHRoaXMuaXRhbGljID0gaG9zdC5oYXNBdHRyaWJ1dGUoJ2l0YWxpYycpO1xuICAgIHRoaXMubWVkaXVtID0gaG9zdC5oYXNBdHRyaWJ1dGUoJ21lZGl1bScpO1xuICAgIHRoaXMuc2VtaWJvbGQgPSBob3N0Lmhhc0F0dHJpYnV0ZSgnc2VtaWJvbGQnKTtcblxuICAgIGlmICghdGhpcy53ZWlnaHQgJiYgKHRoaXMuYm9sZCB8fCB0aGlzLnN0cm9uZykpIHtcbiAgICAgIHRoaXMud2VpZ2h0ID0gJzcwMCc7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLndlaWdodCAmJiB0aGlzLnNlbWlib2xkKSB7XG4gICAgICB0aGlzLndlaWdodCA9ICc2MDAnO1xuICAgIH1cblxuICAgIGlmICghdGhpcy53ZWlnaHQgJiYgdGhpcy5tZWRpdW0pIHtcbiAgICAgIHRoaXMud2VpZ2h0ID0gJzUwMCc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHByb3BzXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIGF1eDogdGhpcy5hdXgsXG4gICAgICBib2xkOiB0aGlzLmJvbGQsXG4gICAgICBpdGFsaWM6IHRoaXMuaXRhbGljLFxuICAgIH07XG5cbiAgICB0aGlzLnN0eWxlcyA9IFRleHRTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cblxufVxuIl19