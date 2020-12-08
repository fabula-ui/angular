/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/align.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
// Directives
import { CommonDirective } from './common.directive';
var AlignDirective = /** @class */ (function (_super) {
    tslib_1.__extends(AlignDirective, _super);
    function AlignDirective(elRef) {
        var _this = _super.call(this, elRef) || this;
        _this.elRef = elRef;
        return _this;
    }
    AlignDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[al],[alH],[alV], [align], [alignH],[alignV]'
                },] }
    ];
    /** @nocollapse */
    AlignDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AlignDirective.propDecorators = {
        al: [{ type: Input, args: ['al',] }],
        alH: [{ type: Input, args: ['alH',] }],
        alV: [{ type: Input, args: ['alV',] }],
        align: [{ type: Input }],
        alignH: [{ type: Input, args: ['alignH',] }],
        alignV: [{ type: Input, args: ['alignV',] }]
    };
    return AlignDirective;
}(CommonDirective));
export { AlignDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpZ24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYWxpZ24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRDtJQUdvQywwQ0FBZTtJQVEvQyx3QkFBbUIsS0FBaUI7UUFBcEMsWUFBd0Msa0JBQU0sS0FBSyxDQUFDLFNBQUc7UUFBcEMsV0FBSyxHQUFMLEtBQUssQ0FBWTs7SUFBa0IsQ0FBQzs7Z0JBWDFELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsOENBQThDO2lCQUMzRDs7OztnQkFQa0MsVUFBVTs7O3FCQVN4QyxLQUFLLFNBQUMsSUFBSTtzQkFDVixLQUFLLFNBQUMsS0FBSztzQkFDWCxLQUFLLFNBQUMsS0FBSzt3QkFDWCxLQUFLO3lCQUNMLEtBQUssU0FBQyxRQUFRO3lCQUNkLEtBQUssU0FBQyxRQUFROztJQUduQixxQkFBQztDQUFBLEFBWkQsQ0FHb0MsZUFBZSxHQVNsRDtTQVRZLGNBQWM7OztJQUN2Qiw0QkFBcUI7O0lBQ3JCLDZCQUF1Qjs7SUFDdkIsNkJBQXVCOztJQUN2QiwrQkFBb0I7O0lBQ3BCLGdDQUE2Qjs7SUFDN0IsZ0NBQTZCOztJQUVqQiwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCB7IENvbW1vbkRpcmVjdGl2ZSB9IGZyb20gJy4vY29tbW9uLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2FsXSxbYWxIXSxbYWxWXSwgW2FsaWduXSwgW2FsaWduSF0sW2FsaWduVl0nXG59KVxuZXhwb3J0IGNsYXNzIEFsaWduRGlyZWN0aXZlIGV4dGVuZHMgQ29tbW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCdhbCcpIGFsOiBhbnk7XG4gICAgQElucHV0KCdhbEgnKSBhbEg6IGFueTtcbiAgICBASW5wdXQoJ2FsVicpIGFsVjogYW55O1xuICAgIEBJbnB1dCgpIGFsaWduOiBhbnk7XG4gICAgQElucHV0KCdhbGlnbkgnKSBhbGlnbkg6IGFueTtcbiAgICBASW5wdXQoJ2FsaWduVicpIGFsaWduVjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsUmVmOiBFbGVtZW50UmVmKSB7IHN1cGVyKGVsUmVmKTsgfVxufVxuIl19