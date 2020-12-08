/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/block.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
// Directives
import { CommonDirective } from './common.directive';
var BlockDirective = /** @class */ (function (_super) {
    tslib_1.__extends(BlockDirective, _super);
    function BlockDirective(elRef) {
        var _this = _super.call(this, elRef) || this;
        _this.elRef = elRef;
        return _this;
    }
    BlockDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[block]'
                },] }
    ];
    /** @nocollapse */
    BlockDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    BlockDirective.propDecorators = {
        block: [{ type: Input }]
    };
    return BlockDirective;
}(CommonDirective));
export { BlockDirective };
if (false) {
    /** @type {?} */
    BlockDirective.prototype.block;
    /** @type {?} */
    BlockDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYmxvY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFHeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBRXBEO0lBR29DLDBDQUFlO0lBRS9DLHdCQUFtQixLQUFpQjtRQUFwQyxZQUF3QyxrQkFBTSxLQUFLLENBQUMsU0FBRTtRQUFuQyxXQUFLLEdBQUwsS0FBSyxDQUFZOztJQUFpQixDQUFDOztnQkFMekQsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO2lCQUN0Qjs7OztnQkFQbUIsVUFBVTs7O3dCQVN6QixLQUFLOztJQUVWLHFCQUFDO0NBQUEsQUFORCxDQUdvQyxlQUFlLEdBR2xEO1NBSFksY0FBYzs7O0lBQ3ZCLCtCQUFvQjs7SUFDUiwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHsgQ29tbW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21tb24uZGlyZWN0aXZlJ1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tibG9ja10nXG59KVxuZXhwb3J0IGNsYXNzIEJsb2NrRGlyZWN0aXZlIGV4dGVuZHMgQ29tbW9uRGlyZWN0aXZlIHtcbiAgICBASW5wdXQoKSBibG9jazogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZikgeyBzdXBlcihlbFJlZikgfVxufVxuIl19