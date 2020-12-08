import reset from '@fabula/core/styles/common/reset';
import setBaseTheme from '@fabula/core/styles/methods/misc/setBaseTheme';
import ResponsiveStyles from '@fabula/core/styles/responsive/responsive';
import getTransitionDuration from '@fabula/core/styles/methods/misc/getTransitionDuration';
import AlertStyles from '@fabula/core/styles/components/alert/alert';
import IconStyles from '@fabula/core/styles/components/icon/icon';
import CloseButtonStyles from '@fabula/core/styles/components/close-button/close-button';
import getInitials from '@fabula/core/methods/misc/getInitials';
import AvatarStyles from '@fabula/core/styles/components/avatar/avatar';
import BadgeStyles from '@fabula/core/styles/components/badge/badge';
import ButtonStyles from '@fabula/core/styles/components/button/button';
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';
import CardImageStyles from '@fabula/core/styles/components/card-image/card-image';
import CardSectionStyles from '@fabula/core/styles/components/card-section/card-section';
import CardStyles from '@fabula/core/styles/components/card/card';
import CheckboxStyles from '@fabula/core/styles/components/checkbox/checkbox';
import DividerStyles from '@fabula/core/styles/components/divider/divider';
import DropdownHeaderStyles from '@fabula/core/styles/components/dropdown-header/dropdown-header';
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';
import DropdownToggleStyles from '@fabula/core/styles/components/dropdown-toggle/dropdown-toggle';
import DropdownStyles from '@fabula/core/styles/components/dropdown/dropdown';
import ColumnStyles from '@fabula/core/styles/components/column/column';
import ContainerStyles from '@fabula/core/styles/components/container/container';
import RowStyles from '@fabula/core/styles/components/row/row';
import HeadingStyles from '@fabula/core/styles/components/heading/heading';
import ElementStyles from '@fabula/core/styles/components/element/element';
import WrapperStyles from '@fabula/core/styles/components/wrapper/wrapper';
import InnerIconStyles from '@fabula/core/styles/components/inner-icon/inner-icon';
import InputStyles from '@fabula/core/styles/components/input/input';
import InputGroupStyles from '@fabula/core/styles/components/input-group/input-group';
import LinkStyles from '@fabula/core/styles/components/link/link';
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';
import ListStyles from '@fabula/core/styles/components/list/list';
import ListHeaderStyles from '@fabula/core/styles/components/list-header/list-header';
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';
import ModalBodyStyles from '@fabula/core/styles/components/modal-body/modal-body';
import ModalHeaderStyles from '@fabula/core/styles/components/modal-header/modal-header';
import ModalStyles from '@fabula/core/styles/components/modal/modal';
import SearchInputStyles from '@fabula/core/styles/components/search-input/search-input';
import ContentStyles from '@fabula/core/styles/components/content/content';
import SegmentStyles from '@fabula/core/styles/components/segment/segment';
import SegmentsStyles from '@fabula/core/styles/components/segments/segments';
import SegmentContentStyles from '@fabula/core/styles/components/segment-content/segment-content';
import TabStyles from '@fabula/core/styles/components/tab/tab';
import TabsStyles from '@fabula/core/styles/components/tabs/tabs';
import TagStyles from '@fabula/core/styles/components/tag/tag';
import TagGroupStyles from '@fabula/core/styles/components/tag-group/tag-group';
import TextStyles from '@fabula/core/styles/components/text/text';
import ToastStyles from '@fabula/core/styles/components/toast/toast';
import ToastStackStyles from '@fabula/core/styles/components/toast-stack/toast-stack';
import ToggleStyles from '@fabula/core/styles/components/toggle/toggle';
import TooltipStyles from '@fabula/core/styles/components/tooltip/tooltip';
import { CommonModule } from '@angular/common';
import { css } from 'emotion';
import UtilsStyles from '@fabula/core/styles/utils/utils';
import { __extends, __assign, __rest } from 'tslib';
import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef, NgModule, Component, ContentChild, Output, EventEmitter, APP_INITIALIZER, Inject, defineInjectable, ContentChildren, ChangeDetectorRef, ViewChildren, ViewChild, HostBinding, inject, INJECTOR } from '@angular/core';

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
        setTimeout((/**
         * @return {?}
         */
        function () {
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
        Object.keys(params).map((/**
         * @param {?} paramKey
         * @return {?}
         */
        function (paramKey) {
            _this.componentRef.instance[paramKey] = params[paramKey];
        }));
        element = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
        // portal.appendChild(element);
        this.modalIsClosing = false;
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: Injector },
        { type: ComponentFactoryResolver }
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = defineInjectable({ factory: function ModalService_Factory() { return new ModalService(inject(ApplicationRef), inject(INJECTOR), inject(ComponentFactoryResolver)); }, token: ModalService, providedIn: "root" });
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
        document.body.classList.add(css(reset));
        setBaseTheme(this.options);
    };
    ThemeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ThemeService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['UserOptions',] }] }
    ]; };
    /** @nocollapse */ ThemeService.ngInjectableDef = defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(inject("UserOptions")); }, token: ThemeService, providedIn: "root" });
    return ThemeService;
}());

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
        setTimeout((/**
         * @return {?}
         */
        function () {
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
        setTimeout((/**
         * @return {?}
         */
        function () {
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return []; };
    /** @nocollapse */ ToastService.ngInjectableDef = defineInjectable({ factory: function ToastService_Factory() { return new ToastService(); }, token: ToastService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FabulaService.ctorParameters = function () { return []; };
    FabulaService.propDecorators = {
        responsiveness: [{ type: Input }],
        utils: [{ type: Input }]
    };
    /** @nocollapse */ FabulaService.ngInjectableDef = defineInjectable({ factory: function FabulaService_Factory() { return new FabulaService(); }, token: FabulaService, providedIn: "root" });
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
        var styles = css(stylesFn({
            framework: 'angular', props: __assign({}, this, this.props, this.additionalProps)
        }));
        /** @type {?} */
        var responsiveStyles;
        this.host = this.elRef.nativeElement;
        this.host.classList.add(styles);
        if (this.fabulaService.responsiveness) {
            responsiveStyles = css(ResponsiveStyles({
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
        { type: Component, args: [{
                    selector: 'fab-component',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    CommonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CommonComponent.propDecorators = {
        props: [{ type: Input }],
        down: [{ type: Input }],
        on: [{ type: Input }],
        up: [{ type: Input }]
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
                    provide: APP_INITIALIZER,
                    useFactory: (/**
                     * @param {?} service
                     * @return {?}
                     */
                    function (service) { return (/**
                     * @return {?}
                     */
                    function () { return service.init(); }); }),
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
        { type: NgModule, args: [{
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
                        CommonModule
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
        _this.close = new EventEmitter();
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
        setTimeout((/**
         * @return {?}
         */
        function () {
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
        { type: Component, args: [{
                    selector: 'fab-alert',
                    template: "<div class=\"fab-alert\" [attr.data-closing]=\"closing\" [attr.data-title]=\"!!title\" data-fab-component=\"alert\"\n  *ngIf=\"visible\">\n  <fab-icon [props]=\"icon\" *ngIf=\"icon || type\"></fab-icon>\n  <div class=\"fab-alert__stage\">\n    <div class=\"fab-alert__title\" *ngIf=\"title\">{{title}}</div>\n    <div class=\"fab-alert__text\" *ngIf=\"text\">{{text}}</div>\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button (click)=\"closeAlert()\" [parentColor]=\"color\" size=\"sm\" *ngIf=\"closeButton\">\n  </fab-close-button>\n</div>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    AlertComponent.propDecorators = {
        border: [{ type: Input }],
        borderColor: [{ type: Input }],
        clear: [{ type: Input }],
        closeButton: [{ type: Input }],
        color: [{ type: Input }],
        faded: [{ type: Input }],
        glow: [{ type: Input }],
        icon: [{ type: Input }],
        invert: [{ type: Input }],
        marker: [{ type: Input }],
        outline: [{ type: Input }],
        text: [{ type: Input }],
        textColor: [{ type: Input }],
        title: [{ type: Input }],
        titleColor: [{ type: Input }],
        type: [{ type: Input }],
        visible: [{ type: Input }],
        close: [{ type: Output }]
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
        { type: Component, args: [{
                    selector: 'fab-icon',
                    template: "<i class=\"fab-icon\"></i>\n",
                    styles: [":host{color:inherit;display:inline-flex}:host .fab-icon{align-items:center}"]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    IconComponent.propDecorators = {
        color: [{ type: Input }],
        name: [{ type: Input }],
        size: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        IconComponent
                    ],
                    imports: [
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-close-button',
                    template: "<button class=\"fab-close-button\">\n    <fab-icon name=\"x\"></fab-icon>\n</button>"
                }] }
    ];
    /** @nocollapse */
    CloseButtonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CloseButtonComponent.propDecorators = {
        color: [{ type: Input }],
        parentColor: [{ type: Input }],
        size: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        CloseButtonComponent
                    ],
                    entryComponents: [
                        CloseButtonComponent
                    ],
                    imports: [
                        CommonModule,
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
        { type: NgModule, args: [{
                    declarations: [
                        AlertComponent,
                    ],
                    entryComponents: [
                        AlertComponent,
                    ],
                    imports: [
                        CloseButtonModule,
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-avatar',
                    template: "<div class=\"fab-avatar-wrapper\" data-fab-wrapper=\"avatar\" [attr.data-rounded]=\"rounded\">\n  <div class=\"fab-avatar\" [attr.data-color]=\"color\" [attr.data-rounded]=\"rounded\" [attr.data-size]=\"size\">\n    <fab-icon *ngIf=\"!showInitials && icon\" [props]=\"icon\"></fab-icon>\n    <span class=\"fab-avatar__initials\" *ngIf=\"showInitials\">{{initials}}</span>\n    <div class=\"fab-avatar__image\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\" *ngIf=\"src\"></div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    AvatarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    AvatarComponent.propDecorators = {
        color: [{ type: Input }],
        darken: [{ type: Input }],
        faded: [{ type: Input }],
        icon: [{ type: Input }],
        lighten: [{ type: Input }],
        rounded: [{ type: Input }],
        showInitials: [{ type: Input }],
        size: [{ type: Input }],
        src: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        AvatarComponent
                    ],
                    entryComponents: [
                        AvatarComponent
                    ],
                    imports: [
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-badge',
                    template: "<div class=\"fab-badge-wrapper\" [attr.data-has-placement]=\"!!placement\" data-fab-wrapper=\"badge\">\n  <div class=\"fab-badge\" data-fab-component=\"badge\">\n    <span *ngIf=\"label\">{{label}}</span>\n    <ng-content></ng-content>\n  </div>\n</div>",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    BadgeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    BadgeComponent.propDecorators = {
        circle: [{ type: Input }],
        clear: [{ type: Input }],
        color: [{ type: Input }],
        darken: [{ type: Input }],
        faded: [{ type: Input }],
        glow: [{ type: Input }],
        invert: [{ type: Input }],
        label: [{ type: Input }],
        lighten: [{ type: Input }],
        outline: [{ type: Input }],
        placement: [{ type: Input }],
        placementX: [{ type: Input }],
        placementY: [{ type: Input }],
        rounded: [{ type: Input }],
        size: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        BadgeComponent
                    ],
                    entryComponents: [
                        BadgeComponent
                    ],
                    imports: [CommonModule],
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
        { type: Component, args: [{
                    selector: 'fab-button',
                    template: "<button class=\"fab-button\" [attr.data-border]=\"border || props.border\" [attr.data-color]=\"color || props.color\"\n  [attr.data-circle]=\"!!circle || !!props.circle\" [attr.data-expand]=\"expand || props.expand\"\n  [attr.data-outline]=\"outline || props.outline\" [attr.data-rounded]=\"rounded || props.rounded\"\n  [disabled]=\"disabled || props.disabled\" data-fab-component=\"button\" *ngIf=\"!href && !props.href\">\n  <ng-container *ngIf=\"!label && !props.label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"label || props.label\">{{label || props.label}}</ng-container>\n</button>\n\n<a class=\"fab-button\" [attr.data-border]=\"border || props.border\" [attr.data-color]=\"color || props.color\"\n  [attr.data-circle]=\"!!circle || !!props.circle\" [attr.data-expand]=\"expand || props.expand\"\n  [attr.data-outline]=\"outline || props.outline\" [attr.data-rounded]=\"rounded || props.rounded\"\n  [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  data-fab-component=\"button\" *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"!label && !props.label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"label || props.label\">{{label || props.label}}</ng-container>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ButtonComponent.propDecorators = {
        border: [{ type: Input }],
        circle: [{ type: Input }],
        clear: [{ type: Input }],
        color: [{ type: Input }],
        compact: [{ type: Input }],
        darken: [{ type: Input }],
        disabled: [{ type: Input }],
        expand: [{ type: Input }],
        faded: [{ type: Input }],
        glow: [{ type: Input }],
        gradient: [{ type: Input }],
        href: [{ type: Input }],
        invert: [{ type: Input }],
        lighten: [{ type: Input }],
        loading: [{ type: Input }],
        label: [{ type: Input }],
        outline: [{ type: Input }],
        rel: [{ type: Input }],
        rounded: [{ type: Input }],
        size: [{ type: Input }],
        target: [{ type: Input }],
        wide: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        ButtonComponent,
                    ],
                    entryComponents: [
                        ButtonComponent
                    ],
                    imports: [
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-button-group',
                    template: "<div class=\"fab-button-group\" data-fab-component=\"buttonGroup\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{display:inline-block}:host .fab-button-group-wrapper{display:block}"]
                }] }
    ];
    /** @nocollapse */
    ButtonGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ButtonGroupComponent.propDecorators = {
        color: [{ type: Input }],
        divider: [{ type: Input }],
        dividerColor: [{ type: Input }],
        layout: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        ButtonGroupComponent,
                    ],
                    entryComponents: [
                        ButtonGroupComponent
                    ],
                    imports: [
                        CommonModule
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
        { type: Component, args: [{
                    selector: 'fab-card-image',
                    template: "<div class=\"fab-card-image\" [attr.data-layout]=\"layout\"\n  data-fab-component=\"cardImage\">\n  <fab-icon [props]=\"icon\"></fab-icon>\n  <img [src]=\"src\" *ngIf=\"src\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    CardImageComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CardImageComponent.propDecorators = {
        adaptColor: [{ type: Input }],
        color: [{ type: Input }],
        cover: [{ type: Input }],
        darken: [{ type: Input }],
        faded: [{ type: Input }],
        height: [{ type: Input }],
        icon: [{ type: Input }],
        layout: [{ type: Input }],
        lighten: [{ type: Input }],
        src: [{ type: Input }],
        width: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'fab-card-section',
                    template: "<div class=\"fab-card-section\" [attr.data-layout]=\"layout\" data-fab-component=\"cardSection\">\n  <ng-content></ng-content>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    CardSectionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CardSectionComponent.propDecorators = {
        color: [{ type: Input }],
        darken: [{ type: Input }],
        divider: [{ type: Input }],
        expand: [{ type: Input }],
        faded: [{ type: Input }],
        layout: [{ type: Input }],
        lighten: [{ type: Input }],
        padding: [{ type: Input }]
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
        this.cardImageComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            child.layout = _this.layout;
            child.ngOnInit();
        }));
        this.cardSectionComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
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
        { type: Component, args: [{
                    selector: 'fab-card',
                    template: "<div class=\"fab-card\" data-fab-component=\"card\">\n    <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CardComponent.propDecorators = {
        cardImageComponents: [{ type: ContentChildren, args: [CardImageComponent,] }],
        cardSectionComponents: [{ type: ContentChildren, args: [CardSectionComponent,] }],
        color: [{ type: Input }],
        glow: [{ type: Input }],
        layout: [{ type: Input }],
        padding: [{ type: Input }]
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
        { type: NgModule, args: [{
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
                        CommonModule,
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
        _this.change = new EventEmitter();
        _this.check = new EventEmitter();
        _this.uncheck = new EventEmitter();
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
         */
        function () {
            return this.indeterminate ? { name: 'minus' } : { name: 'check' };
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-checkbox',
                    template: "<div class=\"fab-checkbox-wrapper\" data-fab-wrapper=\"checkbox\">\n  <div class=\"fab-checkbox\" [attr.data-checked]=\"checked\" [attr.data-disabled]=\"disabled\"\n    [attr.data-indeterminate]=\"indeterminate\" [attr.data-read-only]=\"readOnly\" data-fab-component=\"checkbox\">\n    <div class=\"fab-checkbox__square\" (click)=\"handleChange()\">\n      <fab-icon [props]=\"currentIcon\"></fab-icon>\n    </div>\n    <label class=\"fab-checkbox__label\">\n      <input [checked]=\"checked\" [disabled]=\"disabled\" [indeterminate]=\"indeterminate\" (change)=\"handleChange($event)\"\n        type=\"checkbox\">\n      <ng-container *ngIf=\"label\">{{label}}</ng-container>\n      <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n      </ng-container>\n    </label>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CheckboxComponent.propDecorators = {
        activeColor: [{ type: Input }],
        checked: [{ type: Input }],
        color: [{ type: Input }],
        disabled: [{ type: Input }],
        inactiveColor: [{ type: Input }],
        indeterminate: [{ type: Input }],
        label: [{ type: Input }],
        readOnly: [{ type: Input }],
        rounded: [{ type: Input }],
        size: [{ type: Input }],
        change: [{ type: Output }],
        check: [{ type: Output }],
        uncheck: [{ type: Output }]
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
        { type: NgModule, args: [{
                    declarations: [
                        CheckboxComponent
                    ],
                    entryComponents: [
                        CheckboxComponent
                    ],
                    imports: [
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-divider',
                    template: "<div class=\"fab-divider\"></div>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    DividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DividerComponent.propDecorators = {
        label: [{ type: Input }],
        textColor: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [DividerComponent],
                    entryComponents: [
                        DividerComponent
                    ],
                    imports: [CommonModule],
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
        { type: Component, args: [{
                    selector: 'fab-dropdown-header',
                    template: "<div class=\"fab-dropdown-header\" data-fab-component=\"dropdownHeader\">\n  <ng-container *ngIf=\"label\">{{label}}</ng-container>\n  <ng-container *ngIf=\"!label\">\n    <ng-content></ng-content>\n  </ng-container>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DropdownHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DropdownHeaderComponent.propDecorators = {
        color: [{ type: Input }],
        label: [{ type: Input }]
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
        _this.clicked = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'fab-dropdown-item',
                    template: "<a class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</a>\n\n<button class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" (click)=\"handleClick()\"\n  *ngIf=\"(button || props.button) && !href && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</button>\n\n<div class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" *ngIf=\"!button && !href && !props.button && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    DropdownItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DropdownItemComponent.propDecorators = {
        button: [{ type: Input }],
        color: [{ type: Input }],
        clickToClose: [{ type: Input }],
        href: [{ type: Input }],
        invert: [{ type: Input }],
        label: [{ type: Input }],
        parentColor: [{ type: Input }],
        props: [{ type: Input }],
        rel: [{ type: Input }],
        size: [{ type: Input }],
        target: [{ type: Input }],
        clicked: [{ type: Output }]
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
        _this.clickItem = new EventEmitter();
        _this.closed = new EventEmitter();
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
        this.contentHeader.forEach((/**
         * @param {?} header
         * @return {?}
         */
        function (header) { _this.handleDropdownHeader(header); }));
        this.contentItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { _this.handleDropdownItem(item); }));
        this.divider.forEach((/**
         * @param {?} divider
         * @return {?}
         */
        function (divider) { _this.handleDivider(divider); }));
        this.viewHeader.forEach((/**
         * @param {?} header
         * @return {?}
         */
        function (header) { _this.handleDropdownHeader(header); }));
        this.viewItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { _this.handleDropdownItem(item); }));
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
        item.clicked.subscribe((/**
         * @return {?}
         */
        function () {
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
        events.toggle.subscribe((/**
         * @param {?} isOpen
         * @return {?}
         */
        function (isOpen) {
            _this.isOpen = isOpen;
        }));
    };
    DropdownMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dropdown-menu',
                    template: "<div class=\"fab-dropdown-menu\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\"\n  data-fab-component=\"dropdownMenu\">\n  <ng-container *ngIf=\"items\">\n    <fab-dropdown-item *ngFor=\"let item of items\" [props]=\"item\"></fab-dropdown-item>\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n\n  <ng-container *ngIf=\"!items\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    DropdownMenuComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DropdownMenuComponent.propDecorators = {
        contentHeader: [{ type: ContentChildren, args: [DropdownHeaderComponent,] }],
        contentItems: [{ type: ContentChildren, args: [DropdownItemComponent,] }],
        divider: [{ type: ContentChildren, args: [DividerComponent,] }],
        viewHeader: [{ type: ViewChildren, args: [DropdownHeaderComponent,] }],
        viewItems: [{ type: ViewChildren, args: [DropdownItemComponent,] }],
        alignment: [{ type: Input }],
        clickToClose: [{ type: Input }],
        color: [{ type: Input }],
        direction: [{ type: Input }],
        items: [{ type: Input }],
        padding: [{ type: Input }],
        size: [{ type: Input }],
        clickItem: [{ type: Output }],
        closed: [{ type: Output }]
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
        _this.toggle = new EventEmitter();
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
         */
        function () {
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
        { type: Component, args: [{
                    selector: 'fab-dropdown-toggle',
                    template: "<div class=\"fab-dropdown-toggle\" (click)=\"handleClick()\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\">\n  <fab-button [props]=\"props\">\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"!label\" #label>\n      <ng-content></ng-content>\n    </span>\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"label\">{{ label }}</span>\n    <span class=\"fab-dropdown-toggle__chevron\" *ngIf=\"arrow\" [attr.data-only-child]=\"arrowIsOnlyChild\">\n      <fab-icon name=\"chevron-down\"></fab-icon>\n    </span>\n  </fab-button>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DropdownToggleComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DropdownToggleComponent.propDecorators = {
        arrow: [{ type: Input }],
        direction: [{ type: Input }],
        icon: [{ type: Input }],
        label: [{ type: Input }],
        isOpen: [{ type: Input }],
        toggle: [{ type: Output }],
        labelEl: [{ type: ViewChild, args: ['label',] }]
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
        _this.close = new EventEmitter();
        _this.open = new EventEmitter();
        _this.toggle = new EventEmitter();
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
        this.callbacks = (/**
         * @return {?}
         */
        function () { _this.handleChildren(); });
        // Event Listener
        document.addEventListener('click', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.handleClick(e); }));
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
            this.dropdownMenu.closed.subscribe((/**
             * @return {?}
             */
            function () { return _this.handleToggle(); }));
            this.dropdownMenu.ngOnInit();
        }
        if (this.dropdownToggle) {
            this.dropdownToggle.direction = this.direction;
            this.dropdownToggle.toggle.subscribe((/**
             * @return {?}
             */
            function () { return _this.handleToggle(); }));
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
        { type: Component, args: [{
                    selector: 'fab-dropdown',
                    template: "<div class=\"fab-dropdown\" [attr.data-open]=\"isOpen\" data-fab-component=\"dropdown\">\n  <ng-content></ng-content>\n</div>",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DropdownComponent.propDecorators = {
        dropdownMenu: [{ type: ContentChild, args: [DropdownMenuComponent,] }],
        dropdownToggle: [{ type: ContentChild, args: [DropdownToggleComponent,] }],
        alignment: [{ type: Input }],
        direction: [{ type: Input }],
        expand: [{ type: Input }],
        isOpen: [{ type: Input }],
        close: [{ type: Output }],
        open: [{ type: Output }],
        toggle: [{ type: Output }]
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
        { type: NgModule, args: [{
                    declarations: [
                        DropdownComponent,
                        DropdownHeaderComponent,
                        DropdownItemComponent,
                        DropdownMenuComponent,
                        DropdownToggleComponent,
                    ],
                    imports: [
                        ButtonModule,
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-column, fab-col',
                    template: "<div class=\"fab-column\" [attr.data-col]=\"col\">\n  <ng-content></ng-content>\n</div>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    ColumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ColumnComponent.propDecorators = {
        col: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'fab-container',
                    template: "<div class=\"fab-container\" data-fab-component=\"container\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
        { type: Component, args: [{
                    selector: 'fab-row',
                    template: "<div class=\"fab-row\" data-fab-component=\"row\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    RowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
        { type: NgModule, args: [{
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
                    imports: [CommonModule],
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
        { type: Component, args: [{
                    selector: 'fab-heading',
                    template: "<h1 class=\"fab-heading\" *ngIf=\"level == 1\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h1>\n<h2 class=\"fab-heading\" *ngIf=\"level == 2\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h2>\n<h3 class=\"fab-heading\" *ngIf=\"level == 3\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h3>\n<h4 class=\"fab-heading\" *ngIf=\"level == 4\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h4>\n<h5 class=\"fab-heading\" *ngIf=\"level == 5\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h5>\n<h6 class=\"fab-heading\" *ngIf=\"level == 6\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h6>\n\n<ng-template #content><ng-content></ng-content></ng-template>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    HeadingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    HeadingComponent.propDecorators = {
        color: [{ type: Input }],
        level: [{ type: Input }],
        weight: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [HeadingComponent],
                    entryComponents: [
                        HeadingComponent
                    ],
                    imports: [CommonModule],
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
        { type: Component, args: [{
                    selector: 'fab-element',
                    template: "<span class=\"fab-element\"><ng-content></ng-content></span>",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    ElementComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
        { type: Component, args: [{
                    selector: 'fab-wrapper',
                    template: "<div class=\"fab-wrapper\" data-fab-component=\"wrapper\">\n    <ng-content></ng-content>\n</div>",
                    styles: [":host{display:block}:host .fab-wrapper{height:100%;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    WrapperComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    WrapperComponent.propDecorators = {
        bgColor: [{ type: Input }],
        color: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        ElementComponent,
                        WrapperComponent
                    ],
                    entryComponents: [
                        ElementComponent,
                        WrapperComponent
                    ],
                    imports: [CommonModule],
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
        { type: Component, args: [{
                    selector: 'fab-inner-icon',
                    template: "<span class=\"fab-inner-icon\"></span>"
                }] }
    ];
    /** @nocollapse */
    InnerIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    InnerIconComponent.propDecorators = {
        color: [{ type: Input }],
        icon: [{ type: Input }],
        parentProps: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        InnerIconComponent,
                    ],
                    entryComponents: [
                        InnerIconComponent
                    ],
                    imports: [CommonModule],
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
         */
        function () {
            return this.type === 'text' ? 'eye-off' : 'eye';
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-input',
                    template: "<div class=\"fab-input-wrapper\" [attr.data-focus]=\"hasFocus\" data-fab-wrapper=\"input\">\n  <div class=\"fab-input\" [attr.data-disabled]=\"disabled\" [attr.data-focus]=\"hasFocus\" [attr.data-textarea]=\"!!textarea\"\n    [attr.data-variant]=\"variant\" data-fab-component=\"input\">\n    <div class=\"fab-input__icon\" data-placement=\"start\" *ngIf=\"icon || iconStart\">\n      <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n      <fab-icon [props]=\"iconStart\" *ngIf=\"iconStart\"></fab-icon>\n    </div>\n\n    <input class=\"fab-input__field\" [disabled]=\"disabled\" (blur)=\"handleFocus(false)\" (focus)=\"handleFocus(true)\"\n      [attr.placeholder]=\"placeholder\" [attr.type]=\"type\" *ngIf=\"!textarea\">\n\n    <textarea class=\"fab-input__field\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\" [attr.type]=\"type\"\n      (blur)=\"handleFocus(false)\" (focus)=\"handleFocus(true)\" *ngIf=\"textarea\"></textarea>\n\n    <div class=\"fab-input__icon\" data-placement=\"end\" *ngIf=\"iconEnd && !passwordToggle\">\n      <fab-icon [props]=\"iconEnd\"></fab-icon>\n    </div>\n\n    <button class=\"fab-input__password-toggle\" (click)=\"toggleType()\" [attr.data-toggled]=\"type === 'text'\"\n      *ngIf=\"passwordToggle\">\n      <fab-icon [name]=\"toggleIcon\"></fab-icon>\n    </button>\n\n    <div class=\"fab-input__elements\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-input__message\" *ngIf=\"message && message.text\">\n    <span>{{message.text}}</span>\n  </div>\n</div>",
                    styles: [":host{display:block}:host[data-focus=true]{z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    InputComponent.propDecorators = {
        focused: [{ type: HostBinding, args: ['attr.data-focus',] }],
        color: [{ type: Input }],
        disabled: [{ type: Input }],
        expand: [{ type: Input }],
        glow: [{ type: Input }],
        has: [{ type: Input }],
        icon: [{ type: Input }],
        iconEnd: [{ type: Input }],
        iconStart: [{ type: Input }],
        message: [{ type: Input }],
        passwordToggle: [{ type: Input }],
        placeholder: [{ type: Input }],
        rounded: [{ type: Input }],
        size: [{ type: Input }],
        status: [{ type: Input }],
        textarea: [{ type: Input }],
        type: [{ type: Input }],
        variant: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        InputComponent,
                    ],
                    entryComponents: [
                        InputComponent
                    ],
                    imports: [
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-input-group',
                    template: "<div class=\"fab-input-group-wrapper\" data-fab-wrapper=\"inputGroup\">\n  <div class=\"fab-input-group\" data-fab-component=\"inputGroup\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    InputGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    InputGroupComponent.propDecorators = {
        layout: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        InputGroupComponent,
                    ],
                    entryComponents: [
                        InputGroupComponent
                    ],
                    imports: [
                        CommonModule
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
        { type: Component, args: [{
                    selector: 'fab-link',
                    template: "<a class=\"fab-link\" [attr.data-size]=\"size\" [attr.href]=\"props.href || href\" [attr.rel]=\"rel\" [attr.target]=\"target\" data-fab-component=\"link\">\n    <ng-container *ngIf=\"props.label || label\">{{props.label || label}}</ng-container>\n    <ng-content></ng-content>\n</a>",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    LinkComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    LinkComponent.propDecorators = {
        color: [{ type: Input }],
        href: [{ type: Input }],
        label: [{ type: Input }],
        props: [{ type: Input }],
        rel: [{ type: Input }],
        size: [{ type: Input }],
        target: [{ type: Input }],
        underline: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [LinkComponent],
                    entryComponents: [LinkComponent],
                    imports: [CommonModule],
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
        _this.clicked = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'fab-list-item',
                    template: "<div class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" *ngIf=\"!button && !href\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</div>\n\n<button class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" (click)=\"handleClick()\" *ngIf=\"!!button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</button>\n\n<a class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" [attr.href]=\"href\" [attr.rel]=\"rel\" [attr.target]=\"target\" *ngIf=\"!!href && !button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ListItemComponent.propDecorators = {
        button: [{ type: Input }],
        color: [{ type: Input }],
        divider: [{ type: Input }],
        href: [{ type: Input }],
        item: [{ type: Input }],
        label: [{ type: Input }],
        padding: [{ type: Input }],
        props: [{ type: Input }],
        rel: [{ type: Input }],
        striped: [{ type: Input }],
        target: [{ type: Input }],
        clicked: [{ type: Output }]
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
        _this.clickItem = new EventEmitter();
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
        this.contentItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { _this.handleItem(item); }));
        this.viewItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { _this.handleItem(item); }));
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
        item.clicked.subscribe((/**
         * @return {?}
         */
        function () {
            _this.clickItem.emit();
        }));
        item.divider = this.divider;
        item.padding = this.padding;
        item.striped = this.striped;
        item.ngOnInit();
    };
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-list',
                    template: "<div class=\"fab-list-wrapper\" data-fab-wrapper=\"list\">\n  <div class=\"fab-list\" data-fab-component=\"list\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
        { type: Component, args: [{
                    selector: 'fab-list-header',
                    template: "<div class=\"fab-list-header\" data-fab-component=\"listHeader\">\n    <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ListHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ListHeaderComponent.propDecorators = {
        color: [{ type: Input }]
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
        { type: NgModule, args: [{
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
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-modal-section',
                    template: "<div class=\"fab-modal-section\" data-fab-component=\"modalSection\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalSectionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ModalSectionComponent.propDecorators = {
        adaptColor: [{ type: Input }],
        color: [{ type: Input }],
        darken: [{ type: Input }],
        divider: [{ type: Input }],
        dividerColor: [{ type: Input }],
        lighten: [{ type: Input }],
        padding: [{ type: Input }],
        parentColor: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'fab-modal-body',
                    template: "<div class=\"fab-modal-body fab-modal-section\" data-fab-component=\"modalBody\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalBodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
        { type: Component, args: [{
                    selector: 'fab-modal-footer',
                    template: "<div class=\"fab-modal-footer fab-modal-section\" data-fab-component=\"modalFooter\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalFooterComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
        _this.clickedClose = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'fab-modal-header',
                    template: "<div class=\"fab-modal-header fab-modal-section\" data-fab-component=\"modalHeader\" *ngIf=\"init\">\n  <div class=\"fab-modal-header__content\">\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button [color]=\"color || parentColor\" (click)=\"closeModal()\"></fab-close-button>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalHeaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ModalHeaderComponent.propDecorators = {
        clickedClose: [{ type: Output }],
        closeButton: [{ type: ViewChild, args: [CloseButtonComponent,] }]
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
        this.close = new EventEmitter();
        this.open = new EventEmitter();
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
            this.modalHeader.clickedClose.subscribe((/**
             * @return {?}
             */
            function () { return _this.closeModal(); }));
            this.modalHeader.parentColor = this.color;
            this.modalHeader.ngAfterViewInit();
        }
        if (this.modalSection) {
            this.modalSection.parentColor = this.color;
            this.modalSection.ngOnInit();
        }
        styles = css(ModalStyles({ framework: 'angular', props: this }));
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
        { type: Component, args: [{
                    selector: 'fab-modal',
                    template: "<div class=\"fab-modal-wrapper\" [attr.data-closing]=\"modalService.modalIsClosing\" [attr.data-open]=\"isOpen\">\n  <div class=\"fab-modal__dialog\">\n    <div class=\"fab-modal\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-modal__backdrop\" (click)=\"closeModal()\"></div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ModalService }
    ]; };
    ModalComponent.propDecorators = {
        modalBody: [{ type: ContentChild, args: [ModalBodyComponent,] }],
        modalFooter: [{ type: ContentChild, args: [ModalFooterComponent,] }],
        modalHeader: [{ type: ContentChild, args: [ModalHeaderComponent,] }],
        modalSection: [{ type: ContentChild, args: [ModalSectionComponent,] }],
        color: [{ type: Input }],
        glow: [{ type: Input }],
        isOpen: [{ type: Input }],
        size: [{ type: Input }],
        close: [{ type: Output }],
        open: [{ type: Output }]
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
        { type: NgModule, args: [{
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
                        CommonModule,
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
                    provide: APP_INITIALIZER,
                    useFactory: (/**
                     * @param {?} service
                     * @return {?}
                     */
                    function (service) { return (/**
                     * @return {?}
                     */
                    function () {
                        service.responsiveness = true;
                    }); }),
                    deps: [FabulaService],
                    multi: true
                }
            ]
        };
    };
    ResponsivenessModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-search-input',
                    template: "<div class=\"fab-search-input\" data-fab-wrapper=\"searchInput\">\n  <fab-input [iconStart]=\"{ name: 'search' }\" [placeholder]=\"placeholder\" [props]=\"inputProps\" data-fab-wrapper=\"searchInput\">\n    <fab-button *ngIf=\"button\" [props]=\"buttonProps\">\n      <fab-inner-icon *ngIf=\"button && button.icon\" [icon]=\"button.icon\" [parentProps]=\"button\"></fab-inner-icon>\n    </fab-button>\n    <ng-content></ng-content>\n  </fab-input>\n</div>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    SearchInputComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    SearchInputComponent.propDecorators = {
        button: [{ type: Input }],
        placeholder: [{ type: Input }],
        buttonEl: [{ type: ViewChild, args: [ButtonComponent,] }],
        inputEl: [{ type: ViewChild, args: [InputComponent,] }]
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
        { type: NgModule, args: [{
                    declarations: [
                        SearchInputComponent,
                    ],
                    entryComponents: [
                        SearchInputComponent
                    ],
                    imports: [
                        ButtonModule,
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-content',
                    template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ContentComponent.propDecorators = {
        active: [{ type: Input }],
        name: [{ type: Input }],
        scope: [{ type: Input }]
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
        _this.selectedSegment = new EventEmitter();
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
        events.onChangeSelector.subscribe((/**
         * @param {?} segment
         * @return {?}
         */
        function (segment) {
            _this.active = segment === _this.name;
        }));
    };
    SelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-selector',
                    template: '<div></div>'
                }] }
    ];
    /** @nocollapse */
    SelectorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    SelectorComponent.propDecorators = {
        active: [{ type: Input }],
        activeColor: [{ type: Input }],
        activeTextColor: [{ type: Input }],
        clear: [{ type: Input }],
        color: [{ type: Input }],
        expand: [{ type: Input }],
        faded: [{ type: Input }],
        href: [{ type: Input }],
        inactiveColor: [{ type: Input }],
        inactiveTextColor: [{ type: Input }],
        invert: [{ type: Input }],
        layout: [{ type: Input }],
        link: [{ type: Input }],
        name: [{ type: Input }],
        outline: [{ type: Input }],
        rel: [{ type: Input }],
        rounded: [{ type: Input }],
        scope: [{ type: Input }],
        stacked: [{ type: Input }],
        target: [{ type: Input }],
        type: [{ type: Input }],
        selectedSegment: [{ type: Output }]
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
        { type: Component, args: [{
                    providers: [{ provide: SelectorComponent, useExisting: SegmentComponent }],
                    selector: 'fab-segment',
                    template: "<button class=\"fab-segment\" (click)=\"handleClick()\" *ngIf=\"!href\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-segment\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
                }] }
    ];
    /** @nocollapse */
    SegmentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
        { type: Component, args: [{
                    template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                    selector: 'fab-segment-content'
                }] }
    ];
    /** @nocollapse */
    SegmentContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
        host.classList.add(css(SegmentContentStyles({ framework: 'angular', props: {} })));
    };
    SegmentsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[segmentIsActive], [segmentName], [segmentScope]'
                },] }
    ];
    /** @nocollapse */
    SegmentsDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SegmentsDirective.propDecorators = {
        segmentIsActive: [{ type: Input }],
        segmentName: [{ type: Input }],
        segmentScope: [{ type: Input }]
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
        { type: NgModule, args: [{
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
                    imports: [CommonModule],
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
        var styles = css(TabStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    providers: [{ provide: SelectorComponent, useExisting: TabComponent }],
                    selector: 'fab-tab',
                    template: "<button class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" (click)=\"handleClick()\" *ngIf=\"!href && !link\" data-fab-component=\"tab\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" *ngIf=\"href || link\" [href]=\"href || link\" [rel]=\"rel\" [target]=\"target\" data-fab-component=\"tab\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    TabComponent.propDecorators = {
        type: [{ type: Input }]
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
        this.tabComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
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
        var styles = css(TabsStyles({
            framework: 'angular', props: __assign({}, this, this.props)
        }));
        host.classList.add(styles);
    };
    TabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tabs',
                    template: "<div class=\"fab-tabs-wrapper\" data-fab-wrapper=\"tabs\">\n  <div class=\"fab-tabs\" data-fab-component=\"tabs\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                    styles: [":host .fab-tabs-wrapper{height:100%}"]
                }] }
    ];
    /** @nocollapse */
    TabsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    TabsComponent.propDecorators = {
        tabComponents: [{ type: ContentChildren, args: [TabComponent,] }],
        alignment: [{ type: Input }],
        props: [{ type: Input }]
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
        { type: Component, args: [{
                    template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                    selector: 'fab-tab-content'
                }] }
    ];
    /** @nocollapse */
    TabContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
        { type: NgModule, args: [{
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
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-tag',
                    template: "<div class=\"fab-tag\" *ngIf=\"!button && !href\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</div>\n\n<button class=\"fab-tag\" *ngIf=\"button\" [attr.data-placement-x]=\"!!placement && placement.x\"\n  [attr.data-placement-y]=\"!!placement && placement.y\" data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tag\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>"
                }] }
    ];
    /** @nocollapse */
    TagComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    TagComponent.propDecorators = {
        button: [{ type: Input }],
        color: [{ type: Input }],
        clear: [{ type: Input }],
        faded: [{ type: Input }],
        glow: [{ type: Input }],
        href: [{ type: Input }],
        invert: [{ type: Input }],
        link: [{ type: Input }],
        outline: [{ type: Input }],
        placement: [{ type: Input }],
        rel: [{ type: Input }],
        rounded: [{ type: Input }],
        size: [{ type: Input }],
        target: [{ type: Input }]
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
        this.tagComponents.forEach((/**
         * @param {?} tag
         * @return {?}
         */
        function (tag) {
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
        { type: Component, args: [{
                    selector: 'fab-tag-group',
                    template: "<div class=\"fab-tag-group-wrapper\">\n  <div class=\"fab-tag-group\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    TagGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    TagGroupComponent.propDecorators = {
        tagComponents: [{ type: ContentChildren, args: [TagComponent,] }],
        color: [{ type: Input }],
        spacing: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        TagComponent,
                        TagGroupComponent
                    ],
                    entryComponents: [
                        TagComponent,
                        TagGroupComponent
                    ],
                    imports: [
                        CommonModule
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
        { type: Component, args: [{
                    selector: 'fab-text',
                    template: "<div class=\"fab-text\" [attr.data-aux]=\"aux\" [attr.data-color]=\"color\" [attr.data-size]=\"size\" data-fab-component=\"text\">\n  <ng-container *ngIf=\"!content\">\n    <ng-content></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"content\">{{content}}</ng-container>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TextComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
        { type: NgModule, args: [{
                    declarations: [
                        TextComponent
                    ],
                    entryComponents: [
                        TextComponent
                    ],
                    imports: [
                        CommonModule,
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
                    provide: APP_INITIALIZER,
                    useFactory: (/**
                     * @param {?} service
                     * @return {?}
                     */
                    function (service) { return (/**
                     * @return {?}
                     */
                    function () { return service.init(); }); }),
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
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [CommonModule],
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
        { type: Component, args: [{
                    selector: 'fab-toast',
                    template: "<div class=\"fab-toast-wrapper\" data-fab-wrapper=\"toast\" [attr.data-hiding]=\"hiding\"\n  [attr.data-stacked]=\"stacked\" [ngStyle]=\"{ 'height': toastHeight }\">\n  <div class=\"fab-toast\" data-fab-component=\"toast\">\n    <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n    <span class=\"fab-toast__message\" *ngIf=\"message\">{{message}}</span>\n    <ng-content></ng-content>\n    <div class=\"fab-toast__button\" *ngIf=\"!!button || !!hideButton\">\n      <fab-button (click)=\"hideToast()\" [props]=\"hideButton\" size=\"sm\" *ngIf=\"!!hideButton && !button\"></fab-button>\n      <fab-button [props]=\"button\" size=\"sm\" *ngIf=\"button\"></fab-button>\n    </div>\n  </div>\n</div>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabulaService },
        { type: ToastService }
    ]; };
    ToastComponent.propDecorators = {
        button: [{ type: Input }],
        clear: [{ type: Input }],
        color: [{ type: Input }],
        faded: [{ type: Input }],
        glow: [{ type: Input }],
        hideButton: [{ type: Input }],
        href: [{ type: Input }],
        hiding: [{ type: Input }],
        icon: [{ type: Input }],
        index: [{ type: Input }],
        message: [{ type: Input }],
        outline: [{ type: Input }],
        rel: [{ type: Input }],
        stack: [{ type: Input }],
        stacked: [{ type: Input }],
        target: [{ type: Input }],
        iconComponent: [{ type: ContentChild, args: [InnerIconComponent,] }],
        toastEl: [{ type: ViewChild, args: ['toast',] }]
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
         */
        function () {
            if (this.toasts) {
                /** @type {?} */
                var toasts = this.toasts.map((/**
                 * @param {?} toast
                 * @param {?} index
                 * @return {?}
                 */
                function (toast, index) {
                    toast.index = index;
                    return toast;
                }));
                return toasts.filter((/**
                 * @param {?} toast
                 * @return {?}
                 */
                function (toast) { return !toast.hidden; }));
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    ToastStackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-toast-stack',
                    template: "<div class=\"fab-toast-stack\" [attr.data-placement-x]=\"placement.x\" [attr.data-placement-y]=\"placement.y\">\n  <fab-toast [hideButton]=\"toast.hideButton\" [color]=\"toast.color\" [hiding]=\"toast.hiding\" [icon]=\"toast.icon\" [index]=\"toast.index\" [message]=\"toast.message\" [stack]=\"toast.stack\" [stacked]=\"true\" *ngFor=\"let toast of visibleToasts\"></fab-toast>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ToastStackComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ToastStackComponent.propDecorators = {
        placement: [{ type: Input }],
        toasts: [{ type: Input }]
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
         */
        function () {
            var _this = this;
            return Object.keys(this.toastService.stacks).map((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                return _this.toastService.stacks[name];
            }));
        },
        enumerable: true,
        configurable: true
    });
    ToastPortalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-toast-portal',
                    template: "<fab-toast-stack *ngFor=\"let stack of stacks\" [placement]=\"stack.placement\" [toasts]=\"stack.toasts\"></fab-toast-stack>"
                }] }
    ];
    /** @nocollapse */
    ToastPortalComponent.ctorParameters = function () { return [
        { type: ToastService }
    ]; };
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
        { type: NgModule, args: [{
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
                        CommonModule,
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
        { type: Component, args: [{
                    selector: 'fab-toggle',
                    template: "<div class=\"fab-toggle-wrapper\" [attr.data-active]=\"active\" [attr.data-disabled]=\"disabled\" data-fab-wrapper=\"toggle\">\n  <div class=\"fab-toggle\" data-fab-component=\"toggle\">\n    <button class=\"fab-toggle__switch\" (click)=\"handleClick()\"></button>\n    <div class=\"fab-toggle__label\" (click)=\"handleClick()\">\n      <ng-container *ngIf=\"!label\">\n        <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n      </ng-container>\n      <ng-container *ngIf=\"label\">\n        {{label}}\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    ToggleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ToggleComponent.propDecorators = {
        active: [{ type: Input }],
        activeColor: [{ type: Input }],
        color: [{ type: Input }],
        disabled: [{ type: Input }],
        inactiveColor: [{ type: Input }],
        label: [{ type: Input }],
        rounded: [{ type: Input }],
        size: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        ToggleComponent
                    ],
                    entryComponents: [
                        ToggleComponent
                    ],
                    imports: [
                        CommonModule
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
        var styles = css(TooltipStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
    };
    TooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tooltip',
                    template: "<div class=\"fab-tooltip\" [attr.data-placement]=\"placement\">\n  <span class=\"fab-tooltip__label\">{{label}}</span>\n</div>"
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    TooltipComponent.propDecorators = {
        color: [{ type: Input }],
        label: [{ type: Input }],
        offset: [{ type: Input }],
        placement: [{ type: Input }]
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
        element = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
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
        target.addEventListener('mouseenter', (/**
         * @return {?}
         */
        function () {
            _this.createTooltip(target);
        }));
        target.addEventListener('mouseleave', (/**
         * @return {?}
         */
        function () {
            _this.destroyTooltip();
        }));
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tooltip],[tooltipColor],[tooltipLabel],[tooltipOffset],[tooltipPlacement]'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: ElementRef },
        { type: Injector },
        { type: ComponentFactoryResolver }
    ]; };
    TooltipDirective.propDecorators = {
        tooltip: [{ type: Input }],
        tooltipColor: [{ type: Input }],
        tooltipLabel: [{ type: Input }],
        tooltipOffset: [{ type: Input }],
        tooltipPlacement: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        TooltipComponent,
                        TooltipDirective
                    ],
                    entryComponents: [
                        TooltipComponent
                    ],
                    imports: [CommonModule],
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
        element.classList.add(css(UtilsStyles({ framework: 'angular', props: this })));
    };
    CommonDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'commonDirective'
                },] }
    ];
    /** @nocollapse */
    CommonDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
        { type: Directive, args: [{
                    selector: '[col],[col-down],[col-up],[col-on],[col-not-on]'
                },] }
    ];
    /** @nocollapse */
    ColumnDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef }
    ]; };
    ColumnDirective.propDecorators = {
        col: [{ type: Input }],
        colDown: [{ type: Input, args: ['col-down',] }],
        colNotOn: [{ type: Input, args: ['col-not-on',] }],
        colOn: [{ type: Input, args: ['col-on',] }],
        colUp: [{ type: Input, args: ['col-up',] }]
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
        host.classList.add(css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: props })));
    };
    FlexDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[basis], [flex], [flow], [grow], [shrink], [wrap]'
                },] }
    ];
    /** @nocollapse */
    FlexDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FlexDirective.propDecorators = {
        basis: [{ type: Input }],
        direction: [{ type: Input }],
        flex: [{ type: Input }],
        flow: [{ type: Input }],
        grow: [{ type: Input }],
        shrink: [{ type: Input }],
        wrap: [{ type: Input }]
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
        element.classList.add(css(UtilsStyles({ framework: 'angular', props: props })));
    };
    FlowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[flow]'
                },] }
    ];
    /** @nocollapse */
    FlowDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FlowDirective.propDecorators = {
        flow: [{ type: Input }]
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
        host.classList.add(css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: props })));
    };
    GrowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[grow]'
                },] }
    ];
    /** @nocollapse */
    GrowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    GrowDirective.propDecorators = {
        grow: [{ type: Input }]
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
        host.classList.add(css(UtilsStyles({ framework: 'angular', props: props })));
    };
    MarginDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[m],[mb],[ml],[mr],[mt],[mx],[my]'
                },] }
    ];
    /** @nocollapse */
    MarginDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MarginDirective.propDecorators = {
        m: [{ type: Input }],
        mb: [{ type: Input }],
        ml: [{ type: Input }],
        mr: [{ type: Input }],
        mt: [{ type: Input }],
        mx: [{ type: Input }],
        my: [{ type: Input }]
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
        { type: Directive, args: [{
                    selector: '[ov],[ovX],[ovY]'
                },] }
    ];
    /** @nocollapse */
    OverflowDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OverflowDirective.propDecorators = {
        ov: [{ type: Input, args: ['ov',] }],
        ovX: [{ type: Input, args: ['ovX',] }],
        ovY: [{ type: Input, args: ['ovY',] }]
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
        host.classList.add(css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: props })));
    };
    PaddingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[p],[pb],[pl],[pr],[pt],[px],[py]'
                },] }
    ];
    /** @nocollapse */
    PaddingDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PaddingDirective.propDecorators = {
        p: [{ type: Input }],
        pb: [{ type: Input }],
        pl: [{ type: Input }],
        pr: [{ type: Input }],
        pt: [{ type: Input }],
        px: [{ type: Input }],
        py: [{ type: Input }]
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
        element.classList.add(css(UtilsStyles({ framework: 'angular', props: props })));
    };
    RowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[row]'
                },] }
    ];
    /** @nocollapse */
    RowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    RowDirective.propDecorators = {
        row: [{ type: Input }]
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
        { type: Directive, args: [{
                    selector: '[hidden],[visible]'
                },] }
    ];
    /** @nocollapse */
    VisibilityDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    VisibilityDirective.propDecorators = {
        hidden: [{ type: Input }],
        visible: [{ type: Input }]
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
                    provide: APP_INITIALIZER,
                    useFactory: (/**
                     * @param {?} service
                     * @return {?}
                     */
                    function (service) { return (/**
                     * @return {?}
                     */
                    function () {
                        service.utils = true;
                    }); }),
                    deps: [FabulaService],
                    multi: true
                }
            ]
        };
    };
    UtilsModule.decorators = [
        { type: NgModule, args: [{
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
                        CommonModule,
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

export { ModalService, ThemeService, ToastService, FabulaModule, AlertModule, AvatarModule, BadgeModule, ButtonModule, ButtonGroupModule, CardModule, CheckboxModule, DividerModule, DropdownModule, GridModule, HeadingModule, HelpersModule, IconsModule, InnerIconModule, InputModule, InputGroupModule, LinkModule, ListModule, ModalModule, ResponsivenessModule, SearchInputModule, SegmentsModule, TabsModule, TagModule, TextModule, ThemeModule, ToastModule, ToggleModule, TooltipModule, UtilsModule, AlertComponent as ɵd, AvatarComponent as ɵh, BadgeComponent as ɵi, ButtonGroupComponent as ɵk, ButtonComponent as ɵj, CardImageComponent as ɵm, CardSectionComponent as ɵn, CardComponent as ɵl, CheckboxComponent as ɵo, CloseButtonComponent as ɵf, ColumnComponent as ɵv, CommonComponent as ɵb, ContainerComponent as ɵw, ContentComponent as ɵbo, DividerComponent as ɵp, DropdownHeaderComponent as ɵs, DropdownItemComponent as ɵt, DropdownMenuComponent as ɵr, DropdownToggleComponent as ɵu, DropdownComponent as ɵq, ElementComponent as ɵz, HeadingComponent as ɵy, IconComponent as ɵg, InnerIconComponent as ɵbb, InputGroupComponent as ɵbd, InputComponent as ɵbc, LinkComponent as ɵbe, ListHeaderComponent as ɵbh, ListItemComponent as ɵbg, ListComponent as ɵbf, ModalBodyComponent as ɵbj, ModalFooterComponent as ɵbl, ModalHeaderComponent as ɵbm, ModalSectionComponent as ɵbk, ModalComponent as ɵbi, RowComponent as ɵx, SearchInputComponent as ɵbn, SegmentContentComponent as ɵbr, SegmentComponent as ɵbp, SegmentsComponent as ɵbs, SelectorComponent as ɵbq, TabContentComponent as ɵbw, TabComponent as ɵbu, TabsComponent as ɵbv, TagGroupComponent as ɵby, TagComponent as ɵbx, TextComponent as ɵbz, ToastPortalComponent as ɵcb, ToastStackComponent as ɵcc, ToastComponent as ɵca, ToggleComponent as ɵcd, TooltipComponent as ɵce, WrapperComponent as ɵba, AlignDirective as ɵcg, BlockDirective as ɵci, ColumnDirective as ɵcj, CommonDirective as ɵch, FlexDirective as ɵck, FlowDirective as ɵcl, GrowDirective as ɵcm, MarginDirective as ɵcn, OverflowDirective as ɵco, PaddingDirective as ɵcp, RowDirective as ɵcq, SegmentsDirective as ɵbt, SizeDirective as ɵcr, TooltipDirective as ɵcf, VisibilityDirective as ɵcs, CloseButtonModule as ɵe, FabulaService as ɵc };

//# sourceMappingURL=fabula-angular.js.map