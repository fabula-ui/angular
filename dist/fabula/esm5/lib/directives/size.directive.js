/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/size.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
var SizeDirective = /** @class */ (function () {
    function SizeDirective(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    SizeDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
        host.classList.add(css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: this })));
    };
    SizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[expand], [height], [width]'
                },] }
    ];
    /** @nocollapse */
    SizeDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SizeDirective.propDecorators = {
        expand: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }]
    };
    return SizeDirective;
}());
export { SizeDirective };
if (false) {
    /** @type {?} */
    SizeDirective.prototype.expand;
    /** @type {?} */
    SizeDirective.prototype.height;
    /** @type {?} */
    SizeDirective.prototype.width;
    /**
     * @type {?}
     * @private
     */
    SizeDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFFMUQ7SUFRSSx1QkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFHLENBQUM7Ozs7SUFFekMsdUNBQWU7OztJQUFmOztZQUNVLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7O1lBQy9CLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUM7UUFFbkksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLGNBQWMsZ0JBQUEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOztnQkFmSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtpQkFDMUM7Ozs7Z0JBVGtDLFVBQVU7Ozt5QkFXeEMsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7O0lBVVYsb0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWJZLGFBQWE7OztJQUN0QiwrQkFBeUI7O0lBQ3pCLCtCQUFxQjs7SUFDckIsOEJBQW9COzs7OztJQUVSLDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFV0aWxzU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvdXRpbHMvdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tleHBhbmRdLCBbaGVpZ2h0XSwgW3dpZHRoXSdcbn0pXG5leHBvcnQgY2xhc3MgU2l6ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIGV4cGFuZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBoZWlnaHQ6IGFueTtcbiAgICBASW5wdXQoKSB3aWR0aDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc3QgaG9zdCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgYW5ndWxhckVsZW1lbnQgPSAhIWhvc3QuY2hpbGRyZW5bMF0uaGFzQXR0cmlidXRlKCdkYXRhLWZhYi1jb21wb25lbnQnKSB8fCAhIWhvc3QuY2hpbGRyZW5bMF0uaGFzQXR0cmlidXRlKCdkYXRhLWZhYi13cmFwcGVyJyk7XG5cbiAgICAgICAgaG9zdC5jbGFzc0xpc3QuYWRkKGNzcyhVdGlsc1N0eWxlcyh7IGFuZ3VsYXJFbGVtZW50LCBmcmFtZXdvcms6ICdhbmd1bGFyJywgcHJvcHM6IHRoaXMgfSkpKTtcbiAgICB9XG59XG4iXX0=