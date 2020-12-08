/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/align.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
// Directives
import { CommonDirective } from './common.directive';
export class AlignDirective extends CommonDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        super(elRef);
        this.elRef = elRef;
    }
}
AlignDirective.decorators = [
    { type: Directive, args: [{
                selector: '[al],[alH],[alV], [align], [alignH],[alignV]'
            },] }
];
/** @nocollapse */
AlignDirective.ctorParameters = () => [
    { type: ElementRef }
];
AlignDirective.propDecorators = {
    al: [{ type: Input, args: ['al',] }],
    alH: [{ type: Input, args: ['alH',] }],
    alV: [{ type: Input, args: ['alV',] }],
    align: [{ type: Input }],
    alignH: [{ type: Input, args: ['alignH',] }],
    alignV: [{ type: Input, args: ['alignV',] }]
};
if (false) {
    /** @type {?} */
    AlignDirective.prototype.al;
    /** @type {?} */
    AlignDirective.prototype.alH;
    /** @type {?} */
    AlignDirective.prototype.alV;
    /** @type {?} */
    AlignDirective.prototype.align;
    /** @type {?} */
    AlignDirective.prototype.alignH;
    /** @type {?} */
    AlignDirective.prototype.alignV;
    /** @type {?} */
    AlignDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpZ24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYWxpZ24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3JELE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBZTs7OztJQVEvQyxZQUFtQixLQUFpQjtRQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFsQyxVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQWtCLENBQUM7OztZQVgxRCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDhDQUE4QzthQUMzRDs7OztZQVBrQyxVQUFVOzs7aUJBU3hDLEtBQUssU0FBQyxJQUFJO2tCQUNWLEtBQUssU0FBQyxLQUFLO2tCQUNYLEtBQUssU0FBQyxLQUFLO29CQUNYLEtBQUs7cUJBQ0wsS0FBSyxTQUFDLFFBQVE7cUJBQ2QsS0FBSyxTQUFDLFFBQVE7Ozs7SUFMZiw0QkFBcUI7O0lBQ3JCLDZCQUF1Qjs7SUFDdkIsNkJBQXVCOztJQUN2QiwrQkFBb0I7O0lBQ3BCLGdDQUE2Qjs7SUFDN0IsZ0NBQTZCOztJQUVqQiwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCB7IENvbW1vbkRpcmVjdGl2ZSB9IGZyb20gJy4vY29tbW9uLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2FsXSxbYWxIXSxbYWxWXSwgW2FsaWduXSwgW2FsaWduSF0sW2FsaWduVl0nXG59KVxuZXhwb3J0IGNsYXNzIEFsaWduRGlyZWN0aXZlIGV4dGVuZHMgQ29tbW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCdhbCcpIGFsOiBhbnk7XG4gICAgQElucHV0KCdhbEgnKSBhbEg6IGFueTtcbiAgICBASW5wdXQoJ2FsVicpIGFsVjogYW55O1xuICAgIEBJbnB1dCgpIGFsaWduOiBhbnk7XG4gICAgQElucHV0KCdhbGlnbkgnKSBhbGlnbkg6IGFueTtcbiAgICBASW5wdXQoJ2FsaWduVicpIGFsaWduVjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsUmVmOiBFbGVtZW50UmVmKSB7IHN1cGVyKGVsUmVmKTsgfVxufVxuIl19