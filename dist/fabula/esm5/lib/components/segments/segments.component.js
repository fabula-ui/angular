/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/segments/segments.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
import { SelectorComponent } from '../selector/selector.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import SegmentsStyles from '@fabula/core/styles/components/segments/segments';
var SegmentsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SegmentsComponent, _super);
    function SegmentsComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.border = true;
        _this.clear = false;
        _this.expand = false;
        _this.faded = false;
        _this.invert = false;
        _this.layout = 'horizontal';
        _this.outline = false;
        _this.rounded = false;
        _this.stacked = false;
        _this.changeSegment = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    SegmentsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.childComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            child.activeColor = _this.activeColor;
            child.activeTextColor = _this.activeTextColor;
            child.color = _this.color;
            child.clear = _this.clear;
            child.expand = _this.expand;
            child.faded = _this.faded;
            child.inactiveColor = _this.inactiveColor;
            child.inactiveTextColor = _this.inactiveTextColor;
            child.invert = _this.invert;
            child.layout = _this.layout;
            child.outline = _this.outline;
            child.rounded = _this.rounded;
            child.scope = _this.scope;
            child.stacked = _this.stacked;
            child.type = _this.type;
            child.selectedSegment.subscribe((/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) { return _this.handleActiveSegment(tab); }));
            child.childViewInit();
            child.listen({
                onChangeSelector: _this.changeSegment
            });
            if (_this.active) {
                _this.changeSegment.emit(_this.active);
            }
        }));
        if (this.active && this.scope) {
            this.toggleContent();
        }
    };
    /**
     * @return {?}
     */
    SegmentsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = SegmentsStyles;
        this.initStyles();
    };
    /**
     * @param {?} segment
     * @return {?}
     */
    SegmentsComponent.prototype.handleActiveSegment = /**
     * @param {?} segment
     * @return {?}
     */
    function (segment) {
        this.active = segment;
        this.changeSegment.emit(segment);
        if (segment && this.scope) {
            this.toggleContent();
        }
    };
    /**
     * @return {?}
     */
    SegmentsComponent.prototype.toggleContent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var allOtherContent = document.querySelectorAll(".fab-content[data-scope='" + this.scope + "']:not([data-name='" + this.active + "'])");
        /** @type {?} */
        var targetContent = document.querySelector(".fab-content[data-scope='" + this.scope + "'][data-name='" + this.active + "']");
        if (allOtherContent.length) {
            allOtherContent.forEach((/**
             * @param {?} other
             * @return {?}
             */
            function (other) {
                other.setAttribute('data-active', 'false');
            }));
        }
        if (targetContent) {
            targetContent.setAttribute('data-active', 'true');
        }
    };
    SegmentsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-segments',
                    template: "<div class=\"fab-segments-wrapper\" data-fab-wrapper=\"segments\">\n  <div class=\"fab-segments\" data-fab-component=\"segments\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    SegmentsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    SegmentsComponent.propDecorators = {
        childComponents: [{ type: ContentChildren, args: [SelectorComponent,] }],
        active: [{ type: Input }],
        activeColor: [{ type: Input }],
        activeTextColor: [{ type: Input }],
        border: [{ type: Input }],
        clear: [{ type: Input }],
        color: [{ type: Input }],
        expand: [{ type: Input }],
        faded: [{ type: Input }],
        inactiveColor: [{ type: Input }],
        inactiveTextColor: [{ type: Input }],
        invert: [{ type: Input }],
        layout: [{ type: Input }],
        outline: [{ type: Input }],
        rounded: [{ type: Input }],
        scope: [{ type: Input }],
        stacked: [{ type: Input }],
        type: [{ type: Input }],
        changeSegment: [{ type: Output }]
    };
    return SegmentsComponent;
}(CommonComponent));
export { SegmentsComponent };
if (false) {
    /** @type {?} */
    SegmentsComponent.prototype.childComponents;
    /** @type {?} */
    SegmentsComponent.prototype.active;
    /** @type {?} */
    SegmentsComponent.prototype.activeColor;
    /** @type {?} */
    SegmentsComponent.prototype.activeTextColor;
    /** @type {?} */
    SegmentsComponent.prototype.border;
    /** @type {?} */
    SegmentsComponent.prototype.clear;
    /** @type {?} */
    SegmentsComponent.prototype.color;
    /** @type {?} */
    SegmentsComponent.prototype.expand;
    /** @type {?} */
    SegmentsComponent.prototype.faded;
    /** @type {?} */
    SegmentsComponent.prototype.inactiveColor;
    /** @type {?} */
    SegmentsComponent.prototype.inactiveTextColor;
    /** @type {?} */
    SegmentsComponent.prototype.invert;
    /** @type {?} */
    SegmentsComponent.prototype.layout;
    /** @type {?} */
    SegmentsComponent.prototype.outline;
    /** @type {?} */
    SegmentsComponent.prototype.rounded;
    /** @type {?} */
    SegmentsComponent.prototype.scope;
    /** @type {?} */
    SegmentsComponent.prototype.stacked;
    /** @type {?} */
    SegmentsComponent.prototype.type;
    /** @type {?} */
    SegmentsComponent.prototype.changeSegment;
    /** @type {?} */
    SegmentsComponent.prototype.elRef;
    /** @type {?} */
    SegmentsComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VnbWVudHMvc2VnbWVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUd0SSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBR25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxjQUFjLE1BQU0sa0RBQWtELENBQUM7QUFFOUU7SUFLdUMsNkNBQWU7SUF1QnBELDJCQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnJDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnpCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFuQjVCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxXQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWQsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQUssR0FBRyxLQUFLLENBQUM7UUFHZCxZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTSxHQUFHLFlBQVksQ0FBQztRQUN0QixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUdmLG1CQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFLWixDQUFDOzs7O0lBRWxDLDJDQUFlOzs7SUFBZjtRQUFBLGlCQTZCQztRQTVCQyxJ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Q0FBQztZQUM3QyxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxhQUFhLEVBQUU7WUFDakIsYUFBYSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOztnQkExRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUV4QiwrTEFBd0M7O2lCQUN6Qzs7OztnQkFqQjJCLFVBQVU7Z0JBUTdCLGFBQWE7OztrQ0FXbkIsZUFBZSxTQUFDLGlCQUFpQjt5QkFFakMsS0FBSzs4QkFDTCxLQUFLO2tDQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO2dDQUNMLEtBQUs7b0NBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO2dDQUVMLE1BQU07O0lBaUVULHdCQUFDO0NBQUEsQUEzRkQsQ0FLdUMsZUFBZSxHQXNGckQ7U0F0RlksaUJBQWlCOzs7SUFDNUIsNENBQWtGOztJQUVsRixtQ0FBd0I7O0lBQ3hCLHdDQUE2Qjs7SUFDN0IsNENBQWlDOztJQUNqQyxtQ0FBdUI7O0lBQ3ZCLGtDQUF1Qjs7SUFDdkIsa0NBQXVCOztJQUN2QixtQ0FBd0I7O0lBQ3hCLGtDQUF1Qjs7SUFDdkIsMENBQStCOztJQUMvQiw4Q0FBbUM7O0lBQ25DLG1DQUF3Qjs7SUFDeEIsbUNBQStCOztJQUMvQixvQ0FBeUI7O0lBQ3pCLG9DQUF5Qjs7SUFDekIsa0NBQXVCOztJQUN2QixvQ0FBeUI7O0lBQ3pCLGlDQUFzQjs7SUFFdEIsMENBQTZDOztJQUczQyxrQ0FBd0I7O0lBQ3hCLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VnbWVudENvbXBvbmVudCB9IGZyb20gJy4uL3NlZ21lbnQvc2VnbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9zZWxlY3Rvci9zZWxlY3Rvci5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgU2VnbWVudHNTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3NlZ21lbnRzL3NlZ21lbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLXNlZ21lbnRzJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VnbWVudHMuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlZ21lbnRzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWdtZW50c0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oU2VsZWN0b3JDb21wb25lbnQpIGNoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PFNlbGVjdG9yQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBhY3RpdmU6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlVGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJvcmRlciA9IHRydWU7XG4gIEBJbnB1dCgpIGNsZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV4cGFuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBmYWRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpbmFjdGl2ZUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGluYWN0aXZlVGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGludmVydCA9IGZhbHNlO1xuICBASW5wdXQoKSBsYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIG91dGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgcm91bmRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzY29wZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdGFja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuICBAT3V0cHV0KCkgY2hhbmdlU2VnbWVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNoaWxkQ29tcG9uZW50cy5mb3JFYWNoKChjaGlsZDogU2VnbWVudENvbXBvbmVudCkgPT4ge1xuICAgICAgY2hpbGQuYWN0aXZlQ29sb3IgPSB0aGlzLmFjdGl2ZUNvbG9yO1xuICAgICAgY2hpbGQuYWN0aXZlVGV4dENvbG9yID0gdGhpcy5hY3RpdmVUZXh0Q29sb3I7XG4gICAgICBjaGlsZC5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICBjaGlsZC5jbGVhciA9IHRoaXMuY2xlYXI7XG4gICAgICBjaGlsZC5leHBhbmQgPSB0aGlzLmV4cGFuZDtcbiAgICAgIGNoaWxkLmZhZGVkID0gdGhpcy5mYWRlZDtcbiAgICAgIGNoaWxkLmluYWN0aXZlQ29sb3IgPSB0aGlzLmluYWN0aXZlQ29sb3I7XG4gICAgICBjaGlsZC5pbmFjdGl2ZVRleHRDb2xvciA9IHRoaXMuaW5hY3RpdmVUZXh0Q29sb3I7XG4gICAgICBjaGlsZC5pbnZlcnQgPSB0aGlzLmludmVydDtcbiAgICAgIGNoaWxkLmxheW91dCA9IHRoaXMubGF5b3V0O1xuICAgICAgY2hpbGQub3V0bGluZSA9IHRoaXMub3V0bGluZTtcbiAgICAgIGNoaWxkLnJvdW5kZWQgPSB0aGlzLnJvdW5kZWQ7XG4gICAgICBjaGlsZC5zY29wZSA9IHRoaXMuc2NvcGU7XG4gICAgICBjaGlsZC5zdGFja2VkID0gdGhpcy5zdGFja2VkO1xuICAgICAgY2hpbGQudHlwZSA9IHRoaXMudHlwZTtcblxuICAgICAgY2hpbGQuc2VsZWN0ZWRTZWdtZW50LnN1YnNjcmliZSh0YWIgPT4gdGhpcy5oYW5kbGVBY3RpdmVTZWdtZW50KHRhYikpO1xuXG4gICAgICBjaGlsZC5jaGlsZFZpZXdJbml0KCk7XG4gICAgICBjaGlsZC5saXN0ZW4oe1xuICAgICAgICBvbkNoYW5nZVNlbGVjdG9yOiB0aGlzLmNoYW5nZVNlZ21lbnRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHsgdGhpcy5jaGFuZ2VTZWdtZW50LmVtaXQodGhpcy5hY3RpdmUpOyB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmUgJiYgdGhpcy5zY29wZSkgeyB0aGlzLnRvZ2dsZUNvbnRlbnQoKTsgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBTZWdtZW50c1N0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxuXG4gIGhhbmRsZUFjdGl2ZVNlZ21lbnQoc2VnbWVudCkge1xuICAgIHRoaXMuYWN0aXZlID0gc2VnbWVudDtcbiAgICB0aGlzLmNoYW5nZVNlZ21lbnQuZW1pdChzZWdtZW50KTtcbiAgICBpZiAoc2VnbWVudCAmJiB0aGlzLnNjb3BlKSB7IHRoaXMudG9nZ2xlQ29udGVudCgpOyB9XG4gIH1cblxuICB0b2dnbGVDb250ZW50KCkge1xuICAgIGNvbnN0IGFsbE90aGVyQ29udGVudCA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmFiLWNvbnRlbnRbZGF0YS1zY29wZT0nJHt0aGlzLnNjb3BlfSddOm5vdChbZGF0YS1uYW1lPScke3RoaXMuYWN0aXZlfSddKWApO1xuICAgIGNvbnN0IHRhcmdldENvbnRlbnQgPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZhYi1jb250ZW50W2RhdGEtc2NvcGU9JyR7dGhpcy5zY29wZX0nXVtkYXRhLW5hbWU9JyR7dGhpcy5hY3RpdmV9J11gKTtcblxuICAgIGlmIChhbGxPdGhlckNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICBhbGxPdGhlckNvbnRlbnQuZm9yRWFjaChvdGhlciA9PiB7XG4gICAgICAgIG90aGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnZmFsc2UnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRDb250ZW50KSB7XG4gICAgICB0YXJnZXRDb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAndHJ1ZScpO1xuICAgIH1cbiAgfVxufVxuIl19