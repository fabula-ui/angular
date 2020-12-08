import reset from '@fabula/core/styles/common/reset';
import setBaseTheme from '@fabula/core/styles/methods/misc/setBaseTheme';
import { __rest } from 'tslib';
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
import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef, NgModule, Component, Output, EventEmitter, ContentChildren, ChangeDetectorRef, ViewChildren, ContentChild, ViewChild, HostBinding, APP_INITIALIZER, Inject, defineInjectable, inject, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalService {
    /**
     * @param {?} appRef
     * @param {?} injector
     * @param {?} resolver
     */
    constructor(appRef, injector, resolver) {
        this.appRef = appRef;
        this.injector = injector;
        this.resolver = resolver;
        this.modalIsClosing = false;
        this.modalIsOpen = false;
    }
    /**
     * @return {?}
     */
    createPortal() {
        /** @type {?} */
        const portal = document.createElement('div');
        portal.classList.add('fab-modal-portal');
        document.body.append(portal);
    }
    /**
     * @return {?}
     */
    closeModal() {
        /** @type {?} */
        let duration;
        /** @type {?} */
        let modalEl;
        /** @type {?} */
        let transitionDuration;
        modalEl = document.querySelector('.fab-modal');
        duration = window.getComputedStyle(modalEl).transitionDuration;
        transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
        this.modalIsClosing = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
        }), transitionDuration + 1);
    }
    /**
     * @param {?} component
     * @param {?=} params
     * @return {?}
     */
    openModal(component, params) {
        /** @type {?} */
        let element;
        /** @type {?} */
        let portal;
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
        paramKey => {
            this.componentRef.instance[paramKey] = params[paramKey];
        }));
        element = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
        // portal.appendChild(element);
        this.modalIsClosing = false;
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: ApplicationRef },
    { type: Injector },
    { type: ComponentFactoryResolver }
];
/** @nocollapse */ ModalService.ngInjectableDef = defineInjectable({ factory: function ModalService_Factory() { return new ModalService(inject(ApplicationRef), inject(INJECTOR), inject(ComponentFactoryResolver)); }, token: ModalService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/theme.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThemeService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
    }
    /**
     * @return {?}
     */
    init() {
        document.body.classList.add(css(reset));
        setBaseTheme(this.options);
    }
}
ThemeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ThemeService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['UserOptions',] }] }
];
/** @nocollapse */ ThemeService.ngInjectableDef = defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(inject("UserOptions")); }, token: ThemeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toast.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastService {
    constructor() {
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
    createStack(params) {
        const { name, placement } = params;
        this.stacks[name] = {
            placement,
            toasts: []
        };
    }
    /**
     * @param {?} newStacks
     * @return {?}
     */
    createStacks(newStacks) {
        for (let i = 0; i < newStacks.length; i++) {
            /** @type {?} */
            const newStack = newStacks[i];
            const { name, placement } = newStack;
            this.stacks[name] = {
                placement,
                toasts: []
            };
        }
    }
    /**
     * @param {?} stackName
     * @return {?}
     */
    handleToast(stackName) {
        /** @type {?} */
        const stack = this.stacks[stackName];
        /** @type {?} */
        const index = stack.toasts.length - 1;
        /** @type {?} */
        const toast = stack.toasts[index];
        /** @type {?} */
        const delay = toast.hideDelay || stack.hideDelay;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.hideToast({ index, stack });
        }), delay);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    hideToast(params) {
        const { index, stack } = params;
        /** @type {?} */
        let duration;
        /** @type {?} */
        let toastEl;
        if (!this.transitionDuration) {
            toastEl = document.querySelector('.fab-toast-wrapper');
            duration = window.getComputedStyle(toastEl).transitionDuration;
            this.transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
        }
        stack.toasts[index].hiding = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            stack.toasts[index].hidden = true;
        }), this.transitionDuration + 1);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    showToast(params) {
        const { stack } = params, rest = __rest(params, ["stack"]);
        if (this.stacks[stack]) {
            this.stacks[stack].toasts.push(Object.assign({ stack }, rest));
        }
        else {
            this.stacks.default.toasts.push(Object.assign({ stack }, rest));
        }
        this.handleToast(stack);
    }
}
ToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ToastService.ctorParameters = () => [];
/** @nocollapse */ ToastService.ngInjectableDef = defineInjectable({ factory: function ToastService_Factory() { return new ToastService(); }, token: ToastService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/fabula.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FabulaService {
    constructor() {
        this.responsiveness = false;
        this.utils = false;
    }
}
FabulaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FabulaService.ctorParameters = () => [];
FabulaService.propDecorators = {
    responsiveness: [{ type: Input }],
    utils: [{ type: Input }]
};
/** @nocollapse */ FabulaService.ngInjectableDef = defineInjectable({ factory: function FabulaService_Factory() { return new FabulaService(); }, token: FabulaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/common-component/common-component.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
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
    ngOnChanges() {
        if (this.callbacks && typeof this.callbacks === 'function') {
            this.callbacks();
        }
        if (this.styles) {
            this.refreshStyles();
        }
    }
    /**
     * @param {?} stylesFn
     * @return {?}
     */
    applyStyles(stylesFn) {
        /** @type {?} */
        const styles = css(stylesFn({
            framework: 'angular', props: Object.assign({}, this, this.props, this.additionalProps)
        }));
        /** @type {?} */
        let responsiveStyles;
        this.host = this.elRef.nativeElement;
        this.host.classList.add(styles);
        if (this.fabulaService.responsiveness) {
            responsiveStyles = css(ResponsiveStyles({
                framework: 'angular',
                props: Object.assign({}, this, this.props, this.additionalProps),
                styles: stylesFn,
                utils: this.fabulaService.utils
            }));
            this.host.classList.add(responsiveStyles);
        }
    }
    /**
     * @return {?}
     */
    initStyles() {
        if (this.additionalStyles) {
            this.applyStyles(this.additionalStyles);
        }
        if (this.styles) {
            this.applyStyles(this.styles);
        }
    }
    /**
     * @return {?}
     */
    refreshStyles() {
        this.host.classList = '';
        this.initStyles();
    }
}
CommonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-component',
                template: ''
            }] }
];
/** @nocollapse */
CommonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
CommonComponent.propDecorators = {
    props: [{ type: Input }],
    down: [{ type: Input }],
    on: [{ type: Input }],
    up: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/fabula.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class FabulaModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
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
                    (service) => (/**
                     * @return {?}
                     */
                    () => service.init())),
                    deps: [ThemeService],
                    multi: true
                },
                {
                    provide: 'UserOptions',
                    useValue: options
                }
            ]
        };
    }
}
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/alert/alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.border = true;
        this.clear = false;
        this.closeButton = false;
        this.faded = false;
        this.glow = false;
        this.outline = false;
        this.visible = true;
        this.close = new EventEmitter();
        this.hasProperty = {
            visible: true
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.host = this.elRef.nativeElement;
        this.props = this;
        this.styles = AlertStyles;
        this.initStyles();
        if (this.type) {
            this.handleType();
        }
    }
    // Methods
    /**
     * @return {?}
     */
    closeAlert() {
        /** @type {?} */
        const transitionDuration = getTransitionDuration(this.host.querySelector('.fab-alert'));
        this.closing = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.close.emit();
            this.closing = false;
            this.visible = false;
        }), transitionDuration + 1);
    }
    /**
     * @return {?}
     */
    handleType() {
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
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-alert',
                template: "<div class=\"fab-alert\" [attr.data-closing]=\"closing\" [attr.data-title]=\"!!title\" data-fab-component=\"alert\"\n  *ngIf=\"visible\">\n  <fab-icon [props]=\"icon\" *ngIf=\"icon || type\"></fab-icon>\n  <div class=\"fab-alert__stage\">\n    <div class=\"fab-alert__title\" *ngIf=\"title\">{{title}}</div>\n    <div class=\"fab-alert__text\" *ngIf=\"text\">{{text}}</div>\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button (click)=\"closeAlert()\" [parentColor]=\"color\" size=\"sm\" *ngIf=\"closeButton\">\n  </fab-close-button>\n</div>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/icon/icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.size = 'md';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = IconStyles;
        this.initStyles();
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-icon',
                template: "<i class=\"fab-icon\"></i>\n",
                styles: [":host{color:inherit;display:inline-flex}:host .fab-icon{align-items:center}"]
            }] }
];
/** @nocollapse */
IconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
IconComponent.propDecorators = {
    color: [{ type: Input }],
    name: [{ type: Input }],
    size: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/icons.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconsModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/close-button/close-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloseButtonComponent extends CommonComponent {
    /**
     * @param {?} cdRef
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(cdRef, elRef, fabulaService) {
        super(elRef, fabulaService);
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.fabulaService = fabulaService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Set and apply styles
        this.styles = CloseButtonStyles;
        this.initStyles();
        // Detect changes
        this.cdRef.detectChanges();
    }
}
CloseButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-close-button',
                template: "<button class=\"fab-close-button\">\n    <fab-icon name=\"x\"></fab-icon>\n</button>"
            }] }
];
/** @nocollapse */
CloseButtonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FabulaService }
];
CloseButtonComponent.propDecorators = {
    color: [{ type: Input }],
    parentColor: [{ type: Input }],
    size: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/close-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloseButtonModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/alert.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/avatar/avatar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AvatarComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.color = '';
        this.darken = false;
        this.faded = false;
        this.icon = {
            name: 'image'
        };
        this.lighten = false;
        this.rounded = false;
        this.showInitials = '';
        this.size = 'md';
        this.src = '';
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = AvatarStyles;
        this.initStyles();
    }
    // Getters
    /**
     * @return {?}
     */
    get initials() {
        return getInitials(this.showInitials);
    }
}
AvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-avatar',
                template: "<div class=\"fab-avatar-wrapper\" data-fab-wrapper=\"avatar\" [attr.data-rounded]=\"rounded\">\n  <div class=\"fab-avatar\" [attr.data-color]=\"color\" [attr.data-rounded]=\"rounded\" [attr.data-size]=\"size\">\n    <fab-icon *ngIf=\"!showInitials && icon\" [props]=\"icon\"></fab-icon>\n    <span class=\"fab-avatar__initials\" *ngIf=\"showInitials\">{{initials}}</span>\n    <div class=\"fab-avatar__image\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\" *ngIf=\"src\"></div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
AvatarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/avatar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AvatarModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/badge/badge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BadgeComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.circle = false;
        this.clear = false;
        this.darken = false;
        this.faded = false;
        this.glow = false;
        this.invert = false;
        this.label = '';
        this.lighten = false;
        this.outline = false;
        this.placement = '';
        this.placementX = '';
        this.placementY = '';
        this.rounded = false;
        this.size = 'md';
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = BadgeStyles;
        this.initStyles();
    }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-badge',
                template: "<div class=\"fab-badge-wrapper\" [attr.data-has-placement]=\"!!placement\" data-fab-wrapper=\"badge\">\n  <div class=\"fab-badge\" data-fab-component=\"badge\">\n    <span *ngIf=\"label\">{{label}}</span>\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
BadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/badge.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BadgeModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.border = false;
        this.compact = false;
        this.glow = false;
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.styles = ButtonStyles;
        this.initStyles();
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-button',
                template: "<button class=\"fab-button\" [attr.data-border]=\"border || props.border\" [attr.data-color]=\"color || props.color\"\n  [attr.data-circle]=\"!!circle || !!props.circle\" [attr.data-expand]=\"expand || props.expand\"\n  [attr.data-outline]=\"outline || props.outline\" [attr.data-rounded]=\"rounded || props.rounded\"\n  [disabled]=\"disabled || props.disabled\" data-fab-component=\"button\" *ngIf=\"!href && !props.href\">\n  <ng-container *ngIf=\"!label && !props.label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"label || props.label\">{{label || props.label}}</ng-container>\n</button>\n\n<a class=\"fab-button\" [attr.data-border]=\"border || props.border\" [attr.data-color]=\"color || props.color\"\n  [attr.data-circle]=\"!!circle || !!props.circle\" [attr.data-expand]=\"expand || props.expand\"\n  [attr.data-outline]=\"outline || props.outline\" [attr.data-rounded]=\"rounded || props.rounded\"\n  [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  data-fab-component=\"button\" *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"!label && !props.label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"label || props.label\">{{label || props.label}}</ng-container>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button-group/button-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonGroupComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.divider = true;
        this.dividerColor = '';
        this.layout = 'h';
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ButtonGroupStyles;
        this.initStyles();
    }
}
ButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-button-group',
                template: "<div class=\"fab-button-group\" data-fab-component=\"buttonGroup\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{display:inline-block}:host .fab-button-group-wrapper{display:block}"]
            }] }
];
/** @nocollapse */
ButtonGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ButtonGroupComponent.propDecorators = {
    color: [{ type: Input }],
    divider: [{ type: Input }],
    dividerColor: [{ type: Input }],
    layout: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/button-group.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonGroupModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-image/card-image.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardImageComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.adaptColor = false;
        this.cover = false;
        this.darken = false;
        this.faded = false;
        this.icon = {
            name: 'image'
        };
        this.lighten = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = CardImageStyles;
        this.initStyles();
    }
}
CardImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-card-image',
                template: "<div class=\"fab-card-image\" [attr.data-layout]=\"layout\"\n  data-fab-component=\"cardImage\">\n  <fab-icon [props]=\"icon\"></fab-icon>\n  <img [src]=\"src\" *ngIf=\"src\">\n  <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
CardImageComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-section/card-section.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardSectionComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.darken = false;
        this.expand = false;
        this.faded = false;
        this.layout = 'vertical';
        this.lighten = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = CardSectionStyles;
        this.initStyles();
    }
}
CardSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-card-section',
                template: "<div class=\"fab-card-section\" [attr.data-layout]=\"layout\" data-fab-component=\"cardSection\">\n  <ng-content></ng-content>\n</div>\n\n"
            }] }
];
/** @nocollapse */
CardSectionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card/card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent extends CommonComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.checked = false;
        this.disabled = false;
        this.indeterminate = false;
        this.readOnly = false;
        this.rounded = false;
        this.size = 'md';
        this.change = new EventEmitter();
        this.check = new EventEmitter();
        this.uncheck = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = CheckboxStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @param {?=} e
     * @return {?}
     */
    handleChange(e) {
        if (!this.disabled && !this.readOnly) {
            this.checked = !!e ? e.target.checked : !this.checked;
            this.indeterminate = !!e ? e.target.indeterminate : false;
        }
        this.handleEvents();
    }
    /**
     * @return {?}
     */
    handleEvents() {
        this.change.emit();
        if (this.checked) {
            this.check.emit();
        }
        if (!this.checked) {
            this.uncheck.emit();
        }
    }
    /**
     * @return {?}
     */
    get currentIcon() {
        return this.indeterminate ? { name: 'minus' } : { name: 'check' };
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-checkbox',
                template: "<div class=\"fab-checkbox-wrapper\" data-fab-wrapper=\"checkbox\">\n  <div class=\"fab-checkbox\" [attr.data-checked]=\"checked\" [attr.data-disabled]=\"disabled\"\n    [attr.data-indeterminate]=\"indeterminate\" [attr.data-read-only]=\"readOnly\" data-fab-component=\"checkbox\">\n    <div class=\"fab-checkbox__square\" (click)=\"handleChange()\">\n      <fab-icon [props]=\"currentIcon\"></fab-icon>\n    </div>\n    <label class=\"fab-checkbox__label\">\n      <input [checked]=\"checked\" [disabled]=\"disabled\" [indeterminate]=\"indeterminate\" (change)=\"handleChange($event)\"\n        type=\"checkbox\">\n      <ng-container *ngIf=\"label\">{{label}}</ng-container>\n      <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n      </ng-container>\n    </label>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/checkbox.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/divider/divider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DividerComponent extends CommonComponent {
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
    ngOnInit() {
        this.styles = DividerStyles;
        this.initStyles();
    }
}
DividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-divider',
                template: "<div class=\"fab-divider\"></div>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
DividerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
DividerComponent.propDecorators = {
    label: [{ type: Input }],
    textColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/divider.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DividerModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-header/dropdown-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownHeaderComponent extends CommonComponent {
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
        this.styles = DropdownHeaderStyles;
        this.initStyles();
    }
}
DropdownHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown-header',
                template: "<div class=\"fab-dropdown-header\" data-fab-component=\"dropdownHeader\">\n  <ng-container *ngIf=\"label\">{{label}}</ng-container>\n  <ng-container *ngIf=\"!label\">\n    <ng-content></ng-content>\n  </ng-container>\n</div>"
            }] }
];
/** @nocollapse */
DropdownHeaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
DropdownHeaderComponent.propDecorators = {
    color: [{ type: Input }],
    label: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-item/dropdown-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownItemComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.button = false;
        this.clickToClose = false;
        this.invert = false;
        this.props = { button: false };
        this.target = '_blank';
        this.clicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.props && this.props.clickToClose || this.clickToClose) {
            this.button = true;
            this.props.button = true;
        }
        this.styles = DropdownItemStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @return {?}
     */
    handleClick() {
        this.clicked.emit();
    }
}
DropdownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown-item',
                template: "<a class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</a>\n\n<button class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" (click)=\"handleClick()\"\n  *ngIf=\"(button || props.button) && !href && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</button>\n\n<div class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" *ngIf=\"!button && !href && !props.button && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
DropdownItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-menu/dropdown-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownMenuComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.clickToClose = false;
        this.padding = true;
        this.clickItem = new EventEmitter();
        this.closed = new EventEmitter();
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.contentHeader.forEach((/**
         * @param {?} header
         * @return {?}
         */
        (header) => { this.handleDropdownHeader(header); }));
        this.contentItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => { this.handleDropdownItem(item); }));
        this.divider.forEach((/**
         * @param {?} divider
         * @return {?}
         */
        (divider) => { this.handleDivider(divider); }));
        this.viewHeader.forEach((/**
         * @param {?} header
         * @return {?}
         */
        (header) => { this.handleDropdownHeader(header); }));
        this.viewItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => { this.handleDropdownItem(item); }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = DropdownMenuStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @param {?} divider
     * @return {?}
     */
    handleDivider(divider) {
        if (this.color) {
            divider.parentColor = this.color;
        }
        divider.refreshStyles();
    }
    /**
     * @param {?} header
     * @return {?}
     */
    handleDropdownHeader(header) {
        if (this.color) {
            header.parentColor = this.color;
        }
        header.ngAfterViewInit();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    handleDropdownItem(item) {
        item.clicked.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.clickToClose || item.clickToClose || item.props.clickToClose) {
                this.closed.emit();
            }
            this.clickItem.emit();
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
    }
    // Listeners
    /**
     * @param {?} events
     * @return {?}
     */
    listen(events) {
        events.toggle.subscribe((/**
         * @param {?} isOpen
         * @return {?}
         */
        isOpen => {
            this.isOpen = isOpen;
        }));
    }
}
DropdownMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown-menu',
                template: "<div class=\"fab-dropdown-menu\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\"\n  data-fab-component=\"dropdownMenu\">\n  <ng-container *ngIf=\"items\">\n    <fab-dropdown-item *ngFor=\"let item of items\" [props]=\"item\"></fab-dropdown-item>\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n\n  <ng-container *ngIf=\"!items\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
DropdownMenuComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-toggle/dropdown-toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownToggleComponent extends ButtonComponent {
    /**
     * @param {?} cdRef
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(cdRef, elRef, fabulaService) {
        super(elRef, fabulaService);
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.arrow = true;
        this.isOpen = false;
        this.toggle = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.props = Object.assign({}, this);
        this.styles = DropdownToggleStyles;
        this.initStyles();
    }
    /**
     * @return {?}
     */
    handleClick() {
        this.toggle.emit(true);
    }
    /**
     * @return {?}
     */
    get arrowIsOnlyChild() {
        if (this.labelEl && this.labelEl.nativeElement && this.labelEl.nativeElement.childNodes) {
            return !this.labelEl.nativeElement.childNodes.length;
        }
        else {
            return false;
        }
    }
}
DropdownToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown-toggle',
                template: "<div class=\"fab-dropdown-toggle\" (click)=\"handleClick()\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\">\n  <fab-button [props]=\"props\">\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"!label\" #label>\n      <ng-content></ng-content>\n    </span>\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"label\">{{ label }}</span>\n    <span class=\"fab-dropdown-toggle__chevron\" *ngIf=\"arrow\" [attr.data-only-child]=\"arrowIsOnlyChild\">\n      <fab-icon name=\"chevron-down\"></fab-icon>\n    </span>\n  </fab-button>\n</div>"
            }] }
];
/** @nocollapse */
DropdownToggleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FabulaService }
];
DropdownToggleComponent.propDecorators = {
    arrow: [{ type: Input }],
    direction: [{ type: Input }],
    icon: [{ type: Input }],
    label: [{ type: Input }],
    isOpen: [{ type: Input }],
    toggle: [{ type: Output }],
    labelEl: [{ type: ViewChild, args: ['label',] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown/dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.alignment = 'left';
        this.direction = 'down';
        this.expand = false;
        this.isOpen = false;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.toggle = new EventEmitter();
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.handleChildren();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = DropdownStyles;
        this.initStyles();
        this.callbacks = (/**
         * @return {?}
         */
        () => { this.handleChildren(); });
        // Event Listener
        document.addEventListener('click', (/**
         * @param {?} e
         * @return {?}
         */
        e => this.handleClick(e)));
    }
    // Methods
    /**
     * @return {?}
     */
    handleChildren() {
        if (this.dropdownMenu) {
            this.dropdownMenu.alignment = this.alignment;
            this.dropdownMenu.direction = this.direction;
            this.dropdownMenu.listen({ toggle: this.toggle });
            this.dropdownMenu.closed.subscribe((/**
             * @return {?}
             */
            () => this.handleToggle()));
            this.dropdownMenu.ngOnInit();
        }
        if (this.dropdownToggle) {
            this.dropdownToggle.direction = this.direction;
            this.dropdownToggle.toggle.subscribe((/**
             * @return {?}
             */
            () => this.handleToggle()));
            if (this.expand) {
                this.dropdownToggle.expand = true;
            }
            this.dropdownToggle.ngOnInit();
        }
        this.refreshStyles();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleClick(e) {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        if (!host.contains(e.target) && this.isOpen) {
            this.handleToggle();
        }
    }
    /**
     * @return {?}
     */
    handleToggle() {
        this.isOpen = !this.isOpen;
        this.dropdownToggle.isOpen = this.isOpen;
        this.toggle.emit(this.isOpen);
        if (!this.isOpen) {
            this.close.emit();
        }
        if (this.isOpen) {
            this.open.emit();
        }
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown',
                template: "<div class=\"fab-dropdown\" [attr.data-open]=\"isOpen\" data-fab-component=\"dropdown\">\n  <ng-content></ng-content>\n</div>",
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/dropdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/column/column.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnComponent extends CommonComponent {
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
    ngOnInit() {
        this.styles = ColumnStyles;
        this.initStyles();
    }
}
ColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-column, fab-col',
                template: "<div class=\"fab-column\" [attr.data-col]=\"col\">\n  <ng-content></ng-content>\n</div>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
ColumnComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ColumnComponent.propDecorators = {
    col: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/container/container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContainerComponent extends CommonComponent {
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
    ngOnInit() {
        this.styles = ContainerStyles;
        this.initStyles();
    }
}
ContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-container',
                template: "<div class=\"fab-container\" data-fab-component=\"container\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/row/row.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RowComponent extends CommonComponent {
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
    ngOnInit() {
        this.styles = RowStyles;
        this.initStyles();
    }
}
RowComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-row',
                template: "<div class=\"fab-row\" data-fab-component=\"row\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
RowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/grid.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/heading/heading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeadingComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.color = '';
        this.level = 1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = HeadingStyles;
        this.initStyles();
    }
}
HeadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-heading',
                template: "<h1 class=\"fab-heading\" *ngIf=\"level == 1\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h1>\n<h2 class=\"fab-heading\" *ngIf=\"level == 2\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h2>\n<h3 class=\"fab-heading\" *ngIf=\"level == 3\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h3>\n<h4 class=\"fab-heading\" *ngIf=\"level == 4\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h4>\n<h5 class=\"fab-heading\" *ngIf=\"level == 5\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h5>\n<h6 class=\"fab-heading\" *ngIf=\"level == 6\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h6>\n\n<ng-template #content><ng-content></ng-content></ng-template>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
HeadingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
HeadingComponent.propDecorators = {
    color: [{ type: Input }],
    level: [{ type: Input }],
    weight: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/heading.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeadingModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/element/element.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ElementComponent extends CommonComponent {
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
    ngOnInit() {
        this.styles = ElementStyles;
        this.initStyles();
    }
}
ElementComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-element',
                template: "<span class=\"fab-element\"><ng-content></ng-content></span>",
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
ElementComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/wrapper/wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WrapperComponent extends CommonComponent {
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
    ngOnInit() {
        this.styles = WrapperStyles;
        this.initStyles();
    }
}
WrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-wrapper',
                template: "<div class=\"fab-wrapper\" data-fab-component=\"wrapper\">\n    <ng-content></ng-content>\n</div>",
                styles: [":host{display:block}:host .fab-wrapper{height:100%;width:100%}"]
            }] }
];
/** @nocollapse */
WrapperComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
WrapperComponent.propDecorators = {
    bgColor: [{ type: Input }],
    color: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/helpers.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HelpersModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/inner-icon/inner-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InnerIconComponent extends CommonComponent {
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
        this.additionalProps = {
            icon: this.icon,
            parentProps: this.parentProps
        };
        this.styles = InnerIconStyles;
        this.initStyles();
    }
}
InnerIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-inner-icon',
                template: "<span class=\"fab-inner-icon\"></span>"
            }] }
];
/** @nocollapse */
InnerIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
InnerIconComponent.propDecorators = {
    color: [{ type: Input }],
    icon: [{ type: Input }],
    parentProps: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/inner-icon.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InnerIconModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/input/input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.focused = false;
        this.disabled = false;
        this.expand = false;
        this.glow = false;
        this.passwordToggle = false;
        this.placeholder = '';
        this.rounded = false;
        this.size = 'md';
        this.textarea = false;
        this.type = 'text';
        this.hasFocus = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = InputStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @param {?} hasFocus
     * @return {?}
     */
    handleFocus(hasFocus) {
        this.focused = hasFocus;
        this.hasFocus = hasFocus;
    }
    /**
     * @param {?} subject
     * @return {?}
     */
    isObject(subject) {
        return typeof subject === 'object';
    }
    /**
     * @return {?}
     */
    toggleType() {
        this.type = this.type === 'text' ? 'password' : 'text';
    }
    /**
     * @return {?}
     */
    get toggleIcon() {
        return this.type === 'text' ? 'eye-off' : 'eye';
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-input',
                template: "<div class=\"fab-input-wrapper\" [attr.data-focus]=\"hasFocus\" data-fab-wrapper=\"input\">\n  <div class=\"fab-input\" [attr.data-disabled]=\"disabled\" [attr.data-focus]=\"hasFocus\" [attr.data-textarea]=\"!!textarea\"\n    [attr.data-variant]=\"variant\" data-fab-component=\"input\">\n    <div class=\"fab-input__icon\" data-placement=\"start\" *ngIf=\"icon || iconStart\">\n      <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n      <fab-icon [props]=\"iconStart\" *ngIf=\"iconStart\"></fab-icon>\n    </div>\n\n    <input class=\"fab-input__field\" [disabled]=\"disabled\" (blur)=\"handleFocus(false)\" (focus)=\"handleFocus(true)\"\n      [attr.placeholder]=\"placeholder\" [attr.type]=\"type\" *ngIf=\"!textarea\">\n\n    <textarea class=\"fab-input__field\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\" [attr.type]=\"type\"\n      (blur)=\"handleFocus(false)\" (focus)=\"handleFocus(true)\" *ngIf=\"textarea\"></textarea>\n\n    <div class=\"fab-input__icon\" data-placement=\"end\" *ngIf=\"iconEnd && !passwordToggle\">\n      <fab-icon [props]=\"iconEnd\"></fab-icon>\n    </div>\n\n    <button class=\"fab-input__password-toggle\" (click)=\"toggleType()\" [attr.data-toggled]=\"type === 'text'\"\n      *ngIf=\"passwordToggle\">\n      <fab-icon [name]=\"toggleIcon\"></fab-icon>\n    </button>\n\n    <div class=\"fab-input__elements\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-input__message\" *ngIf=\"message && message.text\">\n    <span>{{message.text}}</span>\n  </div>\n</div>",
                styles: [":host{display:block}:host[data-focus=true]{z-index:1}"]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/input-group/input-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputGroupComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.layout = 'horizontal';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = InputGroupStyles;
        this.initStyles();
    }
}
InputGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-input-group',
                template: "<div class=\"fab-input-group-wrapper\" data-fab-wrapper=\"inputGroup\">\n  <div class=\"fab-input-group\" data-fab-component=\"inputGroup\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
InputGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
InputGroupComponent.propDecorators = {
    layout: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/input-group.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputGroupModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/link/link.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.target = '_blank';
        this.underline = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = LinkStyles;
        this.initStyles();
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-link',
                template: "<a class=\"fab-link\" [attr.data-size]=\"size\" [attr.href]=\"props.href || href\" [attr.rel]=\"rel\" [attr.target]=\"target\" data-fab-component=\"link\">\n    <ng-container *ngIf=\"props.label || label\">{{props.label || label}}</ng-container>\n    <ng-content></ng-content>\n</a>",
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
LinkComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/link.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkModule {
}
LinkModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LinkComponent],
                entryComponents: [LinkComponent],
                imports: [CommonModule],
                exports: [LinkComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/list-item/list-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListItemComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.button = false;
        this.item = { button: false };
        this.striped = false;
        this.target = '_blank';
        this.clicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.additionalProps = Object.assign({}, this.item);
        this.styles = ListItemStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @return {?}
     */
    handleClick() {
        this.clicked.emit();
    }
}
ListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-list-item',
                template: "<div class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" *ngIf=\"!button && !href\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</div>\n\n<button class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" (click)=\"handleClick()\" *ngIf=\"!!button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</button>\n\n<a class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" [attr.href]=\"href\" [attr.rel]=\"rel\" [attr.target]=\"target\" *ngIf=\"!!href && !button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [""]
            }] }
];
/** @nocollapse */
ListItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/list/list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.divider = true;
        this.padding = false;
        this.striped = false;
        this.clickItem = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.contentItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => { this.handleItem(item); }));
        this.viewItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => { this.handleItem(item); }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ListStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @param {?} item
     * @return {?}
     */
    handleItem(item) {
        if (this.color && !item.color) {
            item.color = this.color;
        }
        item.clicked.subscribe((/**
         * @return {?}
         */
        () => {
            this.clickItem.emit();
        }));
        item.divider = this.divider;
        item.padding = this.padding;
        item.striped = this.striped;
        item.ngOnInit();
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-list',
                template: "<div class=\"fab-list-wrapper\" data-fab-wrapper=\"list\">\n  <div class=\"fab-list\" data-fab-component=\"list\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/list-header/list-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListHeaderComponent extends CommonComponent {
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
    ngOnInit() {
        this.styles = ListHeaderStyles;
        this.initStyles();
    }
}
ListHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-list-header',
                template: "<div class=\"fab-list-header\" data-fab-component=\"listHeader\">\n    <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
ListHeaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ListHeaderComponent.propDecorators = {
    color: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal-section/modal-section.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalSectionComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.padding = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ModalSectionStyles;
        this.initStyles();
    }
}
ModalSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal-section',
                template: "<div class=\"fab-modal-section\" data-fab-component=\"modalSection\">\n  <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
ModalSectionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal-body/modal-body.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalBodyComponent extends ModalSectionComponent {
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
    ngOnInit() {
        this.additionalStyles = ModalBodyStyles;
        super.ngOnInit();
    }
}
ModalBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal-body',
                template: "<div class=\"fab-modal-body fab-modal-section\" data-fab-component=\"modalBody\">\n  <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
ModalBodyComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal-footer/modal-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalFooterComponent extends ModalSectionComponent {
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
    ngOnInit() {
        super.ngOnInit();
    }
}
ModalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal-footer',
                template: "<div class=\"fab-modal-footer fab-modal-section\" data-fab-component=\"modalFooter\">\n  <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
ModalFooterComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal-header/modal-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalHeaderComponent extends ModalSectionComponent {
    /**
     * @param {?} cdRef
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(cdRef, elRef, fabulaService) {
        super(elRef, fabulaService);
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.clickedClose = new EventEmitter();
        this.init = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Init modal section
        super.ngOnInit();
        // Set and apply styles
        this.styles = ModalHeaderStyles;
        this.initStyles();
        this.cdRef.detectChanges();
        this.init = true;
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.clickedClose.emit(true);
    }
}
ModalHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal-header',
                template: "<div class=\"fab-modal-header fab-modal-section\" data-fab-component=\"modalHeader\" *ngIf=\"init\">\n  <div class=\"fab-modal-header__content\">\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button [color]=\"color || parentColor\" (click)=\"closeModal()\"></fab-close-button>\n</div>"
            }] }
];
/** @nocollapse */
ModalHeaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FabulaService }
];
ModalHeaderComponent.propDecorators = {
    clickedClose: [{ type: Output }],
    closeButton: [{ type: ViewChild, args: [CloseButtonComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalComponent {
    /**
     * @param {?} elRef
     * @param {?} modalService
     */
    constructor(elRef, modalService) {
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
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        let styles;
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
            () => this.closeModal()));
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
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.modalService.closeModal();
        this.close.emit();
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal',
                template: "<div class=\"fab-modal-wrapper\" [attr.data-closing]=\"modalService.modalIsClosing\" [attr.data-open]=\"isOpen\">\n  <div class=\"fab-modal__dialog\">\n    <div class=\"fab-modal\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-modal__backdrop\" (click)=\"closeModal()\"></div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ModalService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/modal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/responsiveness.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class ResponsivenessModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
                    (service) => (/**
                     * @return {?}
                     */
                    () => {
                        service.responsiveness = true;
                    })),
                    deps: [FabulaService],
                    multi: true
                }
            ]
        };
    }
}
ResponsivenessModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/search-input/search-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchInputComponent extends InputComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.button = null;
        this.placeholder = 'Search...';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.button) {
            this.handleButton();
        }
        this.additionalStyles = SearchInputStyles;
        this.inputProps = this;
        this.initStyles();
    }
    // Methods
    /**
     * @return {?}
     */
    handleButton() {
        this.buttonProps = Object.assign({}, this.button);
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
            for (let key in this.button) {
                this.buttonProps[key] = this.button[key];
            }
        }
        if (this.buttonEl) {
            this.buttonEl.ngAfterViewInit();
        }
    }
}
SearchInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-search-input',
                template: "<div class=\"fab-search-input\" data-fab-wrapper=\"searchInput\">\n  <fab-input [iconStart]=\"{ name: 'search' }\" [placeholder]=\"placeholder\" [props]=\"inputProps\" data-fab-wrapper=\"searchInput\">\n    <fab-button *ngIf=\"button\" [props]=\"buttonProps\">\n      <fab-inner-icon *ngIf=\"button && button.icon\" [icon]=\"button.icon\" [parentProps]=\"button\"></fab-inner-icon>\n    </fab-button>\n    <ng-content></ng-content>\n  </fab-input>\n</div>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
SearchInputComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
SearchInputComponent.propDecorators = {
    button: [{ type: Input }],
    placeholder: [{ type: Input }],
    buttonEl: [{ type: ViewChild, args: [ButtonComponent,] }],
    inputEl: [{ type: ViewChild, args: [InputComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/search-input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchInputModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/content/content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.active = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ContentStyles;
        this.initStyles();
    }
}
ContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-content',
                template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
ContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ContentComponent.propDecorators = {
    active: [{ type: Input }],
    name: [{ type: Input }],
    scope: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/selector/selector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectorComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.active = false;
        this.selectedSegment = new EventEmitter();
    }
    /**
     * @return {?}
     */
    handleClick() {
        if (this.name) {
            this.selectedSegment.emit(this.name);
        }
    }
    /**
     * @param {?} events
     * @return {?}
     */
    listen(events) {
        events.onChangeSelector.subscribe((/**
         * @param {?} segment
         * @return {?}
         */
        segment => {
            this.active = segment === this.name;
        }));
    }
}
SelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-selector',
                template: '<div></div>'
            }] }
];
/** @nocollapse */
SelectorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/segment/segment.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SegmentComponent extends SelectorComponent {
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
    childViewInit() {
        this.styles = SegmentStyles;
        this.initStyles();
    }
}
SegmentComponent.decorators = [
    { type: Component, args: [{
                providers: [{ provide: SelectorComponent, useExisting: SegmentComponent }],
                selector: 'fab-segment',
                template: "<button class=\"fab-segment\" (click)=\"handleClick()\" *ngIf=\"!href\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-segment\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
            }] }
];
/** @nocollapse */
SegmentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/segment-content/segment-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SegmentContentComponent extends ContentComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.contentClass = 'fab-segment-content';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
}
SegmentContentComponent.decorators = [
    { type: Component, args: [{
                template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                selector: 'fab-segment-content'
            }] }
];
/** @nocollapse */
SegmentContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/segments/segments.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SegmentsComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.border = true;
        this.clear = false;
        this.expand = false;
        this.faded = false;
        this.invert = false;
        this.layout = 'horizontal';
        this.outline = false;
        this.rounded = false;
        this.stacked = false;
        this.changeSegment = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.childComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        (child) => {
            child.activeColor = this.activeColor;
            child.activeTextColor = this.activeTextColor;
            child.color = this.color;
            child.clear = this.clear;
            child.expand = this.expand;
            child.faded = this.faded;
            child.inactiveColor = this.inactiveColor;
            child.inactiveTextColor = this.inactiveTextColor;
            child.invert = this.invert;
            child.layout = this.layout;
            child.outline = this.outline;
            child.rounded = this.rounded;
            child.scope = this.scope;
            child.stacked = this.stacked;
            child.type = this.type;
            child.selectedSegment.subscribe((/**
             * @param {?} tab
             * @return {?}
             */
            tab => this.handleActiveSegment(tab)));
            child.childViewInit();
            child.listen({
                onChangeSelector: this.changeSegment
            });
            if (this.active) {
                this.changeSegment.emit(this.active);
            }
        }));
        if (this.active && this.scope) {
            this.toggleContent();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = SegmentsStyles;
        this.initStyles();
    }
    /**
     * @param {?} segment
     * @return {?}
     */
    handleActiveSegment(segment) {
        this.active = segment;
        this.changeSegment.emit(segment);
        if (segment && this.scope) {
            this.toggleContent();
        }
    }
    /**
     * @return {?}
     */
    toggleContent() {
        /** @type {?} */
        const allOtherContent = document.querySelectorAll(`.fab-content[data-scope='${this.scope}']:not([data-name='${this.active}'])`);
        /** @type {?} */
        const targetContent = document.querySelector(`.fab-content[data-scope='${this.scope}'][data-name='${this.active}']`);
        if (allOtherContent.length) {
            allOtherContent.forEach((/**
             * @param {?} other
             * @return {?}
             */
            other => {
                other.setAttribute('data-active', 'false');
            }));
        }
        if (targetContent) {
            targetContent.setAttribute('data-active', 'true');
        }
    }
}
SegmentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-segments',
                template: "<div class=\"fab-segments-wrapper\" data-fab-wrapper=\"segments\">\n  <div class=\"fab-segments\" data-fab-component=\"segments\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
SegmentsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/segments.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SegmentsDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.segmentIsActive = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        host.setAttribute('data-segment-is-active', this.segmentIsActive);
        host.setAttribute('data-segment-name', this.segmentName);
        host.setAttribute('data-segment-scope', this.segmentScope);
        host.classList.add(css(SegmentContentStyles({ framework: 'angular', props: {} })));
    }
}
SegmentsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[segmentIsActive], [segmentName], [segmentScope]'
            },] }
];
/** @nocollapse */
SegmentsDirective.ctorParameters = () => [
    { type: ElementRef }
];
SegmentsDirective.propDecorators = {
    segmentIsActive: [{ type: Input }],
    segmentName: [{ type: Input }],
    segmentScope: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/segments.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SegmentsModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tab/tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabComponent extends SelectorComponent {
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
    childViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const styles = css(TabStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                providers: [{ provide: SelectorComponent, useExisting: TabComponent }],
                selector: 'fab-tab',
                template: "<button class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" (click)=\"handleClick()\" *ngIf=\"!href && !link\" data-fab-component=\"tab\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" *ngIf=\"href || link\" [href]=\"href || link\" [rel]=\"rel\" [target]=\"target\" data-fab-component=\"tab\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
TabComponent.propDecorators = {
    type: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tabs/tabs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsComponent extends SegmentsComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tab-content/tab-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabContentComponent extends ContentComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.contentClass = 'fab-tab-content';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
}
TabContentComponent.decorators = [
    { type: Component, args: [{
                template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                selector: 'fab-tab-content'
            }] }
];
/** @nocollapse */
TabContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/tabs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tag/tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TagComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.button = false;
        this.clear = false;
        this.faded = false;
        this.glow = false;
        this.invert = false;
        this.outline = false;
        this.rounded = false;
        this.size = 'md';
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.styles = TagStyles;
        this.initStyles();
    }
}
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tag',
                template: "<div class=\"fab-tag\" *ngIf=\"!button && !href\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</div>\n\n<button class=\"fab-tag\" *ngIf=\"button\" [attr.data-placement-x]=\"!!placement && placement.x\"\n  [attr.data-placement-y]=\"!!placement && placement.y\" data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tag\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>"
            }] }
];
/** @nocollapse */
TagComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tag-group/tag-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TagGroupComponent extends CommonComponent {
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
        this.tagComponents.forEach((/**
         * @param {?} tag
         * @return {?}
         */
        (tag) => {
            if (this.color && !tag.color) {
                tag.color = this.color;
            }
            tag.ngAfterViewInit();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = TagGroupStyles;
        this.initStyles();
    }
}
TagGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tag-group',
                template: "<div class=\"fab-tag-group-wrapper\">\n  <div class=\"fab-tag-group\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
TagGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
TagGroupComponent.propDecorators = {
    tagComponents: [{ type: ContentChildren, args: [TagComponent,] }],
    color: [{ type: Input }],
    spacing: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/tag.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: remove tag group component
class TagModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/text/text.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextComponent extends CommonComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/text.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/theme.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class ThemeModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
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
                    (service) => (/**
                     * @return {?}
                     */
                    () => service.init())),
                    deps: [ThemeService],
                    multi: true
                },
                {
                    provide: 'UserOptions',
                    useValue: options
                }
            ]
        };
    }
}
ThemeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [CommonModule],
                exports: [],
                providers: [ThemeService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastComponent extends CommonComponent {
    /**
     * @param {?} cdRef
     * @param {?} elRef
     * @param {?} fabulaService
     * @param {?} toastService
     */
    constructor(cdRef, elRef, fabulaService, toastService) {
        super(elRef, fabulaService);
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.toastService = toastService;
        this.hiding = false;
        this.stacked = false;
        this.height = 0;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.styles = ToastStyles;
        this.initStyles();
        this.props = this;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        let height;
        if (this.stacked) {
            this.stacked = false;
            height = host.querySelector('.fab-toast-wrapper').offsetHeight;
        }
        this.stacked = true;
        this.additionalProps = { height };
        this.height = height;
        this.cdRef.detectChanges();
    }
    // Methods
    /**
     * @return {?}
     */
    hideToast() {
        /** @type {?} */
        const stack = this.toastService.stacks[this.stack];
        this.toastService.hideToast({
            index: this.index,
            stack
        });
    }
    // Getters
    /**
     * @return {?}
     */
    get toastHeight() {
        if (this.stacked) {
            return this.elRef.nativeElement.querySelector('.fab-toast-wrapper').offsetHeight;
        }
        else {
            return null;
        }
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toast',
                template: "<div class=\"fab-toast-wrapper\" data-fab-wrapper=\"toast\" [attr.data-hiding]=\"hiding\"\n  [attr.data-stacked]=\"stacked\" [ngStyle]=\"{ 'height': toastHeight }\">\n  <div class=\"fab-toast\" data-fab-component=\"toast\">\n    <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n    <span class=\"fab-toast__message\" *ngIf=\"message\">{{message}}</span>\n    <ng-content></ng-content>\n    <div class=\"fab-toast__button\" *ngIf=\"!!button || !!hideButton\">\n      <fab-button (click)=\"hideToast()\" [props]=\"hideButton\" size=\"sm\" *ngIf=\"!!hideButton && !button\"></fab-button>\n      <fab-button [props]=\"button\" size=\"sm\" *ngIf=\"button\"></fab-button>\n    </div>\n  </div>\n</div>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FabulaService },
    { type: ToastService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-stack/toast-stack.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastStackComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.placement = {
            x: 'left',
            y: 'bottom'
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ToastStackStyles;
        this.initStyles();
    }
    /**
     * @return {?}
     */
    get visibleToasts() {
        if (this.toasts) {
            /** @type {?} */
            const toasts = this.toasts.map((/**
             * @param {?} toast
             * @param {?} index
             * @return {?}
             */
            (toast, index) => {
                toast.index = index;
                return toast;
            }));
            return toasts.filter((/**
             * @param {?} toast
             * @return {?}
             */
            toast => !toast.hidden));
        }
        else {
            return [];
        }
    }
}
ToastStackComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toast-stack',
                template: "<div class=\"fab-toast-stack\" [attr.data-placement-x]=\"placement.x\" [attr.data-placement-y]=\"placement.y\">\n  <fab-toast [hideButton]=\"toast.hideButton\" [color]=\"toast.color\" [hiding]=\"toast.hiding\" [icon]=\"toast.icon\" [index]=\"toast.index\" [message]=\"toast.message\" [stack]=\"toast.stack\" [stacked]=\"true\" *ngFor=\"let toast of visibleToasts\"></fab-toast>\n</div>"
            }] }
];
/** @nocollapse */
ToastStackComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ToastStackComponent.propDecorators = {
    placement: [{ type: Input }],
    toasts: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-portal/toast-portal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastPortalComponent {
    /**
     * @param {?} toastService
     */
    constructor(toastService) {
        this.toastService = toastService;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    get stacks() {
        return Object.keys(this.toastService.stacks).map((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            return this.toastService.stacks[name];
        }));
    }
}
ToastPortalComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toast-portal',
                template: "<fab-toast-stack *ngFor=\"let stack of stacks\" [placement]=\"stack.placement\" [toasts]=\"stack.toasts\"></fab-toast-stack>"
            }] }
];
/** @nocollapse */
ToastPortalComponent.ctorParameters = () => [
    { type: ToastService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/toast.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toggle/toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.active = false;
        this.disabled = false;
        this.rounded = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ToggleStyles;
        this.initStyles();
    }
    /**
     * @return {?}
     */
    handleClick() {
        if (!this.disabled) {
            this.active = !this.active;
        }
    }
}
ToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toggle',
                template: "<div class=\"fab-toggle-wrapper\" [attr.data-active]=\"active\" [attr.data-disabled]=\"disabled\" data-fab-wrapper=\"toggle\">\n  <div class=\"fab-toggle\" data-fab-component=\"toggle\">\n    <button class=\"fab-toggle__switch\" (click)=\"handleClick()\"></button>\n    <div class=\"fab-toggle__label\" (click)=\"handleClick()\">\n      <ng-container *ngIf=\"!label\">\n        <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n      </ng-container>\n      <ng-container *ngIf=\"label\">\n        {{label}}\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
ToggleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/toggle.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tooltip/tooltip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.placement = 'top';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const styles = css(TooltipStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
    }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tooltip',
                template: "<div class=\"fab-tooltip\" [attr.data-placement]=\"placement\">\n  <span class=\"fab-tooltip__label\">{{label}}</span>\n</div>"
            }] }
];
/** @nocollapse */
TooltipComponent.ctorParameters = () => [
    { type: ElementRef }
];
TooltipComponent.propDecorators = {
    color: [{ type: Input }],
    label: [{ type: Input }],
    offset: [{ type: Input }],
    placement: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipDirective {
    /**
     * @param {?} appRef
     * @param {?} elRef
     * @param {?} injector
     * @param {?} resolver
     */
    constructor(appRef, elRef, injector, resolver) {
        this.appRef = appRef;
        this.elRef = elRef;
        this.injector = injector;
        this.resolver = resolver;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const portal = document.querySelector('.fab-tooltip-portal');
        if (!portal) {
            this.createPortal();
        }
        this.handleTooltip();
    }
    /**
     * @return {?}
     */
    createPortal() {
        /** @type {?} */
        const portal = document.createElement('div');
        portal.classList.add('fab-tooltip-portal');
        document.body.append(portal);
    }
    /**
     * @param {?} host
     * @return {?}
     */
    createTooltip(host) {
        /** @type {?} */
        const coords = this.getCoords(host);
        /** @type {?} */
        let element;
        /** @type {?} */
        let portal;
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
        element.style.left = `${coords.left}px`;
        element.style.top = `${coords.top}px`;
        portal.appendChild(element);
    }
    /**
     * @return {?}
     */
    destroyTooltip() {
        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    }
    /**
     * @param {?} host
     * @return {?}
     */
    getCoords(host) {
        const { height, width, x, y } = host.getBoundingClientRect();
        /** @type {?} */
        let left;
        /** @type {?} */
        let top;
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
        return { left, top };
    }
    /**
     * @return {?}
     */
    handleTooltip() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const component = host.querySelector('[data-fab-component]');
        /** @type {?} */
        const target = component || host;
        target.addEventListener('mouseenter', (/**
         * @return {?}
         */
        () => {
            this.createTooltip(target);
        }));
        target.addEventListener('mouseleave', (/**
         * @return {?}
         */
        () => {
            this.destroyTooltip();
        }));
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tooltip],[tooltipColor],[tooltipLabel],[tooltipOffset],[tooltipPlacement]'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ElementRef },
    { type: Injector },
    { type: ComponentFactoryResolver }
];
TooltipDirective.propDecorators = {
    tooltip: [{ type: Input }],
    tooltipColor: [{ type: Input }],
    tooltipLabel: [{ type: Input }],
    tooltipOffset: [{ type: Input }],
    tooltipPlacement: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/tooltip.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/common.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const element = this.elRef.nativeElement;
        element.classList.add(css(UtilsStyles({ framework: 'angular', props: this })));
    }
}
CommonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'commonDirective'
            },] }
];
/** @nocollapse */
CommonDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/align.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlignDirective extends CommonDirective {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/block.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BlockDirective extends CommonDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        super(elRef);
        this.elRef = elRef;
    }
}
BlockDirective.decorators = [
    { type: Directive, args: [{
                selector: '[block]'
            },] }
];
/** @nocollapse */
BlockDirective.ctorParameters = () => [
    { type: ElementRef }
];
BlockDirective.propDecorators = {
    block: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/column.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnDirective {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} elRef
     * @param {?} renderer
     * @param {?} target
     */
    constructor(componentFactoryResolver, elRef, renderer, target) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.elRef = elRef;
        this.renderer = renderer;
        this.target = target;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: '[col],[col-down],[col-up],[col-on],[col-not-on]'
            },] }
];
/** @nocollapse */
ColumnDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef }
];
ColumnDirective.propDecorators = {
    col: [{ type: Input }],
    colDown: [{ type: Input, args: ['col-down',] }],
    colNotOn: [{ type: Input, args: ['col-not-on',] }],
    colOn: [{ type: Input, args: ['col-on',] }],
    colUp: [{ type: Input, args: ['col-up',] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/flex.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlexDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
        /** @type {?} */
        const props = {
            basis: this.basis,
            direction: this.direction,
            flex: host.hasAttribute('flex') || this.flex,
            flow: this.flow,
            grow: this.grow,
            shrink: this.shrink,
            wrap: this.wrap
        };
        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }
}
FlexDirective.decorators = [
    { type: Directive, args: [{
                selector: '[basis], [flex], [flow], [grow], [shrink], [wrap]'
            },] }
];
/** @nocollapse */
FlexDirective.ctorParameters = () => [
    { type: ElementRef }
];
FlexDirective.propDecorators = {
    basis: [{ type: Input }],
    direction: [{ type: Input }],
    flex: [{ type: Input }],
    flow: [{ type: Input }],
    grow: [{ type: Input }],
    shrink: [{ type: Input }],
    wrap: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/flow.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlowDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const element = this.elRef.nativeElement;
        /** @type {?} */
        const props = {
            flow: this.flow,
        };
        element.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }
}
FlowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[flow]'
            },] }
];
/** @nocollapse */
FlowDirective.ctorParameters = () => [
    { type: ElementRef }
];
FlowDirective.propDecorators = {
    flow: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/grow.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GrowDirective {
    /**
     * @param {?} elRef
     * @param {?} renderer
     */
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const angularElement = !!host.querySelector('[data-fab-component]') || !!host.querySelector('[data-fab-wrapper]');
        /** @type {?} */
        const props = {
            grow: this.grow
        };
        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }
}
GrowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[grow]'
            },] }
];
/** @nocollapse */
GrowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
GrowDirective.propDecorators = {
    grow: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/margin.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MarginDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const props = {
            m: this.m,
            mb: this.mb,
            ml: this.ml,
            mr: this.mr,
            mt: this.mt,
            mx: this.mx,
            my: this.my
        };
        host.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }
}
MarginDirective.decorators = [
    { type: Directive, args: [{
                selector: '[m],[mb],[ml],[mr],[mt],[mx],[my]'
            },] }
];
/** @nocollapse */
MarginDirective.ctorParameters = () => [
    { type: ElementRef }
];
MarginDirective.propDecorators = {
    m: [{ type: Input }],
    mb: [{ type: Input }],
    ml: [{ type: Input }],
    mr: [{ type: Input }],
    mt: [{ type: Input }],
    mx: [{ type: Input }],
    my: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/overflow.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OverflowDirective extends CommonDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        super(elRef);
        this.elRef = elRef;
    }
}
OverflowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ov],[ovX],[ovY]'
            },] }
];
/** @nocollapse */
OverflowDirective.ctorParameters = () => [
    { type: ElementRef }
];
OverflowDirective.propDecorators = {
    ov: [{ type: Input, args: ['ov',] }],
    ovX: [{ type: Input, args: ['ovX',] }],
    ovY: [{ type: Input, args: ['ovY',] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/padding.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaddingDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
        /** @type {?} */
        const props = {
            p: this.p,
            pb: this.pb,
            pl: this.pl,
            pr: this.pr,
            pt: this.pt,
            px: this.px,
            py: this.py
        };
        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }
}
PaddingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[p],[pb],[pl],[pr],[pt],[px],[py]'
            },] }
];
/** @nocollapse */
PaddingDirective.ctorParameters = () => [
    { type: ElementRef }
];
PaddingDirective.propDecorators = {
    p: [{ type: Input }],
    pb: [{ type: Input }],
    pl: [{ type: Input }],
    pr: [{ type: Input }],
    pt: [{ type: Input }],
    px: [{ type: Input }],
    py: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RowDirective {
    /**
     * @param {?} elRef
     * @param {?} renderer
     */
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const element = this.elRef.nativeElement;
        /** @type {?} */
        const parent = element.parentNode;
        /** @type {?} */
        const wrapper = document.createElement('div');
        wrapper.classList.add('fab-row');
        this.renderer.insertBefore(parent, wrapper, element);
        this.renderer.appendChild(wrapper, element);
        /** @type {?} */
        const props = {
            row: true
        };
        element.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }
}
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[row]'
            },] }
];
/** @nocollapse */
RowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
RowDirective.propDecorators = {
    row: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/size.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SizeDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props: this })));
    }
}
SizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[expand], [height], [width]'
            },] }
];
/** @nocollapse */
SizeDirective.ctorParameters = () => [
    { type: ElementRef }
];
SizeDirective.propDecorators = {
    expand: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/visibility.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VisibilityDirective extends CommonDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        super(elRef);
        this.elRef = elRef;
    }
}
VisibilityDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hidden],[visible]'
            },] }
];
/** @nocollapse */
VisibilityDirective.ctorParameters = () => [
    { type: ElementRef }
];
VisibilityDirective.propDecorators = {
    hidden: [{ type: Input }],
    visible: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/utils.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class UtilsModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
                    (service) => (/**
                     * @return {?}
                     */
                    () => {
                        service.utils = true;
                    })),
                    deps: [FabulaService],
                    multi: true
                }
            ]
        };
    }
}
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