(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fabula/core/styles/common/reset'), require('@fabula/core/styles/methods/misc/setBaseTheme'), require('@fabula/core/styles/responsive/responsive'), require('@fabula/core/styles/methods/misc/getTransitionDuration'), require('@fabula/core/styles/components/alert/alert'), require('@fabula/core/styles/components/icon/icon'), require('@fabula/core/styles/components/close-button/close-button'), require('@fabula/core/methods/misc/getInitials'), require('@fabula/core/styles/components/avatar/avatar'), require('@fabula/core/styles/components/badge/badge'), require('@fabula/core/styles/components/button/button'), require('@fabula/core/styles/components/button-group/button-group'), require('@fabula/core/styles/components/card-image/card-image'), require('@fabula/core/styles/components/card-section/card-section'), require('@fabula/core/styles/components/card/card'), require('@fabula/core/styles/components/checkbox/checkbox'), require('@fabula/core/styles/components/divider/divider'), require('@fabula/core/styles/components/dropdown-header/dropdown-header'), require('@fabula/core/styles/components/dropdown-item/dropdown-item'), require('@fabula/core/styles/components/dropdown-menu/dropdown-menu'), require('@fabula/core/styles/components/dropdown-toggle/dropdown-toggle'), require('@fabula/core/styles/components/dropdown/dropdown'), require('@fabula/core/styles/components/column/column'), require('@fabula/core/styles/components/container/container'), require('@fabula/core/styles/components/row/row'), require('@fabula/core/styles/components/heading/heading'), require('@fabula/core/styles/components/element/element'), require('@fabula/core/styles/components/wrapper/wrapper'), require('@fabula/core/styles/components/inner-icon/inner-icon'), require('@fabula/core/styles/components/input/input'), require('@fabula/core/styles/components/input-group/input-group'), require('@fabula/core/styles/components/link/link'), require('@fabula/core/styles/components/list-item/list-item'), require('@fabula/core/styles/components/list/list'), require('@fabula/core/styles/components/list-header/list-header'), require('@fabula/core/styles/components/modal-section/modal-section'), require('@fabula/core/styles/components/modal-body/modal-body'), require('@fabula/core/styles/components/modal-header/modal-header'), require('@fabula/core/styles/components/modal/modal'), require('@fabula/core/styles/components/search-input/search-input'), require('@fabula/core/styles/components/content/content'), require('@fabula/core/styles/components/segment/segment'), require('@fabula/core/styles/components/segments/segments'), require('@fabula/core/styles/components/segment-content/segment-content'), require('@fabula/core/styles/components/tab/tab'), require('@fabula/core/styles/components/tabs/tabs'), require('@fabula/core/styles/components/tag/tag'), require('@fabula/core/styles/components/tag-group/tag-group'), require('@fabula/core/styles/components/text/text'), require('@fabula/core/styles/components/toast/toast'), require('@fabula/core/styles/components/toast-stack/toast-stack'), require('@fabula/core/styles/components/toggle/toggle'), require('@fabula/core/styles/components/tooltip/tooltip'), require('@angular/common'), require('emotion'), require('@fabula/core/styles/utils/utils'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fabula/angular', ['exports', '@fabula/core/styles/common/reset', '@fabula/core/styles/methods/misc/setBaseTheme', '@fabula/core/styles/responsive/responsive', '@fabula/core/styles/methods/misc/getTransitionDuration', '@fabula/core/styles/components/alert/alert', '@fabula/core/styles/components/icon/icon', '@fabula/core/styles/components/close-button/close-button', '@fabula/core/methods/misc/getInitials', '@fabula/core/styles/components/avatar/avatar', '@fabula/core/styles/components/badge/badge', '@fabula/core/styles/components/button/button', '@fabula/core/styles/components/button-group/button-group', '@fabula/core/styles/components/card-image/card-image', '@fabula/core/styles/components/card-section/card-section', '@fabula/core/styles/components/card/card', '@fabula/core/styles/components/checkbox/checkbox', '@fabula/core/styles/components/divider/divider', '@fabula/core/styles/components/dropdown-header/dropdown-header', '@fabula/core/styles/components/dropdown-item/dropdown-item', '@fabula/core/styles/components/dropdown-menu/dropdown-menu', '@fabula/core/styles/components/dropdown-toggle/dropdown-toggle', '@fabula/core/styles/components/dropdown/dropdown', '@fabula/core/styles/components/column/column', '@fabula/core/styles/components/container/container', '@fabula/core/styles/components/row/row', '@fabula/core/styles/components/heading/heading', '@fabula/core/styles/components/element/element', '@fabula/core/styles/components/wrapper/wrapper', '@fabula/core/styles/components/inner-icon/inner-icon', '@fabula/core/styles/components/input/input', '@fabula/core/styles/components/input-group/input-group', '@fabula/core/styles/components/link/link', '@fabula/core/styles/components/list-item/list-item', '@fabula/core/styles/components/list/list', '@fabula/core/styles/components/list-header/list-header', '@fabula/core/styles/components/modal-section/modal-section', '@fabula/core/styles/components/modal-body/modal-body', '@fabula/core/styles/components/modal-header/modal-header', '@fabula/core/styles/components/modal/modal', '@fabula/core/styles/components/search-input/search-input', '@fabula/core/styles/components/content/content', '@fabula/core/styles/components/segment/segment', '@fabula/core/styles/components/segments/segments', '@fabula/core/styles/components/segment-content/segment-content', '@fabula/core/styles/components/tab/tab', '@fabula/core/styles/components/tabs/tabs', '@fabula/core/styles/components/tag/tag', '@fabula/core/styles/components/tag-group/tag-group', '@fabula/core/styles/components/text/text', '@fabula/core/styles/components/toast/toast', '@fabula/core/styles/components/toast-stack/toast-stack', '@fabula/core/styles/components/toggle/toggle', '@fabula/core/styles/components/tooltip/tooltip', '@angular/common', 'emotion', '@fabula/core/styles/utils/utils', '@angular/core'], factory) :
    (factory((global.fabula = global.fabula || {}, global.fabula.angular = {}),global.reset,global.setBaseTheme,global.ResponsiveStyles,global.getTransitionDuration,global.AlertStyles,global.IconStyles,global.CloseButtonStyles,global.getInitials,global.AvatarStyles,global.BadgeStyles,global.ButtonStyles,global.ButtonGroupStyles,global.CardImageStyles,global.CardSectionStyles,global.CardStyles,global.CheckboxStyles,global.DividerStyles,global.DropdownHeaderStyles,global.DropdownItemStyles,global.DropdownMenuStyles,global.DropdownToggleStyles,global.DropdownStyles,global.ColumnStyles,global.ContainerStyles,global.RowStyles,global.HeadingStyles,global.ElementStyles,global.WrapperStyles,global.InnerIconStyles,global.InputStyles,global.InputGroupStyles,global.LinkStyles,global.ListItemStyles,global.ListStyles,global.ListHeaderStyles,global.ModalSectionStyles,global.ModalBodyStyles,global.ModalHeaderStyles,global.ModalStyles,global.SearchInputStyles,global.ContentStyles,global.SegmentStyles,global.SegmentsStyles,global.SegmentContentStyles,global.TabStyles,global.TabsStyles,global.TagStyles,global.TagGroupStyles,global.TextStyles,global.ToastStyles,global.ToastStackStyles,global.ToggleStyles,global.TooltipStyles,global.ng.common,global.emotion,global.UtilsStyles,global.ng.core));
}(this, (function (exports,reset,setBaseTheme,ResponsiveStyles,getTransitionDuration,AlertStyles,IconStyles,CloseButtonStyles,getInitials,AvatarStyles,BadgeStyles,ButtonStyles,ButtonGroupStyles,CardImageStyles,CardSectionStyles,CardStyles,CheckboxStyles,DividerStyles,DropdownHeaderStyles,DropdownItemStyles,DropdownMenuStyles,DropdownToggleStyles,DropdownStyles,ColumnStyles,ContainerStyles,RowStyles,HeadingStyles,ElementStyles,WrapperStyles,InnerIconStyles,InputStyles,InputGroupStyles,LinkStyles,ListItemStyles,ListStyles,ListHeaderStyles,ModalSectionStyles,ModalBodyStyles,ModalHeaderStyles,ModalStyles,SearchInputStyles,ContentStyles,SegmentStyles,SegmentsStyles,SegmentContentStyles,TabStyles,TabsStyles,TagStyles,TagGroupStyles,TextStyles,ToastStyles,ToastStackStyles,ToggleStyles,TooltipStyles,common,emotion,UtilsStyles,i0) { 'use strict';

    reset = reset && reset.hasOwnProperty('default') ? reset['default'] : reset;
    setBaseTheme = setBaseTheme && setBaseTheme.hasOwnProperty('default') ? setBaseTheme['default'] : setBaseTheme;
    ResponsiveStyles = ResponsiveStyles && ResponsiveStyles.hasOwnProperty('default') ? ResponsiveStyles['default'] : ResponsiveStyles;
    getTransitionDuration = getTransitionDuration && getTransitionDuration.hasOwnProperty('default') ? getTransitionDuration['default'] : getTransitionDuration;
    AlertStyles = AlertStyles && AlertStyles.hasOwnProperty('default') ? AlertStyles['default'] : AlertStyles;
    IconStyles = IconStyles && IconStyles.hasOwnProperty('default') ? IconStyles['default'] : IconStyles;
    CloseButtonStyles = CloseButtonStyles && CloseButtonStyles.hasOwnProperty('default') ? CloseButtonStyles['default'] : CloseButtonStyles;
    getInitials = getInitials && getInitials.hasOwnProperty('default') ? getInitials['default'] : getInitials;
    AvatarStyles = AvatarStyles && AvatarStyles.hasOwnProperty('default') ? AvatarStyles['default'] : AvatarStyles;
    BadgeStyles = BadgeStyles && BadgeStyles.hasOwnProperty('default') ? BadgeStyles['default'] : BadgeStyles;
    ButtonStyles = ButtonStyles && ButtonStyles.hasOwnProperty('default') ? ButtonStyles['default'] : ButtonStyles;
    ButtonGroupStyles = ButtonGroupStyles && ButtonGroupStyles.hasOwnProperty('default') ? ButtonGroupStyles['default'] : ButtonGroupStyles;
    CardImageStyles = CardImageStyles && CardImageStyles.hasOwnProperty('default') ? CardImageStyles['default'] : CardImageStyles;
    CardSectionStyles = CardSectionStyles && CardSectionStyles.hasOwnProperty('default') ? CardSectionStyles['default'] : CardSectionStyles;
    CardStyles = CardStyles && CardStyles.hasOwnProperty('default') ? CardStyles['default'] : CardStyles;
    CheckboxStyles = CheckboxStyles && CheckboxStyles.hasOwnProperty('default') ? CheckboxStyles['default'] : CheckboxStyles;
    DividerStyles = DividerStyles && DividerStyles.hasOwnProperty('default') ? DividerStyles['default'] : DividerStyles;
    DropdownHeaderStyles = DropdownHeaderStyles && DropdownHeaderStyles.hasOwnProperty('default') ? DropdownHeaderStyles['default'] : DropdownHeaderStyles;
    DropdownItemStyles = DropdownItemStyles && DropdownItemStyles.hasOwnProperty('default') ? DropdownItemStyles['default'] : DropdownItemStyles;
    DropdownMenuStyles = DropdownMenuStyles && DropdownMenuStyles.hasOwnProperty('default') ? DropdownMenuStyles['default'] : DropdownMenuStyles;
    DropdownToggleStyles = DropdownToggleStyles && DropdownToggleStyles.hasOwnProperty('default') ? DropdownToggleStyles['default'] : DropdownToggleStyles;
    DropdownStyles = DropdownStyles && DropdownStyles.hasOwnProperty('default') ? DropdownStyles['default'] : DropdownStyles;
    ColumnStyles = ColumnStyles && ColumnStyles.hasOwnProperty('default') ? ColumnStyles['default'] : ColumnStyles;
    ContainerStyles = ContainerStyles && ContainerStyles.hasOwnProperty('default') ? ContainerStyles['default'] : ContainerStyles;
    RowStyles = RowStyles && RowStyles.hasOwnProperty('default') ? RowStyles['default'] : RowStyles;
    HeadingStyles = HeadingStyles && HeadingStyles.hasOwnProperty('default') ? HeadingStyles['default'] : HeadingStyles;
    ElementStyles = ElementStyles && ElementStyles.hasOwnProperty('default') ? ElementStyles['default'] : ElementStyles;
    WrapperStyles = WrapperStyles && WrapperStyles.hasOwnProperty('default') ? WrapperStyles['default'] : WrapperStyles;
    InnerIconStyles = InnerIconStyles && InnerIconStyles.hasOwnProperty('default') ? InnerIconStyles['default'] : InnerIconStyles;
    InputStyles = InputStyles && InputStyles.hasOwnProperty('default') ? InputStyles['default'] : InputStyles;
    InputGroupStyles = InputGroupStyles && InputGroupStyles.hasOwnProperty('default') ? InputGroupStyles['default'] : InputGroupStyles;
    LinkStyles = LinkStyles && LinkStyles.hasOwnProperty('default') ? LinkStyles['default'] : LinkStyles;
    ListItemStyles = ListItemStyles && ListItemStyles.hasOwnProperty('default') ? ListItemStyles['default'] : ListItemStyles;
    ListStyles = ListStyles && ListStyles.hasOwnProperty('default') ? ListStyles['default'] : ListStyles;
    ListHeaderStyles = ListHeaderStyles && ListHeaderStyles.hasOwnProperty('default') ? ListHeaderStyles['default'] : ListHeaderStyles;
    ModalSectionStyles = ModalSectionStyles && ModalSectionStyles.hasOwnProperty('default') ? ModalSectionStyles['default'] : ModalSectionStyles;
    ModalBodyStyles = ModalBodyStyles && ModalBodyStyles.hasOwnProperty('default') ? ModalBodyStyles['default'] : ModalBodyStyles;
    ModalHeaderStyles = ModalHeaderStyles && ModalHeaderStyles.hasOwnProperty('default') ? ModalHeaderStyles['default'] : ModalHeaderStyles;
    ModalStyles = ModalStyles && ModalStyles.hasOwnProperty('default') ? ModalStyles['default'] : ModalStyles;
    SearchInputStyles = SearchInputStyles && SearchInputStyles.hasOwnProperty('default') ? SearchInputStyles['default'] : SearchInputStyles;
    ContentStyles = ContentStyles && ContentStyles.hasOwnProperty('default') ? ContentStyles['default'] : ContentStyles;
    SegmentStyles = SegmentStyles && SegmentStyles.hasOwnProperty('default') ? SegmentStyles['default'] : SegmentStyles;
    SegmentsStyles = SegmentsStyles && SegmentsStyles.hasOwnProperty('default') ? SegmentsStyles['default'] : SegmentsStyles;
    SegmentContentStyles = SegmentContentStyles && SegmentContentStyles.hasOwnProperty('default') ? SegmentContentStyles['default'] : SegmentContentStyles;
    TabStyles = TabStyles && TabStyles.hasOwnProperty('default') ? TabStyles['default'] : TabStyles;
    TabsStyles = TabsStyles && TabsStyles.hasOwnProperty('default') ? TabsStyles['default'] : TabsStyles;
    TagStyles = TagStyles && TagStyles.hasOwnProperty('default') ? TagStyles['default'] : TagStyles;
    TagGroupStyles = TagGroupStyles && TagGroupStyles.hasOwnProperty('default') ? TagGroupStyles['default'] : TagGroupStyles;
    TextStyles = TextStyles && TextStyles.hasOwnProperty('default') ? TextStyles['default'] : TextStyles;
    ToastStyles = ToastStyles && ToastStyles.hasOwnProperty('default') ? ToastStyles['default'] : ToastStyles;
    ToastStackStyles = ToastStackStyles && ToastStackStyles.hasOwnProperty('default') ? ToastStackStyles['default'] : ToastStackStyles;
    ToggleStyles = ToggleStyles && ToggleStyles.hasOwnProperty('default') ? ToggleStyles['default'] : ToggleStyles;
    TooltipStyles = TooltipStyles && TooltipStyles.hasOwnProperty('default') ? TooltipStyles['default'] : TooltipStyles;
    UtilsStyles = UtilsStyles && UtilsStyles.hasOwnProperty('default') ? UtilsStyles['default'] : UtilsStyles;

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/modal.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalService = /** @class */ (function () {
        function ModalService(appRef, injector, resolver) {
            this.appRef = appRef;
            this.injector = injector;
            this.resolver = resolver;
            this.modalIsClosing = false;
            this.modalIsOpen = false;
        }
        /**
         * @return {?}
         */
        ModalService.prototype.createPortal = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var portal = document.createElement('div');
                portal.classList.add('fab-modal-portal');
                document.body.append(portal);
            };
        /**
         * @return {?}
         */
        ModalService.prototype.closeModal = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var duration;
                /** @type {?} */
                var modalEl;
                /** @type {?} */
                var transitionDuration;
                modalEl = document.querySelector('.fab-modal');
                duration = window.getComputedStyle(modalEl).transitionDuration;
                transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
                this.modalIsClosing = true;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.appRef.detachView(_this.componentRef.hostView);
                    _this.componentRef.destroy();
                }), transitionDuration + 1);
            };
        /**
         * @param {?} component
         * @param {?=} params
         * @return {?}
         */
        ModalService.prototype.openModal = /**
         * @param {?} component
         * @param {?=} params
         * @return {?}
         */
            function (component, params) {
                var _this = this;
                /** @type {?} */
                var element;
                /** @type {?} */
                var portal;
                if (!document.querySelector('.fab-modal-portal')) {
                    this.createPortal();
                }
                portal = document.querySelector('.fab-modal-portal');
                this.componentRef = this.resolver.resolveComponentFactory(component).create(this.injector, null, portal);
                this.appRef.attachView(this.componentRef.hostView);
                Object.keys(params).map(( /**
                 * @param {?} paramKey
                 * @return {?}
                 */function (paramKey) {
                    _this.componentRef.instance[paramKey] = params[paramKey];
                }));
                element = ( /** @type {?} */((( /** @type {?} */(this.componentRef.hostView))).rootNodes[0]));
                // portal.appendChild(element);
                this.modalIsClosing = false;
            };
        ModalService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ModalService.ctorParameters = function () {
            return [
                { type: i0.ApplicationRef },
                { type: i0.Injector },
                { type: i0.ComponentFactoryResolver }
            ];
        };
        /** @nocollapse */ ModalService.ngInjectableDef = i0.defineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver)); }, token: ModalService, providedIn: "root" });
        return ModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/theme.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThemeService = /** @class */ (function () {
        function ThemeService(options) {
            this.options = options;
        }
        /**
         * @return {?}
         */
        ThemeService.prototype.init = /**
         * @return {?}
         */
            function () {
                document.body.classList.add(emotion.css(reset));
                setBaseTheme(this.options);
            };
        ThemeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ThemeService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['UserOptions',] }] }
            ];
        };
        /** @nocollapse */ ThemeService.ngInjectableDef = i0.defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(i0.inject("UserOptions")); }, token: ThemeService, providedIn: "root" });
        return ThemeService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/toast.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastService = /** @class */ (function () {
        function ToastService() {
            this.portal = false;
            this.stacks = {
                default: {
                    hideDelay: 2000,
                    placement: {
                        x: 'right',
                        y: 'bottom'
                    },
                    toasts: []
                }
            };
        }
        /**
         * @param {?} params
         * @return {?}
         */
        ToastService.prototype.createStack = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                var name = params.name, placement = params.placement;
                this.stacks[name] = {
                    placement: placement,
                    toasts: []
                };
            };
        /**
         * @param {?} newStacks
         * @return {?}
         */
        ToastService.prototype.createStacks = /**
         * @param {?} newStacks
         * @return {?}
         */
            function (newStacks) {
                for (var i = 0; i < newStacks.length; i++) {
                    /** @type {?} */
                    var newStack = newStacks[i];
                    var name_1 = newStack.name, placement = newStack.placement;
                    this.stacks[name_1] = {
                        placement: placement,
                        toasts: []
                    };
                }
            };
        /**
         * @param {?} stackName
         * @return {?}
         */
        ToastService.prototype.handleToast = /**
         * @param {?} stackName
         * @return {?}
         */
            function (stackName) {
                var _this = this;
                /** @type {?} */
                var stack = this.stacks[stackName];
                /** @type {?} */
                var index = stack.toasts.length - 1;
                /** @type {?} */
                var toast = stack.toasts[index];
                /** @type {?} */
                var delay = toast.hideDelay || stack.hideDelay;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.hideToast({ index: index, stack: stack });
                }), delay);
            };
        /**
         * @param {?} params
         * @return {?}
         */
        ToastService.prototype.hideToast = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                var index = params.index, stack = params.stack;
                /** @type {?} */
                var duration;
                /** @type {?} */
                var toastEl;
                if (!this.transitionDuration) {
                    toastEl = document.querySelector('.fab-toast-wrapper');
                    duration = window.getComputedStyle(toastEl).transitionDuration;
                    this.transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
                }
                stack.toasts[index].hiding = true;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    stack.toasts[index].hidden = true;
                }), this.transitionDuration + 1);
            };
        /**
         * @param {?} params
         * @return {?}
         */
        ToastService.prototype.showToast = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                var stack = params.stack, rest = __rest(params, ["stack"]);
                if (this.stacks[stack]) {
                    this.stacks[stack].toasts.push(__assign({ stack: stack }, rest));
                }
                else {
                    this.stacks.default.toasts.push(__assign({ stack: stack }, rest));
                }
                this.handleToast(stack);
            };
        ToastService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ToastService.ctorParameters = function () { return []; };
        /** @nocollapse */ ToastService.ngInjectableDef = i0.defineInjectable({ factory: function ToastService_Factory() { return new ToastService(); }, token: ToastService, providedIn: "root" });
        return ToastService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/fabula.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FabulaService = /** @class */ (function () {
        function FabulaService() {
            this.responsiveness = false;
            this.utils = false;
        }
        FabulaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FabulaService.ctorParameters = function () { return []; };
        FabulaService.propDecorators = {
            responsiveness: [{ type: i0.Input }],
            utils: [{ type: i0.Input }]
        };
        /** @nocollapse */ FabulaService.ngInjectableDef = i0.defineInjectable({ factory: function FabulaService_Factory() { return new FabulaService(); }, token: FabulaService, providedIn: "root" });
        return FabulaService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/common-component/common-component.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonComponent = /** @class */ (function () {
        function CommonComponent(elRef, fabulaService) {
            this.elRef = elRef;
            this.fabulaService = fabulaService;
            this.props = {};
            // Responsiveness
            this.down = {};
            this.on = {};
            this.up = {};
        }
        /**
         * @return {?}
         */
        CommonComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.callbacks && typeof this.callbacks === 'function') {
                    this.callbacks();
                }
                if (this.styles) {
                    this.refreshStyles();
                }
            };
        /**
         * @param {?} stylesFn
         * @return {?}
         */
        CommonComponent.prototype.applyStyles = /**
         * @param {?} stylesFn
         * @return {?}
         */
            function (stylesFn) {
                /** @type {?} */
                var styles = emotion.css(stylesFn({
                    framework: 'angular', props: __assign({}, this, this.props, this.additionalProps)
                }));
                /** @type {?} */
                var responsiveStyles;
                this.host = this.elRef.nativeElement;
                this.host.classList.add(styles);
                if (this.fabulaService.responsiveness) {
                    responsiveStyles = emotion.css(ResponsiveStyles({
                        framework: 'angular',
                        props: __assign({}, this, this.props, this.additionalProps),
                        styles: stylesFn,
                        utils: this.fabulaService.utils
                    }));
                    this.host.classList.add(responsiveStyles);
                }
            };
        /**
         * @return {?}
         */
        CommonComponent.prototype.initStyles = /**
         * @return {?}
         */
            function () {
                if (this.additionalStyles) {
                    this.applyStyles(this.additionalStyles);
                }
                if (this.styles) {
                    this.applyStyles(this.styles);
                }
            };
        /**
         * @return {?}
         */
        CommonComponent.prototype.refreshStyles = /**
         * @return {?}
         */
            function () {
                this.host.classList = '';
                this.initStyles();
            };
        CommonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-component',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        CommonComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        CommonComponent.propDecorators = {
            props: [{ type: i0.Input }],
            down: [{ type: i0.Input }],
            on: [{ type: i0.Input }],
            up: [{ type: i0.Input }]
        };
        return CommonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fabula.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // @dynamic
    var FabulaModule = /** @class */ (function () {
        function FabulaModule() {
        }
        /**
         * @param {?=} options
         * @return {?}
         */
        FabulaModule.forRoot = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                return {
                    ngModule: FabulaModule,
                    providers: [
                        ThemeService,
                        {
                            provide: i0.APP_INITIALIZER,
                            useFactory: ( /**
                             * @param {?} service
                             * @return {?}
                             */function (service) {
                                return ( /**
                                 * @return {?}
                                 */function () { return service.init(); });
                            }),
                            deps: [ThemeService],
                            multi: true
                        },
                        {
                            provide: 'UserOptions',
                            useValue: options
                        }
                    ]
                };
            };
        FabulaModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            CommonComponent
                        ],
                        entryComponents: [
                            CommonComponent
                        ],
                        exports: [
                            CommonComponent
                        ],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return FabulaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/alert/alert.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertComponent = /** @class */ (function (_super) {
        __extends(AlertComponent, _super);
        function AlertComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.border = true;
            _this.clear = false;
            _this.closeButton = false;
            _this.faded = false;
            _this.glow = false;
            _this.outline = false;
            _this.visible = true;
            _this.close = new i0.EventEmitter();
            _this.hasProperty = {
                visible: true
            };
            return _this;
        }
        /**
         * @return {?}
         */
        AlertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.host = this.elRef.nativeElement;
                this.props = this;
                this.styles = AlertStyles;
                this.initStyles();
                if (this.type) {
                    this.handleType();
                }
            };
        // Methods
        // Methods
        /**
         * @return {?}
         */
        AlertComponent.prototype.closeAlert =
            // Methods
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var transitionDuration = getTransitionDuration(this.host.querySelector('.fab-alert'));
                this.closing = true;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.close.emit();
                    _this.closing = false;
                    _this.visible = false;
                }), transitionDuration + 1);
            };
        /**
         * @return {?}
         */
        AlertComponent.prototype.handleType = /**
         * @return {?}
         */
            function () {
                switch (this.type) {
                    case 'danger':
                        this.icon = {
                            color: 'danger',
                            name: 'alert-triangle'
                        };
                        break;
                    case 'success':
                        this.icon = {
                            color: 'success',
                            name: 'check'
                        };
                        break;
                    case 'warning':
                        this.icon = {
                            color: 'warning',
                            name: 'alert-circle'
                        };
                        break;
                    default:
                        this.icon = {
                            color: 'cold',
                            name: 'info'
                        };
                }
            };
        AlertComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-alert',
                        template: "<div class=\"fab-alert\" [attr.data-closing]=\"closing\" [attr.data-title]=\"!!title\" data-fab-component=\"alert\"\n  *ngIf=\"visible\">\n  <fab-icon [props]=\"icon\" *ngIf=\"icon || type\"></fab-icon>\n  <div class=\"fab-alert__stage\">\n    <div class=\"fab-alert__title\" *ngIf=\"title\">{{title}}</div>\n    <div class=\"fab-alert__text\" *ngIf=\"text\">{{text}}</div>\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button (click)=\"closeAlert()\" [parentColor]=\"color\" size=\"sm\" *ngIf=\"closeButton\">\n  </fab-close-button>\n</div>",
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        AlertComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        AlertComponent.propDecorators = {
            border: [{ type: i0.Input }],
            borderColor: [{ type: i0.Input }],
            clear: [{ type: i0.Input }],
            closeButton: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            faded: [{ type: i0.Input }],
            glow: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            invert: [{ type: i0.Input }],
            marker: [{ type: i0.Input }],
            outline: [{ type: i0.Input }],
            text: [{ type: i0.Input }],
            textColor: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            titleColor: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            visible: [{ type: i0.Input }],
            close: [{ type: i0.Output }]
        };
        return AlertComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/icon/icon.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconComponent = /** @class */ (function (_super) {
        __extends(IconComponent, _super);
        function IconComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.size = 'md';
            return _this;
        }
        /**
         * @return {?}
         */
        IconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = IconStyles;
                this.initStyles();
            };
        IconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-icon',
                        template: "<i class=\"fab-icon\"></i>\n",
                        styles: [":host{color:inherit;display:inline-flex}:host .fab-icon{align-items:center}"]
                    }] }
        ];
        /** @nocollapse */
        IconComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        IconComponent.propDecorators = {
            color: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            size: [{ type: i0.Input }]
        };
        return IconComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/icons.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconsModule = /** @class */ (function () {
        function IconsModule() {
        }
        IconsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            IconComponent
                        ],
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [
                            IconComponent
                        ]
                    },] }
        ];
        return IconsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/close-button/close-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloseButtonComponent = /** @class */ (function (_super) {
        __extends(CloseButtonComponent, _super);
        function CloseButtonComponent(cdRef, elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.cdRef = cdRef;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        CloseButtonComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                // Set and apply styles
                this.styles = CloseButtonStyles;
                this.initStyles();
                // Detect changes
                this.cdRef.detectChanges();
            };
        CloseButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-close-button',
                        template: "<button class=\"fab-close-button\">\n    <fab-icon name=\"x\"></fab-icon>\n</button>"
                    }] }
        ];
        /** @nocollapse */
        CloseButtonComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        CloseButtonComponent.propDecorators = {
            color: [{ type: i0.Input }],
            parentColor: [{ type: i0.Input }],
            size: [{ type: i0.Input }]
        };
        return CloseButtonComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/close-button.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloseButtonModule = /** @class */ (function () {
        function CloseButtonModule() {
        }
        CloseButtonModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            CloseButtonComponent
                        ],
                        entryComponents: [
                            CloseButtonComponent
                        ],
                        imports: [
                            common.CommonModule,
                            IconsModule,
                        ],
                        exports: [
                            CloseButtonComponent
                        ]
                    },] }
        ];
        return CloseButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/alert.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        AlertModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            AlertComponent,
                        ],
                        entryComponents: [
                            AlertComponent,
                        ],
                        imports: [
                            CloseButtonModule,
                            common.CommonModule,
                            IconsModule,
                        ],
                        exports: [
                            AlertComponent
                        ]
                    },] }
        ];
        return AlertModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/avatar/avatar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AvatarComponent = /** @class */ (function (_super) {
        __extends(AvatarComponent, _super);
        function AvatarComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.color = '';
            _this.darken = false;
            _this.faded = false;
            _this.icon = {
                name: 'image'
            };
            _this.lighten = false;
            _this.rounded = false;
            _this.showInitials = '';
            _this.size = 'md';
            _this.src = '';
            _this.inline = true;
            return _this;
        }
        /**
         * @return {?}
         */
        AvatarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = AvatarStyles;
                this.initStyles();
            };
        Object.defineProperty(AvatarComponent.prototype, "initials", {
            // Getters
            get: 
            // Getters
            /**
             * @return {?}
             */
            function () {
                return getInitials(this.showInitials);
            },
            enumerable: true,
            configurable: true
        });
        AvatarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-avatar',
                        template: "<div class=\"fab-avatar-wrapper\" data-fab-wrapper=\"avatar\" [attr.data-rounded]=\"rounded\">\n  <div class=\"fab-avatar\" [attr.data-color]=\"color\" [attr.data-rounded]=\"rounded\" [attr.data-size]=\"size\">\n    <fab-icon *ngIf=\"!showInitials && icon\" [props]=\"icon\"></fab-icon>\n    <span class=\"fab-avatar__initials\" *ngIf=\"showInitials\">{{initials}}</span>\n    <div class=\"fab-avatar__image\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\" *ngIf=\"src\"></div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                        styles: [":host{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        AvatarComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        AvatarComponent.propDecorators = {
            color: [{ type: i0.Input }],
            darken: [{ type: i0.Input }],
            faded: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            lighten: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            showInitials: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            src: [{ type: i0.Input }]
        };
        return AvatarComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/avatar.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AvatarModule = /** @class */ (function () {
        function AvatarModule() {
        }
        AvatarModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            AvatarComponent
                        ],
                        entryComponents: [
                            AvatarComponent
                        ],
                        imports: [
                            common.CommonModule,
                            IconsModule
                        ],
                        exports: [
                            AvatarComponent
                        ]
                    },] }
        ];
        return AvatarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/badge/badge.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BadgeComponent = /** @class */ (function (_super) {
        __extends(BadgeComponent, _super);
        function BadgeComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.circle = false;
            _this.clear = false;
            _this.darken = false;
            _this.faded = false;
            _this.glow = false;
            _this.invert = false;
            _this.label = '';
            _this.lighten = false;
            _this.outline = false;
            _this.placement = '';
            _this.placementX = '';
            _this.placementY = '';
            _this.rounded = false;
            _this.size = 'md';
            _this.inline = true;
            return _this;
        }
        /**
         * @return {?}
         */
        BadgeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = BadgeStyles;
                this.initStyles();
            };
        BadgeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-badge',
                        template: "<div class=\"fab-badge-wrapper\" [attr.data-has-placement]=\"!!placement\" data-fab-wrapper=\"badge\">\n  <div class=\"fab-badge\" data-fab-component=\"badge\">\n    <span *ngIf=\"label\">{{label}}</span>\n    <ng-content></ng-content>\n  </div>\n</div>",
                        styles: [":host{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        BadgeComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        BadgeComponent.propDecorators = {
            circle: [{ type: i0.Input }],
            clear: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            darken: [{ type: i0.Input }],
            faded: [{ type: i0.Input }],
            glow: [{ type: i0.Input }],
            invert: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            lighten: [{ type: i0.Input }],
            outline: [{ type: i0.Input }],
            placement: [{ type: i0.Input }],
            placementX: [{ type: i0.Input }],
            placementY: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            size: [{ type: i0.Input }]
        };
        return BadgeComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/badge.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BadgeModule = /** @class */ (function () {
        function BadgeModule() {
        }
        BadgeModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            BadgeComponent
                        ],
                        entryComponents: [
                            BadgeComponent
                        ],
                        imports: [common.CommonModule],
                        exports: [
                            BadgeComponent
                        ]
                    },] }
        ];
        return BadgeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/button/button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function (_super) {
        __extends(ButtonComponent, _super);
        function ButtonComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.border = false;
            _this.compact = false;
            _this.glow = false;
            _this.inline = true;
            return _this;
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.styles = ButtonStyles;
                this.initStyles();
            };
        ButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-button',
                        template: "<button class=\"fab-button\" [attr.data-border]=\"border || props.border\" [attr.data-color]=\"color || props.color\"\n  [attr.data-circle]=\"!!circle || !!props.circle\" [attr.data-expand]=\"expand || props.expand\"\n  [attr.data-outline]=\"outline || props.outline\" [attr.data-rounded]=\"rounded || props.rounded\"\n  [disabled]=\"disabled || props.disabled\" data-fab-component=\"button\" *ngIf=\"!href && !props.href\">\n  <ng-container *ngIf=\"!label && !props.label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"label || props.label\">{{label || props.label}}</ng-container>\n</button>\n\n<a class=\"fab-button\" [attr.data-border]=\"border || props.border\" [attr.data-color]=\"color || props.color\"\n  [attr.data-circle]=\"!!circle || !!props.circle\" [attr.data-expand]=\"expand || props.expand\"\n  [attr.data-outline]=\"outline || props.outline\" [attr.data-rounded]=\"rounded || props.rounded\"\n  [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  data-fab-component=\"button\" *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"!label && !props.label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"label || props.label\">{{label || props.label}}</ng-container>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                        styles: [":host{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ButtonComponent.propDecorators = {
            border: [{ type: i0.Input }],
            circle: [{ type: i0.Input }],
            clear: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            compact: [{ type: i0.Input }],
            darken: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            expand: [{ type: i0.Input }],
            faded: [{ type: i0.Input }],
            glow: [{ type: i0.Input }],
            gradient: [{ type: i0.Input }],
            href: [{ type: i0.Input }],
            invert: [{ type: i0.Input }],
            lighten: [{ type: i0.Input }],
            loading: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            outline: [{ type: i0.Input }],
            rel: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            target: [{ type: i0.Input }],
            wide: [{ type: i0.Input }]
        };
        return ButtonComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/button.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ButtonComponent,
                        ],
                        entryComponents: [
                            ButtonComponent
                        ],
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [
                            ButtonComponent
                        ]
                    },] }
        ];
        return ButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/button-group/button-group.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonGroupComponent = /** @class */ (function (_super) {
        __extends(ButtonGroupComponent, _super);
        function ButtonGroupComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.divider = true;
            _this.dividerColor = '';
            _this.layout = 'h';
            _this.inline = true;
            return _this;
        }
        /**
         * @return {?}
         */
        ButtonGroupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = ButtonGroupStyles;
                this.initStyles();
            };
        ButtonGroupComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-button-group',
                        template: "<div class=\"fab-button-group\" data-fab-component=\"buttonGroup\">\n  <ng-content></ng-content>\n</div>\n",
                        styles: [":host{display:inline-block}:host .fab-button-group-wrapper{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonGroupComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ButtonGroupComponent.propDecorators = {
            color: [{ type: i0.Input }],
            divider: [{ type: i0.Input }],
            dividerColor: [{ type: i0.Input }],
            layout: [{ type: i0.Input }]
        };
        return ButtonGroupComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/button-group.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonGroupModule = /** @class */ (function () {
        function ButtonGroupModule() {
        }
        ButtonGroupModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ButtonGroupComponent,
                        ],
                        entryComponents: [
                            ButtonGroupComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            ButtonGroupComponent
                        ]
                    },] }
        ];
        return ButtonGroupModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/card-image/card-image.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardImageComponent = /** @class */ (function (_super) {
        __extends(CardImageComponent, _super);
        function CardImageComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.adaptColor = false;
            _this.cover = false;
            _this.darken = false;
            _this.faded = false;
            _this.icon = {
                name: 'image'
            };
            _this.lighten = false;
            return _this;
        }
        /**
         * @return {?}
         */
        CardImageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = CardImageStyles;
                this.initStyles();
            };
        CardImageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-card-image',
                        template: "<div class=\"fab-card-image\" [attr.data-layout]=\"layout\"\n  data-fab-component=\"cardImage\">\n  <fab-icon [props]=\"icon\"></fab-icon>\n  <img [src]=\"src\" *ngIf=\"src\">\n  <ng-content></ng-content>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        CardImageComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        CardImageComponent.propDecorators = {
            adaptColor: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            cover: [{ type: i0.Input }],
            darken: [{ type: i0.Input }],
            faded: [{ type: i0.Input }],
            height: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            layout: [{ type: i0.Input }],
            lighten: [{ type: i0.Input }],
            src: [{ type: i0.Input }],
            width: [{ type: i0.Input }]
        };
        return CardImageComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/card-section/card-section.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardSectionComponent = /** @class */ (function (_super) {
        __extends(CardSectionComponent, _super);
        function CardSectionComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.darken = false;
            _this.expand = false;
            _this.faded = false;
            _this.layout = 'vertical';
            _this.lighten = false;
            return _this;
        }
        /**
         * @return {?}
         */
        CardSectionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = CardSectionStyles;
                this.initStyles();
            };
        CardSectionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-card-section',
                        template: "<div class=\"fab-card-section\" [attr.data-layout]=\"layout\" data-fab-component=\"cardSection\">\n  <ng-content></ng-content>\n</div>\n\n"
                    }] }
        ];
        /** @nocollapse */
        CardSectionComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        CardSectionComponent.propDecorators = {
            color: [{ type: i0.Input }],
            darken: [{ type: i0.Input }],
            divider: [{ type: i0.Input }],
            expand: [{ type: i0.Input }],
            faded: [{ type: i0.Input }],
            layout: [{ type: i0.Input }],
            lighten: [{ type: i0.Input }],
            padding: [{ type: i0.Input }]
        };
        return CardSectionComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/card/card.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardComponent = /** @class */ (function (_super) {
        __extends(CardComponent, _super);
        function CardComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.glow = false;
            _this.layout = 'v';
            _this.padding = false;
            return _this;
        }
        /**
         * @return {?}
         */
        CardComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.cardImageComponents.forEach(( /**
                 * @param {?} child
                 * @return {?}
                 */function (child) {
                    child.layout = _this.layout;
                    child.ngOnInit();
                }));
                this.cardSectionComponents.forEach(( /**
                 * @param {?} child
                 * @return {?}
                 */function (child) {
                    child.layout = _this.layout;
                    child.ngOnInit();
                }));
            };
        /**
         * @return {?}
         */
        CardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = CardStyles;
                this.initStyles();
            };
        CardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-card',
                        template: "<div class=\"fab-card\" data-fab-component=\"card\">\n    <ng-content></ng-content>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CardComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        CardComponent.propDecorators = {
            cardImageComponents: [{ type: i0.ContentChildren, args: [CardImageComponent,] }],
            cardSectionComponents: [{ type: i0.ContentChildren, args: [CardSectionComponent,] }],
            color: [{ type: i0.Input }],
            glow: [{ type: i0.Input }],
            layout: [{ type: i0.Input }],
            padding: [{ type: i0.Input }]
        };
        return CardComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/card.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        CardModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            CardComponent,
                            CardImageComponent,
                            CardSectionComponent
                        ],
                        entryComponents: [
                            CardImageComponent,
                            CardSectionComponent
                        ],
                        imports: [
                            common.CommonModule,
                            IconsModule
                        ],
                        exports: [
                            CardComponent,
                            CardImageComponent,
                            CardSectionComponent
                        ]
                    },] }
        ];
        return CardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/checkbox/checkbox.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxComponent = /** @class */ (function (_super) {
        __extends(CheckboxComponent, _super);
        function CheckboxComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.checked = false;
            _this.disabled = false;
            _this.indeterminate = false;
            _this.readOnly = false;
            _this.rounded = false;
            _this.size = 'md';
            _this.change = new i0.EventEmitter();
            _this.check = new i0.EventEmitter();
            _this.uncheck = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = CheckboxStyles;
                this.initStyles();
            };
        // Methods
        // Methods
        /**
         * @param {?=} e
         * @return {?}
         */
        CheckboxComponent.prototype.handleChange =
            // Methods
            /**
             * @param {?=} e
             * @return {?}
             */
            function (e) {
                if (!this.disabled && !this.readOnly) {
                    this.checked = !!e ? e.target.checked : !this.checked;
                    this.indeterminate = !!e ? e.target.indeterminate : false;
                }
                this.handleEvents();
            };
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.handleEvents = /**
         * @return {?}
         */
            function () {
                this.change.emit();
                if (this.checked) {
                    this.check.emit();
                }
                if (!this.checked) {
                    this.uncheck.emit();
                }
            };
        Object.defineProperty(CheckboxComponent.prototype, "currentIcon", {
            get: /**
             * @return {?}
             */ function () {
                return this.indeterminate ? { name: 'minus' } : { name: 'check' };
            },
            enumerable: true,
            configurable: true
        });
        CheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-checkbox',
                        template: "<div class=\"fab-checkbox-wrapper\" data-fab-wrapper=\"checkbox\">\n  <div class=\"fab-checkbox\" [attr.data-checked]=\"checked\" [attr.data-disabled]=\"disabled\"\n    [attr.data-indeterminate]=\"indeterminate\" [attr.data-read-only]=\"readOnly\" data-fab-component=\"checkbox\">\n    <div class=\"fab-checkbox__square\" (click)=\"handleChange()\">\n      <fab-icon [props]=\"currentIcon\"></fab-icon>\n    </div>\n    <label class=\"fab-checkbox__label\">\n      <input [checked]=\"checked\" [disabled]=\"disabled\" [indeterminate]=\"indeterminate\" (change)=\"handleChange($event)\"\n        type=\"checkbox\">\n      <ng-container *ngIf=\"label\">{{label}}</ng-container>\n      <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n      </ng-container>\n    </label>\n  </div>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        CheckboxComponent.propDecorators = {
            activeColor: [{ type: i0.Input }],
            checked: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            inactiveColor: [{ type: i0.Input }],
            indeterminate: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            readOnly: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            change: [{ type: i0.Output }],
            check: [{ type: i0.Output }],
            uncheck: [{ type: i0.Output }]
        };
        return CheckboxComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/checkbox.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxModule = /** @class */ (function () {
        function CheckboxModule() {
        }
        CheckboxModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            CheckboxComponent
                        ],
                        entryComponents: [
                            CheckboxComponent
                        ],
                        imports: [
                            common.CommonModule,
                            IconsModule,
                        ],
                        exports: [
                            CheckboxComponent
                        ]
                    },] }
        ];
        return CheckboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/divider/divider.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DividerComponent = /** @class */ (function (_super) {
        __extends(DividerComponent, _super);
        function DividerComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        DividerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = DividerStyles;
                this.initStyles();
            };
        DividerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-divider',
                        template: "<div class=\"fab-divider\"></div>",
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        DividerComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        DividerComponent.propDecorators = {
            label: [{ type: i0.Input }],
            textColor: [{ type: i0.Input }]
        };
        return DividerComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/divider.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DividerModule = /** @class */ (function () {
        function DividerModule() {
        }
        DividerModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [DividerComponent],
                        entryComponents: [
                            DividerComponent
                        ],
                        imports: [common.CommonModule],
                        exports: [DividerComponent]
                    },] }
        ];
        return DividerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dropdown-header/dropdown-header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownHeaderComponent = /** @class */ (function (_super) {
        __extends(DropdownHeaderComponent, _super);
        function DropdownHeaderComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        DropdownHeaderComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.styles = DropdownHeaderStyles;
                this.initStyles();
            };
        DropdownHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-dropdown-header',
                        template: "<div class=\"fab-dropdown-header\" data-fab-component=\"dropdownHeader\">\n  <ng-container *ngIf=\"label\">{{label}}</ng-container>\n  <ng-container *ngIf=\"!label\">\n    <ng-content></ng-content>\n  </ng-container>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        DropdownHeaderComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        DropdownHeaderComponent.propDecorators = {
            color: [{ type: i0.Input }],
            label: [{ type: i0.Input }]
        };
        return DropdownHeaderComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dropdown-item/dropdown-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownItemComponent = /** @class */ (function (_super) {
        __extends(DropdownItemComponent, _super);
        function DropdownItemComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.button = false;
            _this.clickToClose = false;
            _this.invert = false;
            _this.props = { button: false };
            _this.target = '_blank';
            _this.clicked = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        DropdownItemComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (this.props && this.props.clickToClose || this.clickToClose) {
                    this.button = true;
                    this.props.button = true;
                }
                this.styles = DropdownItemStyles;
                this.initStyles();
            };
        // Methods
        // Methods
        /**
         * @return {?}
         */
        DropdownItemComponent.prototype.handleClick =
            // Methods
            /**
             * @return {?}
             */
            function () {
                this.clicked.emit();
            };
        DropdownItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-dropdown-item',
                        template: "<a class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</a>\n\n<button class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" (click)=\"handleClick()\"\n  *ngIf=\"(button || props.button) && !href && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</button>\n\n<div class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" *ngIf=\"!button && !href && !props.button && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        DropdownItemComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        DropdownItemComponent.propDecorators = {
            button: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            clickToClose: [{ type: i0.Input }],
            href: [{ type: i0.Input }],
            invert: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            parentColor: [{ type: i0.Input }],
            props: [{ type: i0.Input }],
            rel: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            target: [{ type: i0.Input }],
            clicked: [{ type: i0.Output }]
        };
        return DropdownItemComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dropdown-menu/dropdown-menu.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownMenuComponent = /** @class */ (function (_super) {
        __extends(DropdownMenuComponent, _super);
        function DropdownMenuComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.clickToClose = false;
            _this.padding = true;
            _this.clickItem = new i0.EventEmitter();
            _this.closed = new i0.EventEmitter();
            _this.isOpen = false;
            return _this;
        }
        /**
         * @return {?}
         */
        DropdownMenuComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.contentHeader.forEach(( /**
                 * @param {?} header
                 * @return {?}
                 */function (header) { _this.handleDropdownHeader(header); }));
                this.contentItems.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { _this.handleDropdownItem(item); }));
                this.divider.forEach(( /**
                 * @param {?} divider
                 * @return {?}
                 */function (divider) { _this.handleDivider(divider); }));
                this.viewHeader.forEach(( /**
                 * @param {?} header
                 * @return {?}
                 */function (header) { _this.handleDropdownHeader(header); }));
                this.viewItems.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { _this.handleDropdownItem(item); }));
            };
        /**
         * @return {?}
         */
        DropdownMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = DropdownMenuStyles;
                this.initStyles();
            };
        // Methods
        // Methods
        /**
         * @param {?} divider
         * @return {?}
         */
        DropdownMenuComponent.prototype.handleDivider =
            // Methods
            /**
             * @param {?} divider
             * @return {?}
             */
            function (divider) {
                if (this.color) {
                    divider.parentColor = this.color;
                }
                divider.refreshStyles();
            };
        /**
         * @param {?} header
         * @return {?}
         */
        DropdownMenuComponent.prototype.handleDropdownHeader = /**
         * @param {?} header
         * @return {?}
         */
            function (header) {
                if (this.color) {
                    header.parentColor = this.color;
                }
                header.ngAfterViewInit();
            };
        /**
         * @param {?} item
         * @return {?}
         */
        DropdownMenuComponent.prototype.handleDropdownItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var _this = this;
                item.clicked.subscribe(( /**
                 * @return {?}
                 */function () {
                    if (_this.clickToClose || item.clickToClose || item.props.clickToClose) {
                        _this.closed.emit();
                    }
                    _this.clickItem.emit();
                }));
                if (this.color) {
                    item.parentColor = this.color;
                }
                if (this.clickToClose) {
                    item.clickToClose = this.clickToClose;
                }
                if (this.size && !item.size) {
                    item.size = this.size;
                }
                item.padding = this.padding;
                item.ngAfterViewInit();
                this.refreshStyles();
            };
        // Listeners
        // Listeners
        /**
         * @param {?} events
         * @return {?}
         */
        DropdownMenuComponent.prototype.listen =
            // Listeners
            /**
             * @param {?} events
             * @return {?}
             */
            function (events) {
                var _this = this;
                events.toggle.subscribe(( /**
                 * @param {?} isOpen
                 * @return {?}
                 */function (isOpen) {
                    _this.isOpen = isOpen;
                }));
            };
        DropdownMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-dropdown-menu',
                        template: "<div class=\"fab-dropdown-menu\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\"\n  data-fab-component=\"dropdownMenu\">\n  <ng-container *ngIf=\"items\">\n    <fab-dropdown-item *ngFor=\"let item of items\" [props]=\"item\"></fab-dropdown-item>\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n\n  <ng-container *ngIf=\"!items\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        DropdownMenuComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        DropdownMenuComponent.propDecorators = {
            contentHeader: [{ type: i0.ContentChildren, args: [DropdownHeaderComponent,] }],
            contentItems: [{ type: i0.ContentChildren, args: [DropdownItemComponent,] }],
            divider: [{ type: i0.ContentChildren, args: [DividerComponent,] }],
            viewHeader: [{ type: i0.ViewChildren, args: [DropdownHeaderComponent,] }],
            viewItems: [{ type: i0.ViewChildren, args: [DropdownItemComponent,] }],
            alignment: [{ type: i0.Input }],
            clickToClose: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            direction: [{ type: i0.Input }],
            items: [{ type: i0.Input }],
            padding: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            clickItem: [{ type: i0.Output }],
            closed: [{ type: i0.Output }]
        };
        return DropdownMenuComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dropdown-toggle/dropdown-toggle.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownToggleComponent = /** @class */ (function (_super) {
        __extends(DropdownToggleComponent, _super);
        function DropdownToggleComponent(cdRef, elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.cdRef = cdRef;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.arrow = true;
            _this.isOpen = false;
            _this.toggle = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        DropdownToggleComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                this.cdRef.detectChanges();
            };
        /**
         * @return {?}
         */
        DropdownToggleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.props = __assign({}, this);
                this.styles = DropdownToggleStyles;
                this.initStyles();
            };
        /**
         * @return {?}
         */
        DropdownToggleComponent.prototype.handleClick = /**
         * @return {?}
         */
            function () {
                this.toggle.emit(true);
            };
        Object.defineProperty(DropdownToggleComponent.prototype, "arrowIsOnlyChild", {
            get: /**
             * @return {?}
             */ function () {
                if (this.labelEl && this.labelEl.nativeElement && this.labelEl.nativeElement.childNodes) {
                    return !this.labelEl.nativeElement.childNodes.length;
                }
                else {
                    return false;
                }
            },
            enumerable: true,
            configurable: true
        });
        DropdownToggleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-dropdown-toggle',
                        template: "<div class=\"fab-dropdown-toggle\" (click)=\"handleClick()\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\">\n  <fab-button [props]=\"props\">\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"!label\" #label>\n      <ng-content></ng-content>\n    </span>\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"label\">{{ label }}</span>\n    <span class=\"fab-dropdown-toggle__chevron\" *ngIf=\"arrow\" [attr.data-only-child]=\"arrowIsOnlyChild\">\n      <fab-icon name=\"chevron-down\"></fab-icon>\n    </span>\n  </fab-button>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        DropdownToggleComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        DropdownToggleComponent.propDecorators = {
            arrow: [{ type: i0.Input }],
            direction: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            isOpen: [{ type: i0.Input }],
            toggle: [{ type: i0.Output }],
            labelEl: [{ type: i0.ViewChild, args: ['label',] }]
        };
        return DropdownToggleComponent;
    }(ButtonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dropdown/dropdown.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownComponent = /** @class */ (function (_super) {
        __extends(DropdownComponent, _super);
        function DropdownComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.alignment = 'left';
            _this.direction = 'down';
            _this.expand = false;
            _this.isOpen = false;
            _this.close = new i0.EventEmitter();
            _this.open = new i0.EventEmitter();
            _this.toggle = new i0.EventEmitter();
            _this.inline = true;
            return _this;
        }
        /**
         * @return {?}
         */
        DropdownComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.handleChildren();
            };
        /**
         * @return {?}
         */
        DropdownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.styles = DropdownStyles;
                this.initStyles();
                this.callbacks = ( /**
                 * @return {?}
                 */function () { _this.handleChildren(); });
                // Event Listener
                document.addEventListener('click', ( /**
                 * @param {?} e
                 * @return {?}
                 */function (e) { return _this.handleClick(e); }));
            };
        // Methods
        // Methods
        /**
         * @return {?}
         */
        DropdownComponent.prototype.handleChildren =
            // Methods
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (this.dropdownMenu) {
                    this.dropdownMenu.alignment = this.alignment;
                    this.dropdownMenu.direction = this.direction;
                    this.dropdownMenu.listen({ toggle: this.toggle });
                    this.dropdownMenu.closed.subscribe(( /**
                     * @return {?}
                     */function () { return _this.handleToggle(); }));
                    this.dropdownMenu.ngOnInit();
                }
                if (this.dropdownToggle) {
                    this.dropdownToggle.direction = this.direction;
                    this.dropdownToggle.toggle.subscribe(( /**
                     * @return {?}
                     */function () { return _this.handleToggle(); }));
                    if (this.expand) {
                        this.dropdownToggle.expand = true;
                    }
                    this.dropdownToggle.ngOnInit();
                }
                this.refreshStyles();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        DropdownComponent.prototype.handleClick = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var host = this.elRef.nativeElement;
                if (!host.contains(e.target) && this.isOpen) {
                    this.handleToggle();
                }
            };
        /**
         * @return {?}
         */
        DropdownComponent.prototype.handleToggle = /**
         * @return {?}
         */
            function () {
                this.isOpen = !this.isOpen;
                this.dropdownToggle.isOpen = this.isOpen;
                this.toggle.emit(this.isOpen);
                if (!this.isOpen) {
                    this.close.emit();
                }
                if (this.isOpen) {
                    this.open.emit();
                }
            };
        DropdownComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-dropdown',
                        template: "<div class=\"fab-dropdown\" [attr.data-open]=\"isOpen\" data-fab-component=\"dropdown\">\n  <ng-content></ng-content>\n</div>",
                        styles: [":host{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        DropdownComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        DropdownComponent.propDecorators = {
            dropdownMenu: [{ type: i0.ContentChild, args: [DropdownMenuComponent,] }],
            dropdownToggle: [{ type: i0.ContentChild, args: [DropdownToggleComponent,] }],
            alignment: [{ type: i0.Input }],
            direction: [{ type: i0.Input }],
            expand: [{ type: i0.Input }],
            isOpen: [{ type: i0.Input }],
            close: [{ type: i0.Output }],
            open: [{ type: i0.Output }],
            toggle: [{ type: i0.Output }]
        };
        return DropdownComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/dropdown.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownModule = /** @class */ (function () {
        function DropdownModule() {
        }
        DropdownModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            DropdownComponent,
                            DropdownHeaderComponent,
                            DropdownItemComponent,
                            DropdownMenuComponent,
                            DropdownToggleComponent,
                        ],
                        imports: [
                            ButtonModule,
                            common.CommonModule,
                            DividerModule,
                            IconsModule
                        ],
                        exports: [
                            DropdownComponent,
                            DropdownHeaderComponent,
                            DropdownItemComponent,
                            DropdownMenuComponent,
                            DropdownToggleComponent,
                        ]
                    },] }
        ];
        return DropdownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/column/column.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ColumnComponent = /** @class */ (function (_super) {
        __extends(ColumnComponent, _super);
        function ColumnComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        ColumnComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = ColumnStyles;
                this.initStyles();
            };
        ColumnComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-column, fab-col',
                        template: "<div class=\"fab-column\" [attr.data-col]=\"col\">\n  <ng-content></ng-content>\n</div>",
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        ColumnComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ColumnComponent.propDecorators = {
            col: [{ type: i0.Input }]
        };
        return ColumnComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/container/container.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContainerComponent = /** @class */ (function (_super) {
        __extends(ContainerComponent, _super);
        function ContainerComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        ContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = ContainerStyles;
                this.initStyles();
            };
        ContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-container',
                        template: "<div class=\"fab-container\" data-fab-component=\"container\">\n  <ng-content></ng-content>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ContainerComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        return ContainerComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/row/row.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RowComponent = /** @class */ (function (_super) {
        __extends(RowComponent, _super);
        function RowComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        RowComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = RowStyles;
                this.initStyles();
            };
        RowComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-row',
                        template: "<div class=\"fab-row\" data-fab-component=\"row\">\n  <ng-content></ng-content>\n</div>\n",
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        RowComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        return RowComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/grid.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridModule = /** @class */ (function () {
        function GridModule() {
        }
        GridModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ColumnComponent,
                            ContainerComponent,
                            RowComponent
                        ],
                        entryComponents: [
                            ColumnComponent,
                            ContainerComponent,
                            RowComponent
                        ],
                        imports: [common.CommonModule],
                        exports: [
                            ColumnComponent,
                            ContainerComponent,
                            RowComponent
                        ]
                    },] }
        ];
        return GridModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/heading/heading.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeadingComponent = /** @class */ (function (_super) {
        __extends(HeadingComponent, _super);
        function HeadingComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.color = '';
            _this.level = 1;
            return _this;
        }
        /**
         * @return {?}
         */
        HeadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = HeadingStyles;
                this.initStyles();
            };
        HeadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-heading',
                        template: "<h1 class=\"fab-heading\" *ngIf=\"level == 1\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h1>\n<h2 class=\"fab-heading\" *ngIf=\"level == 2\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h2>\n<h3 class=\"fab-heading\" *ngIf=\"level == 3\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h3>\n<h4 class=\"fab-heading\" *ngIf=\"level == 4\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h4>\n<h5 class=\"fab-heading\" *ngIf=\"level == 5\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h5>\n<h6 class=\"fab-heading\" *ngIf=\"level == 6\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h6>\n\n<ng-template #content><ng-content></ng-content></ng-template>",
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        HeadingComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        HeadingComponent.propDecorators = {
            color: [{ type: i0.Input }],
            level: [{ type: i0.Input }],
            weight: [{ type: i0.Input }]
        };
        return HeadingComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/heading.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeadingModule = /** @class */ (function () {
        function HeadingModule() {
        }
        HeadingModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [HeadingComponent],
                        entryComponents: [
                            HeadingComponent
                        ],
                        imports: [common.CommonModule],
                        exports: [HeadingComponent]
                    },] }
        ];
        return HeadingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/element/element.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ElementComponent = /** @class */ (function (_super) {
        __extends(ElementComponent, _super);
        function ElementComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        ElementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = ElementStyles;
                this.initStyles();
            };
        ElementComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-element',
                        template: "<span class=\"fab-element\"><ng-content></ng-content></span>",
                        styles: [":host{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        ElementComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        return ElementComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/wrapper/wrapper.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WrapperComponent = /** @class */ (function (_super) {
        __extends(WrapperComponent, _super);
        function WrapperComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        WrapperComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = WrapperStyles;
                this.initStyles();
            };
        WrapperComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-wrapper',
                        template: "<div class=\"fab-wrapper\" data-fab-component=\"wrapper\">\n    <ng-content></ng-content>\n</div>",
                        styles: [":host{display:block}:host .fab-wrapper{height:100%;width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        WrapperComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        WrapperComponent.propDecorators = {
            bgColor: [{ type: i0.Input }],
            color: [{ type: i0.Input }]
        };
        return WrapperComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/helpers.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HelpersModule = /** @class */ (function () {
        function HelpersModule() {
        }
        HelpersModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ElementComponent,
                            WrapperComponent
                        ],
                        entryComponents: [
                            ElementComponent,
                            WrapperComponent
                        ],
                        imports: [common.CommonModule],
                        exports: [
                            ElementComponent,
                            WrapperComponent
                        ]
                    },] }
        ];
        return HelpersModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/inner-icon/inner-icon.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InnerIconComponent = /** @class */ (function (_super) {
        __extends(InnerIconComponent, _super);
        function InnerIconComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        InnerIconComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.additionalProps = {
                    icon: this.icon,
                    parentProps: this.parentProps
                };
                this.styles = InnerIconStyles;
                this.initStyles();
            };
        InnerIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-inner-icon',
                        template: "<span class=\"fab-inner-icon\"></span>"
                    }] }
        ];
        /** @nocollapse */
        InnerIconComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        InnerIconComponent.propDecorators = {
            color: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            parentProps: [{ type: i0.Input }]
        };
        return InnerIconComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/inner-icon.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InnerIconModule = /** @class */ (function () {
        function InnerIconModule() {
        }
        InnerIconModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            InnerIconComponent,
                        ],
                        entryComponents: [
                            InnerIconComponent
                        ],
                        imports: [common.CommonModule],
                        exports: [
                            InnerIconComponent
                        ]
                    },] }
        ];
        return InnerIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/input/input.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputComponent = /** @class */ (function (_super) {
        __extends(InputComponent, _super);
        function InputComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.focused = false;
            _this.disabled = false;
            _this.expand = false;
            _this.glow = false;
            _this.passwordToggle = false;
            _this.placeholder = '';
            _this.rounded = false;
            _this.size = 'md';
            _this.textarea = false;
            _this.type = 'text';
            _this.hasFocus = false;
            return _this;
        }
        /**
         * @return {?}
         */
        InputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = InputStyles;
                this.initStyles();
            };
        // Methods
        // Methods
        /**
         * @param {?} hasFocus
         * @return {?}
         */
        InputComponent.prototype.handleFocus =
            // Methods
            /**
             * @param {?} hasFocus
             * @return {?}
             */
            function (hasFocus) {
                this.focused = hasFocus;
                this.hasFocus = hasFocus;
            };
        /**
         * @param {?} subject
         * @return {?}
         */
        InputComponent.prototype.isObject = /**
         * @param {?} subject
         * @return {?}
         */
            function (subject) {
                return typeof subject === 'object';
            };
        /**
         * @return {?}
         */
        InputComponent.prototype.toggleType = /**
         * @return {?}
         */
            function () {
                this.type = this.type === 'text' ? 'password' : 'text';
            };
        Object.defineProperty(InputComponent.prototype, "toggleIcon", {
            get: /**
             * @return {?}
             */ function () {
                return this.type === 'text' ? 'eye-off' : 'eye';
            },
            enumerable: true,
            configurable: true
        });
        InputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-input',
                        template: "<div class=\"fab-input-wrapper\" [attr.data-focus]=\"hasFocus\" data-fab-wrapper=\"input\">\n  <div class=\"fab-input\" [attr.data-disabled]=\"disabled\" [attr.data-focus]=\"hasFocus\" [attr.data-textarea]=\"!!textarea\"\n    [attr.data-variant]=\"variant\" data-fab-component=\"input\">\n    <div class=\"fab-input__icon\" data-placement=\"start\" *ngIf=\"icon || iconStart\">\n      <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n      <fab-icon [props]=\"iconStart\" *ngIf=\"iconStart\"></fab-icon>\n    </div>\n\n    <input class=\"fab-input__field\" [disabled]=\"disabled\" (blur)=\"handleFocus(false)\" (focus)=\"handleFocus(true)\"\n      [attr.placeholder]=\"placeholder\" [attr.type]=\"type\" *ngIf=\"!textarea\">\n\n    <textarea class=\"fab-input__field\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\" [attr.type]=\"type\"\n      (blur)=\"handleFocus(false)\" (focus)=\"handleFocus(true)\" *ngIf=\"textarea\"></textarea>\n\n    <div class=\"fab-input__icon\" data-placement=\"end\" *ngIf=\"iconEnd && !passwordToggle\">\n      <fab-icon [props]=\"iconEnd\"></fab-icon>\n    </div>\n\n    <button class=\"fab-input__password-toggle\" (click)=\"toggleType()\" [attr.data-toggled]=\"type === 'text'\"\n      *ngIf=\"passwordToggle\">\n      <fab-icon [name]=\"toggleIcon\"></fab-icon>\n    </button>\n\n    <div class=\"fab-input__elements\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-input__message\" *ngIf=\"message && message.text\">\n    <span>{{message.text}}</span>\n  </div>\n</div>",
                        styles: [":host{display:block}:host[data-focus=true]{z-index:1}"]
                    }] }
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        InputComponent.propDecorators = {
            focused: [{ type: i0.HostBinding, args: ['attr.data-focus',] }],
            color: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            expand: [{ type: i0.Input }],
            glow: [{ type: i0.Input }],
            has: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            iconEnd: [{ type: i0.Input }],
            iconStart: [{ type: i0.Input }],
            message: [{ type: i0.Input }],
            passwordToggle: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            status: [{ type: i0.Input }],
            textarea: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            variant: [{ type: i0.Input }]
        };
        return InputComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/input.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputModule = /** @class */ (function () {
        function InputModule() {
        }
        InputModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            InputComponent,
                        ],
                        entryComponents: [
                            InputComponent
                        ],
                        imports: [
                            common.CommonModule,
                            IconsModule
                        ],
                        exports: [
                            InputComponent
                        ]
                    },] }
        ];
        return InputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/input-group/input-group.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputGroupComponent = /** @class */ (function (_super) {
        __extends(InputGroupComponent, _super);
        function InputGroupComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.layout = 'horizontal';
            return _this;
        }
        /**
         * @return {?}
         */
        InputGroupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = InputGroupStyles;
                this.initStyles();
            };
        InputGroupComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-input-group',
                        template: "<div class=\"fab-input-group-wrapper\" data-fab-wrapper=\"inputGroup\">\n  <div class=\"fab-input-group\" data-fab-component=\"inputGroup\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        InputGroupComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        InputGroupComponent.propDecorators = {
            layout: [{ type: i0.Input }]
        };
        return InputGroupComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/input-group.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputGroupModule = /** @class */ (function () {
        function InputGroupModule() {
        }
        InputGroupModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            InputGroupComponent,
                        ],
                        entryComponents: [
                            InputGroupComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            InputGroupComponent
                        ]
                    },] }
        ];
        return InputGroupModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/link/link.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkComponent = /** @class */ (function (_super) {
        __extends(LinkComponent, _super);
        function LinkComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.target = '_blank';
            _this.underline = true;
            return _this;
        }
        /**
         * @return {?}
         */
        LinkComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = LinkStyles;
                this.initStyles();
            };
        LinkComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-link',
                        template: "<a class=\"fab-link\" [attr.data-size]=\"size\" [attr.href]=\"props.href || href\" [attr.rel]=\"rel\" [attr.target]=\"target\" data-fab-component=\"link\">\n    <ng-container *ngIf=\"props.label || label\">{{props.label || label}}</ng-container>\n    <ng-content></ng-content>\n</a>",
                        styles: [":host{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        LinkComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        LinkComponent.propDecorators = {
            color: [{ type: i0.Input }],
            href: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            props: [{ type: i0.Input }],
            rel: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            target: [{ type: i0.Input }],
            underline: [{ type: i0.Input }]
        };
        return LinkComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/link.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkModule = /** @class */ (function () {
        function LinkModule() {
        }
        LinkModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LinkComponent],
                        entryComponents: [LinkComponent],
                        imports: [common.CommonModule],
                        exports: [LinkComponent]
                    },] }
        ];
        return LinkModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/list-item/list-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListItemComponent = /** @class */ (function (_super) {
        __extends(ListItemComponent, _super);
        function ListItemComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.button = false;
            _this.item = { button: false };
            _this.striped = false;
            _this.target = '_blank';
            _this.clicked = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        ListItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.additionalProps = __assign({}, this.item);
                this.styles = ListItemStyles;
                this.initStyles();
            };
        // Methods
        // Methods
        /**
         * @return {?}
         */
        ListItemComponent.prototype.handleClick =
            // Methods
            /**
             * @return {?}
             */
            function () {
                this.clicked.emit();
            };
        ListItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-list-item',
                        template: "<div class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" *ngIf=\"!button && !href\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</div>\n\n<button class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" (click)=\"handleClick()\" *ngIf=\"!!button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</button>\n\n<a class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" [attr.href]=\"href\" [attr.rel]=\"rel\" [attr.target]=\"target\" *ngIf=\"!!href && !button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ListItemComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ListItemComponent.propDecorators = {
            button: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            divider: [{ type: i0.Input }],
            href: [{ type: i0.Input }],
            item: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            padding: [{ type: i0.Input }],
            props: [{ type: i0.Input }],
            rel: [{ type: i0.Input }],
            striped: [{ type: i0.Input }],
            target: [{ type: i0.Input }],
            clicked: [{ type: i0.Output }]
        };
        return ListItemComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/list/list.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListComponent = /** @class */ (function (_super) {
        __extends(ListComponent, _super);
        function ListComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.divider = true;
            _this.padding = false;
            _this.striped = false;
            _this.clickItem = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        ListComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.contentItems.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { _this.handleItem(item); }));
                this.viewItems.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { _this.handleItem(item); }));
            };
        /**
         * @return {?}
         */
        ListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = ListStyles;
                this.initStyles();
            };
        // Methods
        // Methods
        /**
         * @param {?} item
         * @return {?}
         */
        ListComponent.prototype.handleItem =
            // Methods
            /**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                var _this = this;
                if (this.color && !item.color) {
                    item.color = this.color;
                }
                item.clicked.subscribe(( /**
                 * @return {?}
                 */function () {
                    _this.clickItem.emit();
                }));
                item.divider = this.divider;
                item.padding = this.padding;
                item.striped = this.striped;
                item.ngOnInit();
            };
        ListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-list',
                        template: "<div class=\"fab-list-wrapper\" data-fab-wrapper=\"list\">\n  <div class=\"fab-list\" data-fab-component=\"list\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ListComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ListComponent.propDecorators = {
            contentItems: [{ type: i0.ContentChildren, args: [ListItemComponent,] }],
            viewItems: [{ type: i0.ViewChildren, args: [ListItemComponent,] }],
            color: [{ type: i0.Input }],
            divider: [{ type: i0.Input }],
            padding: [{ type: i0.Input }],
            props: [{ type: i0.Input }],
            striped: [{ type: i0.Input }],
            clickItem: [{ type: i0.Output }]
        };
        return ListComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/list-header/list-header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListHeaderComponent = /** @class */ (function (_super) {
        __extends(ListHeaderComponent, _super);
        function ListHeaderComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        ListHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = ListHeaderStyles;
                this.initStyles();
            };
        ListHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-list-header',
                        template: "<div class=\"fab-list-header\" data-fab-component=\"listHeader\">\n    <ng-content></ng-content>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        ListHeaderComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ListHeaderComponent.propDecorators = {
            color: [{ type: i0.Input }]
        };
        return ListHeaderComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/list.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListModule = /** @class */ (function () {
        function ListModule() {
        }
        ListModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ListComponent,
                            ListHeaderComponent,
                            ListItemComponent
                        ],
                        entryComponents: [
                            ListHeaderComponent,
                            ListItemComponent
                        ],
                        imports: [
                            common.CommonModule,
                            DividerModule
                        ],
                        exports: [
                            ListComponent,
                            ListHeaderComponent,
                            ListItemComponent
                        ]
                    },] }
        ];
        return ListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/modal-section/modal-section.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalSectionComponent = /** @class */ (function (_super) {
        __extends(ModalSectionComponent, _super);
        function ModalSectionComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.padding = true;
            return _this;
        }
        /**
         * @return {?}
         */
        ModalSectionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = ModalSectionStyles;
                this.initStyles();
            };
        ModalSectionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-modal-section',
                        template: "<div class=\"fab-modal-section\" data-fab-component=\"modalSection\">\n  <ng-content></ng-content>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        ModalSectionComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ModalSectionComponent.propDecorators = {
            adaptColor: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            darken: [{ type: i0.Input }],
            divider: [{ type: i0.Input }],
            dividerColor: [{ type: i0.Input }],
            lighten: [{ type: i0.Input }],
            padding: [{ type: i0.Input }],
            parentColor: [{ type: i0.Input }]
        };
        return ModalSectionComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/modal-body/modal-body.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalBodyComponent = /** @class */ (function (_super) {
        __extends(ModalBodyComponent, _super);
        function ModalBodyComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        ModalBodyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.additionalStyles = ModalBodyStyles;
                _super.prototype.ngOnInit.call(this);
            };
        ModalBodyComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-modal-body',
                        template: "<div class=\"fab-modal-body fab-modal-section\" data-fab-component=\"modalBody\">\n  <ng-content></ng-content>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        ModalBodyComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        return ModalBodyComponent;
    }(ModalSectionComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/modal-footer/modal-footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalFooterComponent = /** @class */ (function (_super) {
        __extends(ModalFooterComponent, _super);
        function ModalFooterComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        ModalFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                _super.prototype.ngOnInit.call(this);
            };
        ModalFooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-modal-footer',
                        template: "<div class=\"fab-modal-footer fab-modal-section\" data-fab-component=\"modalFooter\">\n  <ng-content></ng-content>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        ModalFooterComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        return ModalFooterComponent;
    }(ModalSectionComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/modal-header/modal-header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalHeaderComponent = /** @class */ (function (_super) {
        __extends(ModalHeaderComponent, _super);
        function ModalHeaderComponent(cdRef, elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.cdRef = cdRef;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.clickedClose = new i0.EventEmitter();
            _this.init = false;
            return _this;
        }
        /**
         * @return {?}
         */
        ModalHeaderComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                this.cdRef.detectChanges();
            };
        /**
         * @return {?}
         */
        ModalHeaderComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                // Init modal section
                _super.prototype.ngOnInit.call(this);
                // Set and apply styles
                this.styles = ModalHeaderStyles;
                this.initStyles();
                this.cdRef.detectChanges();
                this.init = true;
            };
        /**
         * @return {?}
         */
        ModalHeaderComponent.prototype.closeModal = /**
         * @return {?}
         */
            function () {
                this.clickedClose.emit(true);
            };
        ModalHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-modal-header',
                        template: "<div class=\"fab-modal-header fab-modal-section\" data-fab-component=\"modalHeader\" *ngIf=\"init\">\n  <div class=\"fab-modal-header__content\">\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button [color]=\"color || parentColor\" (click)=\"closeModal()\"></fab-close-button>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        ModalHeaderComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ModalHeaderComponent.propDecorators = {
            clickedClose: [{ type: i0.Output }],
            closeButton: [{ type: i0.ViewChild, args: [CloseButtonComponent,] }]
        };
        return ModalHeaderComponent;
    }(ModalSectionComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/modal/modal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalComponent = /** @class */ (function () {
        function ModalComponent(elRef, modalService) {
            this.elRef = elRef;
            this.modalService = modalService;
            this.glow = true;
            this.isOpen = true;
            this.size = 'lg';
            this.close = new i0.EventEmitter();
            this.open = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        ModalComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var host = this.elRef.nativeElement;
                /** @type {?} */
                var styles;
                if (this.modalBody) {
                    this.modalBody.parentColor = this.color;
                    this.modalBody.ngOnInit();
                }
                if (this.modalFooter) {
                    this.modalFooter.parentColor = this.color;
                    this.modalFooter.ngOnInit();
                }
                if (this.modalHeader) {
                    this.modalHeader.clickedClose.subscribe(( /**
                     * @return {?}
                     */function () { return _this.closeModal(); }));
                    this.modalHeader.parentColor = this.color;
                    this.modalHeader.ngAfterViewInit();
                }
                if (this.modalSection) {
                    this.modalSection.parentColor = this.color;
                    this.modalSection.ngOnInit();
                }
                styles = emotion.css(ModalStyles({ framework: 'angular', props: this }));
                host.classList.add(styles);
                this.open.emit();
            };
        /**
         * @return {?}
         */
        ModalComponent.prototype.closeModal = /**
         * @return {?}
         */
            function () {
                this.modalService.closeModal();
                this.close.emit();
            };
        ModalComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-modal',
                        template: "<div class=\"fab-modal-wrapper\" [attr.data-closing]=\"modalService.modalIsClosing\" [attr.data-open]=\"isOpen\">\n  <div class=\"fab-modal__dialog\">\n    <div class=\"fab-modal\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-modal__backdrop\" (click)=\"closeModal()\"></div>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ModalComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: ModalService }
            ];
        };
        ModalComponent.propDecorators = {
            modalBody: [{ type: i0.ContentChild, args: [ModalBodyComponent,] }],
            modalFooter: [{ type: i0.ContentChild, args: [ModalFooterComponent,] }],
            modalHeader: [{ type: i0.ContentChild, args: [ModalHeaderComponent,] }],
            modalSection: [{ type: i0.ContentChild, args: [ModalSectionComponent,] }],
            color: [{ type: i0.Input }],
            glow: [{ type: i0.Input }],
            isOpen: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            close: [{ type: i0.Output }],
            open: [{ type: i0.Output }]
        };
        return ModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/modal.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalModule = /** @class */ (function () {
        function ModalModule() {
        }
        ModalModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ModalComponent,
                            ModalBodyComponent,
                            ModalFooterComponent,
                            ModalHeaderComponent,
                            ModalSectionComponent
                        ],
                        entryComponents: [
                            ModalComponent,
                            ModalBodyComponent,
                            ModalFooterComponent,
                            ModalHeaderComponent,
                            ModalSectionComponent
                        ],
                        exports: [
                            ModalComponent,
                            ModalBodyComponent,
                            ModalFooterComponent,
                            ModalHeaderComponent,
                            ModalSectionComponent
                        ],
                        imports: [
                            CloseButtonModule,
                            common.CommonModule,
                            IconsModule
                        ],
                        providers: [
                            ModalService
                        ]
                    },] }
        ];
        return ModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/responsiveness.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // @dynamic
    var ResponsivenessModule = /** @class */ (function () {
        function ResponsivenessModule() {
        }
        /**
         * @return {?}
         */
        ResponsivenessModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: ResponsivenessModule,
                    providers: [
                        FabulaService,
                        {
                            provide: i0.APP_INITIALIZER,
                            useFactory: ( /**
                             * @param {?} service
                             * @return {?}
                             */function (service) {
                                return ( /**
                                 * @return {?}
                                 */function () {
                                    service.responsiveness = true;
                                });
                            }),
                            deps: [FabulaService],
                            multi: true
                        }
                    ]
                };
            };
        ResponsivenessModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ]
                    },] }
        ];
        return ResponsivenessModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/search-input/search-input.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchInputComponent = /** @class */ (function (_super) {
        __extends(SearchInputComponent, _super);
        function SearchInputComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.button = null;
            _this.placeholder = 'Search...';
            return _this;
        }
        /**
         * @return {?}
         */
        SearchInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.button) {
                    this.handleButton();
                }
                this.additionalStyles = SearchInputStyles;
                this.inputProps = this;
                this.initStyles();
            };
        // Methods
        // Methods
        /**
         * @return {?}
         */
        SearchInputComponent.prototype.handleButton =
            // Methods
            /**
             * @return {?}
             */
            function () {
                this.buttonProps = __assign({}, this.button);
                this.buttonProps.color = 'primary';
                this.buttonProps.compact = true;
                if (typeof this.button === 'string') {
                    this.buttonProps.label = this.button;
                }
                else if (typeof this.button === 'object' && this.button.label) {
                    this.buttonProps.label = this.button.label;
                }
                else if ((typeof this.button === 'object' && !this.button.icon && !this.button.label) || typeof this.button === 'boolean') {
                    this.buttonProps.label = 'Search';
                }
                if (this.button && typeof this.button === 'object') {
                    for (var key in this.button) {
                        this.buttonProps[key] = this.button[key];
                    }
                }
                if (this.buttonEl) {
                    this.buttonEl.ngAfterViewInit();
                }
            };
        SearchInputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-search-input',
                        template: "<div class=\"fab-search-input\" data-fab-wrapper=\"searchInput\">\n  <fab-input [iconStart]=\"{ name: 'search' }\" [placeholder]=\"placeholder\" [props]=\"inputProps\" data-fab-wrapper=\"searchInput\">\n    <fab-button *ngIf=\"button\" [props]=\"buttonProps\">\n      <fab-inner-icon *ngIf=\"button && button.icon\" [icon]=\"button.icon\" [parentProps]=\"button\"></fab-inner-icon>\n    </fab-button>\n    <ng-content></ng-content>\n  </fab-input>\n</div>",
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        SearchInputComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        SearchInputComponent.propDecorators = {
            button: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            buttonEl: [{ type: i0.ViewChild, args: [ButtonComponent,] }],
            inputEl: [{ type: i0.ViewChild, args: [InputComponent,] }]
        };
        return SearchInputComponent;
    }(InputComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/search-input.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchInputModule = /** @class */ (function () {
        function SearchInputModule() {
        }
        SearchInputModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            SearchInputComponent,
                        ],
                        entryComponents: [
                            SearchInputComponent
                        ],
                        imports: [
                            ButtonModule,
                            common.CommonModule,
                            InnerIconModule,
                            InputModule
                        ],
                        exports: [
                            SearchInputComponent
                        ]
                    },] }
        ];
        return SearchInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/content/content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContentComponent = /** @class */ (function (_super) {
        __extends(ContentComponent, _super);
        function ContentComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.active = false;
            return _this;
        }
        /**
         * @return {?}
         */
        ContentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = ContentStyles;
                this.initStyles();
            };
        ContentComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-content',
                        template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        ContentComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ContentComponent.propDecorators = {
            active: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            scope: [{ type: i0.Input }]
        };
        return ContentComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/selector/selector.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectorComponent = /** @class */ (function (_super) {
        __extends(SelectorComponent, _super);
        function SelectorComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.active = false;
            _this.selectedSegment = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        SelectorComponent.prototype.handleClick = /**
         * @return {?}
         */
            function () {
                if (this.name) {
                    this.selectedSegment.emit(this.name);
                }
            };
        /**
         * @param {?} events
         * @return {?}
         */
        SelectorComponent.prototype.listen = /**
         * @param {?} events
         * @return {?}
         */
            function (events) {
                var _this = this;
                events.onChangeSelector.subscribe(( /**
                 * @param {?} segment
                 * @return {?}
                 */function (segment) {
                    _this.active = segment === _this.name;
                }));
            };
        SelectorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-selector',
                        template: '<div></div>'
                    }] }
        ];
        /** @nocollapse */
        SelectorComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        SelectorComponent.propDecorators = {
            active: [{ type: i0.Input }],
            activeColor: [{ type: i0.Input }],
            activeTextColor: [{ type: i0.Input }],
            clear: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            expand: [{ type: i0.Input }],
            faded: [{ type: i0.Input }],
            href: [{ type: i0.Input }],
            inactiveColor: [{ type: i0.Input }],
            inactiveTextColor: [{ type: i0.Input }],
            invert: [{ type: i0.Input }],
            layout: [{ type: i0.Input }],
            link: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            outline: [{ type: i0.Input }],
            rel: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            scope: [{ type: i0.Input }],
            stacked: [{ type: i0.Input }],
            target: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            selectedSegment: [{ type: i0.Output }]
        };
        return SelectorComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/segment/segment.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SegmentComponent = /** @class */ (function (_super) {
        __extends(SegmentComponent, _super);
        function SegmentComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        SegmentComponent.prototype.childViewInit = /**
         * @return {?}
         */
            function () {
                this.styles = SegmentStyles;
                this.initStyles();
            };
        SegmentComponent.decorators = [
            { type: i0.Component, args: [{
                        providers: [{ provide: SelectorComponent, useExisting: SegmentComponent }],
                        selector: 'fab-segment',
                        template: "<button class=\"fab-segment\" (click)=\"handleClick()\" *ngIf=\"!href\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-segment\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
                    }] }
        ];
        /** @nocollapse */
        SegmentComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        return SegmentComponent;
    }(SelectorComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/segment-content/segment-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SegmentContentComponent = /** @class */ (function (_super) {
        __extends(SegmentContentComponent, _super);
        function SegmentContentComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.contentClass = 'fab-segment-content';
            return _this;
        }
        /**
         * @return {?}
         */
        SegmentContentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                _super.prototype.ngOnInit.call(this);
            };
        SegmentContentComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                        selector: 'fab-segment-content'
                    }] }
        ];
        /** @nocollapse */
        SegmentContentComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        return SegmentContentComponent;
    }(ContentComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/segments/segments.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SegmentsComponent = /** @class */ (function (_super) {
        __extends(SegmentsComponent, _super);
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
            _this.changeSegment = new i0.EventEmitter();
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
                this.childComponents.forEach(( /**
                 * @param {?} child
                 * @return {?}
                 */function (child) {
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
                    child.selectedSegment.subscribe(( /**
                     * @param {?} tab
                     * @return {?}
                     */function (tab) { return _this.handleActiveSegment(tab); }));
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
                    allOtherContent.forEach(( /**
                     * @param {?} other
                     * @return {?}
                     */function (other) {
                        other.setAttribute('data-active', 'false');
                    }));
                }
                if (targetContent) {
                    targetContent.setAttribute('data-active', 'true');
                }
            };
        SegmentsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-segments',
                        template: "<div class=\"fab-segments-wrapper\" data-fab-wrapper=\"segments\">\n  <div class=\"fab-segments\" data-fab-component=\"segments\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        SegmentsComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        SegmentsComponent.propDecorators = {
            childComponents: [{ type: i0.ContentChildren, args: [SelectorComponent,] }],
            active: [{ type: i0.Input }],
            activeColor: [{ type: i0.Input }],
            activeTextColor: [{ type: i0.Input }],
            border: [{ type: i0.Input }],
            clear: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            expand: [{ type: i0.Input }],
            faded: [{ type: i0.Input }],
            inactiveColor: [{ type: i0.Input }],
            inactiveTextColor: [{ type: i0.Input }],
            invert: [{ type: i0.Input }],
            layout: [{ type: i0.Input }],
            outline: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            scope: [{ type: i0.Input }],
            stacked: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            changeSegment: [{ type: i0.Output }]
        };
        return SegmentsComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/segments.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SegmentsDirective = /** @class */ (function () {
        function SegmentsDirective(elRef) {
            this.elRef = elRef;
            this.segmentIsActive = false;
        }
        /**
         * @return {?}
         */
        SegmentsDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this.elRef.nativeElement;
                host.setAttribute('data-segment-is-active', this.segmentIsActive);
                host.setAttribute('data-segment-name', this.segmentName);
                host.setAttribute('data-segment-scope', this.segmentScope);
                host.classList.add(emotion.css(SegmentContentStyles({ framework: 'angular', props: {} })));
            };
        SegmentsDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[segmentIsActive], [segmentName], [segmentScope]'
                    },] }
        ];
        /** @nocollapse */
        SegmentsDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        SegmentsDirective.propDecorators = {
            segmentIsActive: [{ type: i0.Input }],
            segmentName: [{ type: i0.Input }],
            segmentScope: [{ type: i0.Input }]
        };
        return SegmentsDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/segments.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SegmentsModule = /** @class */ (function () {
        function SegmentsModule() {
        }
        SegmentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ContentComponent,
                            SegmentComponent,
                            SegmentContentComponent,
                            SegmentsComponent,
                            SegmentsDirective,
                            SelectorComponent
                        ],
                        entryComponents: [
                            SelectorComponent
                        ],
                        imports: [common.CommonModule],
                        exports: [
                            ContentComponent,
                            SegmentComponent,
                            SegmentContentComponent,
                            SegmentsComponent,
                            SegmentsDirective
                        ]
                    },] }
        ];
        return SegmentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/tab/tab.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabComponent = /** @class */ (function (_super) {
        __extends(TabComponent, _super);
        function TabComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        TabComponent.prototype.childViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this.elRef.nativeElement;
                /** @type {?} */
                var styles = emotion.css(TabStyles({ framework: 'angular', props: this }));
                host.classList.add(styles);
            };
        TabComponent.decorators = [
            { type: i0.Component, args: [{
                        providers: [{ provide: SelectorComponent, useExisting: TabComponent }],
                        selector: 'fab-tab',
                        template: "<button class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" (click)=\"handleClick()\" *ngIf=\"!href && !link\" data-fab-component=\"tab\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" *ngIf=\"href || link\" [href]=\"href || link\" [rel]=\"rel\" [target]=\"target\" data-fab-component=\"tab\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
                    }] }
        ];
        /** @nocollapse */
        TabComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        TabComponent.propDecorators = {
            type: [{ type: i0.Input }]
        };
        return TabComponent;
    }(SelectorComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/tabs/tabs.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabsComponent = /** @class */ (function (_super) {
        __extends(TabsComponent, _super);
        function TabsComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        TabsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                _super.prototype.ngAfterViewInit.call(this);
                this.tabComponents.forEach(( /**
                 * @param {?} child
                 * @return {?}
                 */function (child) {
                    if (!child.type) {
                        child.type = _this.type;
                    }
                }));
            };
        /**
         * @return {?}
         */
        TabsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this.elRef.nativeElement;
                /** @type {?} */
                var styles = emotion.css(TabsStyles({
                    framework: 'angular', props: __assign({}, this, this.props)
                }));
                host.classList.add(styles);
            };
        TabsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-tabs',
                        template: "<div class=\"fab-tabs-wrapper\" data-fab-wrapper=\"tabs\">\n  <div class=\"fab-tabs\" data-fab-component=\"tabs\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                        styles: [":host .fab-tabs-wrapper{height:100%}"]
                    }] }
        ];
        /** @nocollapse */
        TabsComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        TabsComponent.propDecorators = {
            tabComponents: [{ type: i0.ContentChildren, args: [TabComponent,] }],
            alignment: [{ type: i0.Input }],
            props: [{ type: i0.Input }]
        };
        return TabsComponent;
    }(SegmentsComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/tab-content/tab-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabContentComponent = /** @class */ (function (_super) {
        __extends(TabContentComponent, _super);
        function TabContentComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.contentClass = 'fab-tab-content';
            return _this;
        }
        /**
         * @return {?}
         */
        TabContentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                _super.prototype.ngOnInit.call(this);
            };
        TabContentComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                        selector: 'fab-tab-content'
                    }] }
        ];
        /** @nocollapse */
        TabContentComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        return TabContentComponent;
    }(ContentComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/tabs.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabsModule = /** @class */ (function () {
        function TabsModule() {
        }
        TabsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            TabComponent,
                            TabsComponent,
                            TabContentComponent
                        ],
                        entryComponents: [
                            TabComponent,
                            TabsComponent,
                            TabContentComponent
                        ],
                        imports: [
                            common.CommonModule,
                            SegmentsModule
                        ],
                        exports: [
                            TabComponent,
                            TabsComponent,
                            TabContentComponent
                        ]
                    },] }
        ];
        return TabsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/tag/tag.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TagComponent = /** @class */ (function (_super) {
        __extends(TagComponent, _super);
        function TagComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.button = false;
            _this.clear = false;
            _this.faded = false;
            _this.glow = false;
            _this.invert = false;
            _this.outline = false;
            _this.rounded = false;
            _this.size = 'md';
            _this.inline = true;
            return _this;
        }
        /**
         * @return {?}
         */
        TagComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.styles = TagStyles;
                this.initStyles();
            };
        TagComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-tag',
                        template: "<div class=\"fab-tag\" *ngIf=\"!button && !href\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</div>\n\n<button class=\"fab-tag\" *ngIf=\"button\" [attr.data-placement-x]=\"!!placement && placement.x\"\n  [attr.data-placement-y]=\"!!placement && placement.y\" data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tag\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>"
                    }] }
        ];
        /** @nocollapse */
        TagComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        TagComponent.propDecorators = {
            button: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            clear: [{ type: i0.Input }],
            faded: [{ type: i0.Input }],
            glow: [{ type: i0.Input }],
            href: [{ type: i0.Input }],
            invert: [{ type: i0.Input }],
            link: [{ type: i0.Input }],
            outline: [{ type: i0.Input }],
            placement: [{ type: i0.Input }],
            rel: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            target: [{ type: i0.Input }]
        };
        return TagComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/tag-group/tag-group.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TagGroupComponent = /** @class */ (function (_super) {
        __extends(TagGroupComponent, _super);
        function TagGroupComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            return _this;
        }
        /**
         * @return {?}
         */
        TagGroupComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.tagComponents.forEach(( /**
                 * @param {?} tag
                 * @return {?}
                 */function (tag) {
                    if (_this.color && !tag.color) {
                        tag.color = _this.color;
                    }
                    tag.ngAfterViewInit();
                }));
            };
        /**
         * @return {?}
         */
        TagGroupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = TagGroupStyles;
                this.initStyles();
            };
        TagGroupComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-tag-group',
                        template: "<div class=\"fab-tag-group-wrapper\">\n  <div class=\"fab-tag-group\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        TagGroupComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        TagGroupComponent.propDecorators = {
            tagComponents: [{ type: i0.ContentChildren, args: [TagComponent,] }],
            color: [{ type: i0.Input }],
            spacing: [{ type: i0.Input }]
        };
        return TagGroupComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/tag.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: remove tag group component
    var TagModule = /** @class */ (function () {
        function TagModule() {
        }
        TagModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            TagComponent,
                            TagGroupComponent
                        ],
                        entryComponents: [
                            TagComponent,
                            TagGroupComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            TagComponent,
                            TagGroupComponent
                        ]
                    },] }
        ];
        return TagModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/text/text.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TextComponent = /** @class */ (function (_super) {
        __extends(TextComponent, _super);
        function TextComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.inline = false;
            _this.wrap = true;
            return _this;
        }
        /**
         * @return {?}
         */
        TextComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this.elRef.nativeElement;
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
            };
        TextComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-text',
                        template: "<div class=\"fab-text\" [attr.data-aux]=\"aux\" [attr.data-color]=\"color\" [attr.data-size]=\"size\" data-fab-component=\"text\">\n  <ng-container *ngIf=\"!content\">\n    <ng-content></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"content\">{{content}}</ng-container>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TextComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        TextComponent.propDecorators = {
            aux: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            content: [{ type: i0.Input }],
            inline: [{ type: i0.Input }],
            props: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            strong: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            wrap: [{ type: i0.Input }]
        };
        return TextComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/text.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TextModule = /** @class */ (function () {
        function TextModule() {
        }
        TextModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            TextComponent
                        ],
                        entryComponents: [
                            TextComponent
                        ],
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [
                            TextComponent
                        ]
                    },] }
        ];
        return TextModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/theme.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // @dynamic
    var ThemeModule = /** @class */ (function () {
        function ThemeModule() {
        }
        /**
         * @param {?=} options
         * @return {?}
         */
        ThemeModule.forRoot = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                return {
                    ngModule: ThemeModule,
                    providers: [
                        ThemeService,
                        {
                            provide: i0.APP_INITIALIZER,
                            useFactory: ( /**
                             * @param {?} service
                             * @return {?}
                             */function (service) {
                                return ( /**
                                 * @return {?}
                                 */function () { return service.init(); });
                            }),
                            deps: [ThemeService],
                            multi: true
                        },
                        {
                            provide: 'UserOptions',
                            useValue: options
                        }
                    ]
                };
            };
        ThemeModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [],
                        imports: [common.CommonModule],
                        exports: [],
                        providers: [ThemeService]
                    },] }
        ];
        return ThemeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/toast/toast.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastComponent = /** @class */ (function (_super) {
        __extends(ToastComponent, _super);
        function ToastComponent(cdRef, elRef, fabulaService, toastService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.cdRef = cdRef;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.toastService = toastService;
            _this.hiding = false;
            _this.stacked = false;
            _this.height = 0;
            return _this;
        }
        /**
         * @return {?}
         */
        ToastComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.styles = ToastStyles;
                this.initStyles();
                this.props = this;
            };
        /**
         * @return {?}
         */
        ToastComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this.elRef.nativeElement;
                /** @type {?} */
                var height;
                if (this.stacked) {
                    this.stacked = false;
                    height = host.querySelector('.fab-toast-wrapper').offsetHeight;
                }
                this.stacked = true;
                this.additionalProps = { height: height };
                this.height = height;
                this.cdRef.detectChanges();
            };
        // Methods
        // Methods
        /**
         * @return {?}
         */
        ToastComponent.prototype.hideToast =
            // Methods
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var stack = this.toastService.stacks[this.stack];
                this.toastService.hideToast({
                    index: this.index,
                    stack: stack
                });
            };
        Object.defineProperty(ToastComponent.prototype, "toastHeight", {
            // Getters
            get: 
            // Getters
            /**
             * @return {?}
             */
            function () {
                if (this.stacked) {
                    return this.elRef.nativeElement.querySelector('.fab-toast-wrapper').offsetHeight;
                }
                else {
                    return null;
                }
            },
            enumerable: true,
            configurable: true
        });
        ToastComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-toast',
                        template: "<div class=\"fab-toast-wrapper\" data-fab-wrapper=\"toast\" [attr.data-hiding]=\"hiding\"\n  [attr.data-stacked]=\"stacked\" [ngStyle]=\"{ 'height': toastHeight }\">\n  <div class=\"fab-toast\" data-fab-component=\"toast\">\n    <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n    <span class=\"fab-toast__message\" *ngIf=\"message\">{{message}}</span>\n    <ng-content></ng-content>\n    <div class=\"fab-toast__button\" *ngIf=\"!!button || !!hideButton\">\n      <fab-button (click)=\"hideToast()\" [props]=\"hideButton\" size=\"sm\" *ngIf=\"!!hideButton && !button\"></fab-button>\n      <fab-button [props]=\"button\" size=\"sm\" *ngIf=\"button\"></fab-button>\n    </div>\n  </div>\n</div>",
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        ToastComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: i0.ElementRef },
                { type: FabulaService },
                { type: ToastService }
            ];
        };
        ToastComponent.propDecorators = {
            button: [{ type: i0.Input }],
            clear: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            faded: [{ type: i0.Input }],
            glow: [{ type: i0.Input }],
            hideButton: [{ type: i0.Input }],
            href: [{ type: i0.Input }],
            hiding: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            index: [{ type: i0.Input }],
            message: [{ type: i0.Input }],
            outline: [{ type: i0.Input }],
            rel: [{ type: i0.Input }],
            stack: [{ type: i0.Input }],
            stacked: [{ type: i0.Input }],
            target: [{ type: i0.Input }],
            iconComponent: [{ type: i0.ContentChild, args: [InnerIconComponent,] }],
            toastEl: [{ type: i0.ViewChild, args: ['toast',] }]
        };
        return ToastComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/toast-stack/toast-stack.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastStackComponent = /** @class */ (function (_super) {
        __extends(ToastStackComponent, _super);
        function ToastStackComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.placement = {
                x: 'left',
                y: 'bottom'
            };
            return _this;
        }
        /**
         * @return {?}
         */
        ToastStackComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = ToastStackStyles;
                this.initStyles();
            };
        Object.defineProperty(ToastStackComponent.prototype, "visibleToasts", {
            get: /**
             * @return {?}
             */ function () {
                if (this.toasts) {
                    /** @type {?} */
                    var toasts = this.toasts.map(( /**
                     * @param {?} toast
                     * @param {?} index
                     * @return {?}
                     */function (toast, index) {
                        toast.index = index;
                        return toast;
                    }));
                    return toasts.filter(( /**
                     * @param {?} toast
                     * @return {?}
                     */function (toast) { return !toast.hidden; }));
                }
                else {
                    return [];
                }
            },
            enumerable: true,
            configurable: true
        });
        ToastStackComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-toast-stack',
                        template: "<div class=\"fab-toast-stack\" [attr.data-placement-x]=\"placement.x\" [attr.data-placement-y]=\"placement.y\">\n  <fab-toast [hideButton]=\"toast.hideButton\" [color]=\"toast.color\" [hiding]=\"toast.hiding\" [icon]=\"toast.icon\" [index]=\"toast.index\" [message]=\"toast.message\" [stack]=\"toast.stack\" [stacked]=\"true\" *ngFor=\"let toast of visibleToasts\"></fab-toast>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        ToastStackComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ToastStackComponent.propDecorators = {
            placement: [{ type: i0.Input }],
            toasts: [{ type: i0.Input }]
        };
        return ToastStackComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/toast-portal/toast-portal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastPortalComponent = /** @class */ (function () {
        function ToastPortalComponent(toastService) {
            this.toastService = toastService;
        }
        /**
         * @return {?}
         */
        ToastPortalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        Object.defineProperty(ToastPortalComponent.prototype, "stacks", {
            get: /**
             * @return {?}
             */ function () {
                var _this = this;
                return Object.keys(this.toastService.stacks).map(( /**
                 * @param {?} name
                 * @return {?}
                 */function (name) {
                    return _this.toastService.stacks[name];
                }));
            },
            enumerable: true,
            configurable: true
        });
        ToastPortalComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-toast-portal',
                        template: "<fab-toast-stack *ngFor=\"let stack of stacks\" [placement]=\"stack.placement\" [toasts]=\"stack.toasts\"></fab-toast-stack>"
                    }] }
        ];
        /** @nocollapse */
        ToastPortalComponent.ctorParameters = function () {
            return [
                { type: ToastService }
            ];
        };
        return ToastPortalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/toast.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastModule = /** @class */ (function () {
        function ToastModule() {
        }
        ToastModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ToastComponent,
                            ToastPortalComponent,
                            ToastStackComponent
                        ],
                        entryComponents: [
                            InnerIconComponent,
                            ToastComponent,
                            ToastPortalComponent,
                            ToastStackComponent
                        ],
                        imports: [
                            ButtonModule,
                            common.CommonModule,
                            IconsModule,
                            InnerIconModule,
                            LinkModule
                        ],
                        exports: [
                            ToastComponent,
                            ToastPortalComponent,
                            ToastStackComponent
                        ],
                        providers: [
                            ToastService
                        ]
                    },] }
        ];
        return ToastModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/toggle/toggle.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToggleComponent = /** @class */ (function (_super) {
        __extends(ToggleComponent, _super);
        function ToggleComponent(elRef, fabulaService) {
            var _this = _super.call(this, elRef, fabulaService) || this;
            _this.elRef = elRef;
            _this.fabulaService = fabulaService;
            _this.active = false;
            _this.disabled = false;
            _this.rounded = false;
            return _this;
        }
        /**
         * @return {?}
         */
        ToggleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.styles = ToggleStyles;
                this.initStyles();
            };
        /**
         * @return {?}
         */
        ToggleComponent.prototype.handleClick = /**
         * @return {?}
         */
            function () {
                if (!this.disabled) {
                    this.active = !this.active;
                }
            };
        ToggleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-toggle',
                        template: "<div class=\"fab-toggle-wrapper\" [attr.data-active]=\"active\" [attr.data-disabled]=\"disabled\" data-fab-wrapper=\"toggle\">\n  <div class=\"fab-toggle\" data-fab-component=\"toggle\">\n    <button class=\"fab-toggle__switch\" (click)=\"handleClick()\"></button>\n    <div class=\"fab-toggle__label\" (click)=\"handleClick()\">\n      <ng-container *ngIf=\"!label\">\n        <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n      </ng-container>\n      <ng-container *ngIf=\"label\">\n        {{label}}\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        ToggleComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: FabulaService }
            ];
        };
        ToggleComponent.propDecorators = {
            active: [{ type: i0.Input }],
            activeColor: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            inactiveColor: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            size: [{ type: i0.Input }]
        };
        return ToggleComponent;
    }(CommonComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/toggle.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToggleModule = /** @class */ (function () {
        function ToggleModule() {
        }
        ToggleModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ToggleComponent
                        ],
                        entryComponents: [
                            ToggleComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            ToggleComponent
                        ]
                    },] }
        ];
        return ToggleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/tooltip/tooltip.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TooltipComponent = /** @class */ (function () {
        function TooltipComponent(elRef) {
            this.elRef = elRef;
            this.placement = 'top';
        }
        /**
         * @return {?}
         */
        TooltipComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this.elRef.nativeElement;
                /** @type {?} */
                var styles = emotion.css(TooltipStyles({ framework: 'angular', props: this }));
                host.classList.add(styles);
            };
        TooltipComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fab-tooltip',
                        template: "<div class=\"fab-tooltip\" [attr.data-placement]=\"placement\">\n  <span class=\"fab-tooltip__label\">{{label}}</span>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        TooltipComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        TooltipComponent.propDecorators = {
            color: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            offset: [{ type: i0.Input }],
            placement: [{ type: i0.Input }]
        };
        return TooltipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/tooltip.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TooltipDirective = /** @class */ (function () {
        function TooltipDirective(appRef, elRef, injector, resolver) {
            this.appRef = appRef;
            this.elRef = elRef;
            this.injector = injector;
            this.resolver = resolver;
        }
        /**
         * @return {?}
         */
        TooltipDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var portal = document.querySelector('.fab-tooltip-portal');
                if (!portal) {
                    this.createPortal();
                }
                this.handleTooltip();
            };
        /**
         * @return {?}
         */
        TooltipDirective.prototype.createPortal = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var portal = document.createElement('div');
                portal.classList.add('fab-tooltip-portal');
                document.body.append(portal);
            };
        /**
         * @param {?} host
         * @return {?}
         */
        TooltipDirective.prototype.createTooltip = /**
         * @param {?} host
         * @return {?}
         */
            function (host) {
                /** @type {?} */
                var coords = this.getCoords(host);
                /** @type {?} */
                var element;
                /** @type {?} */
                var portal;
                this.componentRef = this.resolver.resolveComponentFactory(TooltipComponent).create(this.injector);
                this.componentRef.instance.color = this.tooltip.color;
                this.componentRef.instance.label = this.tooltip.label;
                this.componentRef.instance.offset = this.tooltip.offset;
                this.componentRef.instance.placement = this.tooltip.placement || 'top';
                this.appRef.attachView(this.componentRef.hostView);
                element = ( /** @type {?} */((( /** @type {?} */(this.componentRef.hostView))).rootNodes[0]));
                portal = document.querySelector('.fab-tooltip-portal');
                element.setAttribute('data-placement', this.tooltip.placement || 'top');
                element.setAttribute('data-ready', 'true');
                element.style.left = coords.left + "px";
                element.style.top = coords.top + "px";
                portal.appendChild(element);
            };
        /**
         * @return {?}
         */
        TooltipDirective.prototype.destroyTooltip = /**
         * @return {?}
         */
            function () {
                this.appRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
            };
        /**
         * @param {?} host
         * @return {?}
         */
        TooltipDirective.prototype.getCoords = /**
         * @param {?} host
         * @return {?}
         */
            function (host) {
                var _a = host.getBoundingClientRect(), height = _a.height, width = _a.width, x = _a.x, y = _a.y;
                /** @type {?} */
                var left;
                /** @type {?} */
                var top;
                if (this.tooltip.placement === 'bottom') {
                    left = x + width / 2;
                    top = y + height;
                }
                else if (this.tooltip.placement === 'left') {
                    left = x;
                    top = y + height / 2;
                }
                else if (this.tooltip.placement === 'right') {
                    left = x + width;
                    top = y + height / 2;
                }
                else {
                    left = x + width / 2;
                    top = y;
                }
                return { left: left, top: top };
            };
        /**
         * @return {?}
         */
        TooltipDirective.prototype.handleTooltip = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var host = this.elRef.nativeElement;
                /** @type {?} */
                var component = host.querySelector('[data-fab-component]');
                /** @type {?} */
                var target = component || host;
                target.addEventListener('mouseenter', ( /**
                 * @return {?}
                 */function () {
                    _this.createTooltip(target);
                }));
                target.addEventListener('mouseleave', ( /**
                 * @return {?}
                 */function () {
                    _this.destroyTooltip();
                }));
            };
        TooltipDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[tooltip],[tooltipColor],[tooltipLabel],[tooltipOffset],[tooltipPlacement]'
                    },] }
        ];
        /** @nocollapse */
        TooltipDirective.ctorParameters = function () {
            return [
                { type: i0.ApplicationRef },
                { type: i0.ElementRef },
                { type: i0.Injector },
                { type: i0.ComponentFactoryResolver }
            ];
        };
        TooltipDirective.propDecorators = {
            tooltip: [{ type: i0.Input }],
            tooltipColor: [{ type: i0.Input }],
            tooltipLabel: [{ type: i0.Input }],
            tooltipOffset: [{ type: i0.Input }],
            tooltipPlacement: [{ type: i0.Input }]
        };
        return TooltipDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/tooltip.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TooltipModule = /** @class */ (function () {
        function TooltipModule() {
        }
        TooltipModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            TooltipComponent,
                            TooltipDirective
                        ],
                        entryComponents: [
                            TooltipComponent
                        ],
                        imports: [common.CommonModule],
                        exports: [
                            TooltipComponent,
                            TooltipDirective
                        ]
                    },] }
        ];
        return TooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/common.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonDirective = /** @class */ (function () {
        function CommonDirective(elRef) {
            this.elRef = elRef;
        }
        /**
         * @return {?}
         */
        CommonDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var element = this.elRef.nativeElement;
                element.classList.add(emotion.css(UtilsStyles({ framework: 'angular', props: this })));
            };
        CommonDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'commonDirective'
                    },] }
        ];
        /** @nocollapse */
        CommonDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        return CommonDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/align.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlignDirective = /** @class */ (function (_super) {
        __extends(AlignDirective, _super);
        function AlignDirective(elRef) {
            var _this = _super.call(this, elRef) || this;
            _this.elRef = elRef;
            return _this;
        }
        AlignDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[al],[alH],[alV], [align], [alignH],[alignV]'
                    },] }
        ];
        /** @nocollapse */
        AlignDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        AlignDirective.propDecorators = {
            al: [{ type: i0.Input, args: ['al',] }],
            alH: [{ type: i0.Input, args: ['alH',] }],
            alV: [{ type: i0.Input, args: ['alV',] }],
            align: [{ type: i0.Input }],
            alignH: [{ type: i0.Input, args: ['alignH',] }],
            alignV: [{ type: i0.Input, args: ['alignV',] }]
        };
        return AlignDirective;
    }(CommonDirective));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/block.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BlockDirective = /** @class */ (function (_super) {
        __extends(BlockDirective, _super);
        function BlockDirective(elRef) {
            var _this = _super.call(this, elRef) || this;
            _this.elRef = elRef;
            return _this;
        }
        BlockDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[block]'
                    },] }
        ];
        /** @nocollapse */
        BlockDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        BlockDirective.propDecorators = {
            block: [{ type: i0.Input }]
        };
        return BlockDirective;
    }(CommonDirective));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/column.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ColumnDirective = /** @class */ (function () {
        function ColumnDirective(componentFactoryResolver, elRef, renderer, target) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.elRef = elRef;
            this.renderer = renderer;
            this.target = target;
        }
        /**
         * @return {?}
         */
        ColumnDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
            };
        ColumnDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[col],[col-down],[col-up],[col-on],[col-not-on]'
                    },] }
        ];
        /** @nocollapse */
        ColumnDirective.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i0.ViewContainerRef }
            ];
        };
        ColumnDirective.propDecorators = {
            col: [{ type: i0.Input }],
            colDown: [{ type: i0.Input, args: ['col-down',] }],
            colNotOn: [{ type: i0.Input, args: ['col-not-on',] }],
            colOn: [{ type: i0.Input, args: ['col-on',] }],
            colUp: [{ type: i0.Input, args: ['col-up',] }]
        };
        return ColumnDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/flex.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FlexDirective = /** @class */ (function () {
        function FlexDirective(elRef) {
            this.elRef = elRef;
        }
        /**
         * @return {?}
         */
        FlexDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this.elRef.nativeElement;
                /** @type {?} */
                var angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
                /** @type {?} */
                var props = {
                    basis: this.basis,
                    direction: this.direction,
                    flex: host.hasAttribute('flex') || this.flex,
                    flow: this.flow,
                    grow: this.grow,
                    shrink: this.shrink,
                    wrap: this.wrap
                };
                host.classList.add(emotion.css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: props })));
            };
        FlexDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[basis], [flex], [flow], [grow], [shrink], [wrap]'
                    },] }
        ];
        /** @nocollapse */
        FlexDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        FlexDirective.propDecorators = {
            basis: [{ type: i0.Input }],
            direction: [{ type: i0.Input }],
            flex: [{ type: i0.Input }],
            flow: [{ type: i0.Input }],
            grow: [{ type: i0.Input }],
            shrink: [{ type: i0.Input }],
            wrap: [{ type: i0.Input }]
        };
        return FlexDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/flow.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FlowDirective = /** @class */ (function () {
        function FlowDirective(elRef) {
            this.elRef = elRef;
        }
        /**
         * @return {?}
         */
        FlowDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var element = this.elRef.nativeElement;
                /** @type {?} */
                var props = {
                    flow: this.flow,
                };
                element.classList.add(emotion.css(UtilsStyles({ framework: 'angular', props: props })));
            };
        FlowDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[flow]'
                    },] }
        ];
        /** @nocollapse */
        FlowDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        FlowDirective.propDecorators = {
            flow: [{ type: i0.Input }]
        };
        return FlowDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/grow.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GrowDirective = /** @class */ (function () {
        function GrowDirective(elRef, renderer) {
            this.elRef = elRef;
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        GrowDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this.elRef.nativeElement;
                /** @type {?} */
                var angularElement = !!host.querySelector('[data-fab-component]') || !!host.querySelector('[data-fab-wrapper]');
                /** @type {?} */
                var props = {
                    grow: this.grow
                };
                host.classList.add(emotion.css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: props })));
            };
        GrowDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[grow]'
                    },] }
        ];
        /** @nocollapse */
        GrowDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        GrowDirective.propDecorators = {
            grow: [{ type: i0.Input }]
        };
        return GrowDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/margin.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MarginDirective = /** @class */ (function () {
        function MarginDirective(elRef) {
            this.elRef = elRef;
        }
        /**
         * @return {?}
         */
        MarginDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this.elRef.nativeElement;
                /** @type {?} */
                var props = {
                    m: this.m,
                    mb: this.mb,
                    ml: this.ml,
                    mr: this.mr,
                    mt: this.mt,
                    mx: this.mx,
                    my: this.my
                };
                host.classList.add(emotion.css(UtilsStyles({ framework: 'angular', props: props })));
            };
        MarginDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[m],[mb],[ml],[mr],[mt],[mx],[my]'
                    },] }
        ];
        /** @nocollapse */
        MarginDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        MarginDirective.propDecorators = {
            m: [{ type: i0.Input }],
            mb: [{ type: i0.Input }],
            ml: [{ type: i0.Input }],
            mr: [{ type: i0.Input }],
            mt: [{ type: i0.Input }],
            mx: [{ type: i0.Input }],
            my: [{ type: i0.Input }]
        };
        return MarginDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/overflow.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OverflowDirective = /** @class */ (function (_super) {
        __extends(OverflowDirective, _super);
        function OverflowDirective(elRef) {
            var _this = _super.call(this, elRef) || this;
            _this.elRef = elRef;
            return _this;
        }
        OverflowDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ov],[ovX],[ovY]'
                    },] }
        ];
        /** @nocollapse */
        OverflowDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        OverflowDirective.propDecorators = {
            ov: [{ type: i0.Input, args: ['ov',] }],
            ovX: [{ type: i0.Input, args: ['ovX',] }],
            ovY: [{ type: i0.Input, args: ['ovY',] }]
        };
        return OverflowDirective;
    }(CommonDirective));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/padding.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaddingDirective = /** @class */ (function () {
        function PaddingDirective(elRef) {
            this.elRef = elRef;
        }
        /**
         * @return {?}
         */
        PaddingDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this.elRef.nativeElement;
                /** @type {?} */
                var angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
                /** @type {?} */
                var props = {
                    p: this.p,
                    pb: this.pb,
                    pl: this.pl,
                    pr: this.pr,
                    pt: this.pt,
                    px: this.px,
                    py: this.py
                };
                host.classList.add(emotion.css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: props })));
            };
        PaddingDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[p],[pb],[pl],[pr],[pt],[px],[py]'
                    },] }
        ];
        /** @nocollapse */
        PaddingDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        PaddingDirective.propDecorators = {
            p: [{ type: i0.Input }],
            pb: [{ type: i0.Input }],
            pl: [{ type: i0.Input }],
            pr: [{ type: i0.Input }],
            pt: [{ type: i0.Input }],
            px: [{ type: i0.Input }],
            py: [{ type: i0.Input }]
        };
        return PaddingDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/row.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RowDirective = /** @class */ (function () {
        function RowDirective(elRef, renderer) {
            this.elRef = elRef;
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        RowDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var element = this.elRef.nativeElement;
                /** @type {?} */
                var parent = element.parentNode;
                /** @type {?} */
                var wrapper = document.createElement('div');
                wrapper.classList.add('fab-row');
                this.renderer.insertBefore(parent, wrapper, element);
                this.renderer.appendChild(wrapper, element);
                /** @type {?} */
                var props = {
                    row: true
                };
                element.classList.add(emotion.css(UtilsStyles({ framework: 'angular', props: props })));
            };
        RowDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[row]'
                    },] }
        ];
        /** @nocollapse */
        RowDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        RowDirective.propDecorators = {
            row: [{ type: i0.Input }]
        };
        return RowDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/size.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                host.classList.add(emotion.css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: this })));
            };
        SizeDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[expand], [height], [width]'
                    },] }
        ];
        /** @nocollapse */
        SizeDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        SizeDirective.propDecorators = {
            expand: [{ type: i0.Input }],
            height: [{ type: i0.Input }],
            width: [{ type: i0.Input }]
        };
        return SizeDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/visibility.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VisibilityDirective = /** @class */ (function (_super) {
        __extends(VisibilityDirective, _super);
        function VisibilityDirective(elRef) {
            var _this = _super.call(this, elRef) || this;
            _this.elRef = elRef;
            return _this;
        }
        VisibilityDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[hidden],[visible]'
                    },] }
        ];
        /** @nocollapse */
        VisibilityDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        VisibilityDirective.propDecorators = {
            hidden: [{ type: i0.Input }],
            visible: [{ type: i0.Input }]
        };
        return VisibilityDirective;
    }(CommonDirective));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/utils.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // @dynamic
    var UtilsModule = /** @class */ (function () {
        function UtilsModule() {
        }
        /**
         * @return {?}
         */
        UtilsModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: UtilsModule,
                    providers: [
                        FabulaService,
                        {
                            provide: i0.APP_INITIALIZER,
                            useFactory: ( /**
                             * @param {?} service
                             * @return {?}
                             */function (service) {
                                return ( /**
                                 * @return {?}
                                 */function () {
                                    service.utils = true;
                                });
                            }),
                            deps: [FabulaService],
                            multi: true
                        }
                    ]
                };
            };
        UtilsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            // Directives
                            AlignDirective,
                            BlockDirective,
                            ColumnDirective,
                            CommonDirective,
                            FlexDirective,
                            FlowDirective,
                            GrowDirective,
                            MarginDirective,
                            OverflowDirective,
                            PaddingDirective,
                            RowDirective,
                            SizeDirective,
                            VisibilityDirective
                        ],
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [
                            // Directives
                            AlignDirective,
                            BlockDirective,
                            ColumnDirective,
                            CommonDirective,
                            FlexDirective,
                            FlowDirective,
                            GrowDirective,
                            OverflowDirective,
                            MarginDirective,
                            PaddingDirective,
                            RowDirective,
                            SizeDirective,
                            VisibilityDirective
                        ]
                    },] }
        ];
        return UtilsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: fabula-angular.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ModalService = ModalService;
    exports.ThemeService = ThemeService;
    exports.ToastService = ToastService;
    exports.FabulaModule = FabulaModule;
    exports.AlertModule = AlertModule;
    exports.AvatarModule = AvatarModule;
    exports.BadgeModule = BadgeModule;
    exports.ButtonModule = ButtonModule;
    exports.ButtonGroupModule = ButtonGroupModule;
    exports.CardModule = CardModule;
    exports.CheckboxModule = CheckboxModule;
    exports.DividerModule = DividerModule;
    exports.DropdownModule = DropdownModule;
    exports.GridModule = GridModule;
    exports.HeadingModule = HeadingModule;
    exports.HelpersModule = HelpersModule;
    exports.IconsModule = IconsModule;
    exports.InnerIconModule = InnerIconModule;
    exports.InputModule = InputModule;
    exports.InputGroupModule = InputGroupModule;
    exports.LinkModule = LinkModule;
    exports.ListModule = ListModule;
    exports.ModalModule = ModalModule;
    exports.ResponsivenessModule = ResponsivenessModule;
    exports.SearchInputModule = SearchInputModule;
    exports.SegmentsModule = SegmentsModule;
    exports.TabsModule = TabsModule;
    exports.TagModule = TagModule;
    exports.TextModule = TextModule;
    exports.ThemeModule = ThemeModule;
    exports.ToastModule = ToastModule;
    exports.ToggleModule = ToggleModule;
    exports.TooltipModule = TooltipModule;
    exports.UtilsModule = UtilsModule;
    exports.ɵd = AlertComponent;
    exports.ɵh = AvatarComponent;
    exports.ɵi = BadgeComponent;
    exports.ɵk = ButtonGroupComponent;
    exports.ɵj = ButtonComponent;
    exports.ɵm = CardImageComponent;
    exports.ɵn = CardSectionComponent;
    exports.ɵl = CardComponent;
    exports.ɵo = CheckboxComponent;
    exports.ɵf = CloseButtonComponent;
    exports.ɵv = ColumnComponent;
    exports.ɵb = CommonComponent;
    exports.ɵw = ContainerComponent;
    exports.ɵbo = ContentComponent;
    exports.ɵp = DividerComponent;
    exports.ɵs = DropdownHeaderComponent;
    exports.ɵt = DropdownItemComponent;
    exports.ɵr = DropdownMenuComponent;
    exports.ɵu = DropdownToggleComponent;
    exports.ɵq = DropdownComponent;
    exports.ɵz = ElementComponent;
    exports.ɵy = HeadingComponent;
    exports.ɵg = IconComponent;
    exports.ɵbb = InnerIconComponent;
    exports.ɵbd = InputGroupComponent;
    exports.ɵbc = InputComponent;
    exports.ɵbe = LinkComponent;
    exports.ɵbh = ListHeaderComponent;
    exports.ɵbg = ListItemComponent;
    exports.ɵbf = ListComponent;
    exports.ɵbj = ModalBodyComponent;
    exports.ɵbl = ModalFooterComponent;
    exports.ɵbm = ModalHeaderComponent;
    exports.ɵbk = ModalSectionComponent;
    exports.ɵbi = ModalComponent;
    exports.ɵx = RowComponent;
    exports.ɵbn = SearchInputComponent;
    exports.ɵbr = SegmentContentComponent;
    exports.ɵbp = SegmentComponent;
    exports.ɵbs = SegmentsComponent;
    exports.ɵbq = SelectorComponent;
    exports.ɵbw = TabContentComponent;
    exports.ɵbu = TabComponent;
    exports.ɵbv = TabsComponent;
    exports.ɵby = TagGroupComponent;
    exports.ɵbx = TagComponent;
    exports.ɵbz = TextComponent;
    exports.ɵcb = ToastPortalComponent;
    exports.ɵcc = ToastStackComponent;
    exports.ɵca = ToastComponent;
    exports.ɵcd = ToggleComponent;
    exports.ɵce = TooltipComponent;
    exports.ɵba = WrapperComponent;
    exports.ɵcg = AlignDirective;
    exports.ɵci = BlockDirective;
    exports.ɵcj = ColumnDirective;
    exports.ɵch = CommonDirective;
    exports.ɵck = FlexDirective;
    exports.ɵcl = FlowDirective;
    exports.ɵcm = GrowDirective;
    exports.ɵcn = MarginDirective;
    exports.ɵco = OverflowDirective;
    exports.ɵcp = PaddingDirective;
    exports.ɵcq = RowDirective;
    exports.ɵbt = SegmentsDirective;
    exports.ɵcr = SizeDirective;
    exports.ɵcf = TooltipDirective;
    exports.ɵcs = VisibilityDirective;
    exports.ɵe = CloseButtonModule;
    exports.ɵc = FabulaService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=fabula-angular.umd.js.map