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
import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef, NgModule, Component, Output, EventEmitter, ContentChildren, ChangeDetectorRef, ViewChildren, ViewChild, ContentChild, HostBinding, APP_INITIALIZER, Inject, defineInjectable, inject, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function AlertComponent_div_0_fab_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fab-icon", 7);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("props", ctx_r1.icon);
} }
function AlertComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.title);
} }
function AlertComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.text);
} }
function AlertComponent_div_0_fab_close_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "fab-close-button", 10);
    ɵngcc0.ɵɵlistener("click", function AlertComponent_div_0_fab_close_button_6_Template_fab_close_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.closeAlert(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("parentColor", ctx_r4.color);
} }
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, AlertComponent_div_0_fab_icon_1_Template, 1, 1, "fab-icon", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵtemplate(3, AlertComponent_div_0_div_3_Template, 2, 1, "div", 4);
    ɵngcc0.ɵɵtemplate(4, AlertComponent_div_0_div_4_Template, 2, 1, "div", 5);
    ɵngcc0.ɵɵprojection(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, AlertComponent_div_0_fab_close_button_6_Template, 1, 1, "fab-close-button", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("data-closing", ctx_r0.closing)("data-title", !!ctx_r0.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.icon || ctx_r0.type);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.text);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.closeButton);
} }
const _c0 = ["*"];
function AvatarComponent_fab_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fab-icon", 5);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("props", ctx_r0.icon);
} }
function AvatarComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.initials);
} }
const _c1 = function (a0) { return { "background-image": a0 }; };
function AvatarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c1, "url(" + ctx_r2.src + ")"));
} }
function BadgeComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function ButtonComponent_button_0_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "content"]);
} }
function ButtonComponent_button_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ButtonComponent_button_0_ng_container_1_1_Template, 1, 0, undefined, 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function ButtonComponent_button_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.label || ctx_r5.props.label);
} }
function ButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 3);
    ɵngcc0.ɵɵtemplate(1, ButtonComponent_button_0_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(2, ButtonComponent_button_0_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled || ctx_r0.props.disabled);
    ɵngcc0.ɵɵattribute("data-border", ctx_r0.border || ctx_r0.props.border)("data-color", ctx_r0.color || ctx_r0.props.color)("data-circle", !!ctx_r0.circle || !!ctx_r0.props.circle)("data-expand", ctx_r0.expand || ctx_r0.props.expand)("data-outline", ctx_r0.outline || ctx_r0.props.outline)("data-rounded", ctx_r0.rounded || ctx_r0.props.rounded);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.label && !ctx_r0.props.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.label || ctx_r0.props.label);
} }
function ButtonComponent_a_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngTemplateOutlet", "content"]);
} }
function ButtonComponent_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ButtonComponent_a_1_ng_container_1_1_Template, 1, 0, undefined, 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function ButtonComponent_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.label || ctx_r8.props.label);
} }
function ButtonComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 6);
    ɵngcc0.ɵɵtemplate(1, ButtonComponent_a_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(2, ButtonComponent_a_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("data-border", ctx_r1.border || ctx_r1.props.border)("data-color", ctx_r1.color || ctx_r1.props.color)("data-circle", !!ctx_r1.circle || !!ctx_r1.props.circle)("data-expand", ctx_r1.expand || ctx_r1.props.expand)("data-outline", ctx_r1.outline || ctx_r1.props.outline)("data-rounded", ctx_r1.rounded || ctx_r1.props.rounded)("href", ctx_r1.href || ctx_r1.props.href, ɵngcc0.ɵɵsanitizeUrl)("rel", ctx_r1.rel || ctx_r1.props.rel)("target", ctx_r1.target || ctx_r1.props.target);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.label && !ctx_r1.props.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.label || ctx_r1.props.label);
} }
function ButtonComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 2);
} }
const _c2 = ["*", "*", "*"];
function CardImageComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("src", ctx_r0.src, ɵngcc0.ɵɵsanitizeUrl);
} }
function CheckboxComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function CheckboxComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementContainerEnd();
} }
function DropdownHeaderComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function DropdownHeaderComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementContainerEnd();
} }
function DropdownItemComponent_a_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.props.label || ctx_r5.label);
} }
function DropdownItemComponent_a_0_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "content"]);
} }
function DropdownItemComponent_a_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DropdownItemComponent_a_0_ng_container_2_1_Template, 1, 0, undefined, 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function DropdownItemComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 3);
    ɵngcc0.ɵɵtemplate(1, DropdownItemComponent_a_0_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(2, DropdownItemComponent_a_0_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("href", ctx_r0.href || ctx_r0.props.href, ɵngcc0.ɵɵsanitizeUrl)("rel", ctx_r0.rel || ctx_r0.props.rel)("target", ctx_r0.target || ctx_r0.props.target);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.props.label && ctx_r0.props.label || ctx_r0.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.props.label && !ctx_r0.label);
} }
function DropdownItemComponent_button_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.props.label || ctx_r8.label);
} }
function DropdownItemComponent_button_1_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngTemplateOutlet", "content"]);
} }
function DropdownItemComponent_button_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DropdownItemComponent_button_1_ng_container_2_1_Template, 1, 0, undefined, 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function DropdownItemComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("click", function DropdownItemComponent_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.handleClick(); });
    ɵngcc0.ɵɵtemplate(1, DropdownItemComponent_button_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(2, DropdownItemComponent_button_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.props.label && ctx_r1.props.label || ctx_r1.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.props.label && !ctx_r1.label);
} }
function DropdownItemComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r13.props.label || ctx_r13.label);
} }
function DropdownItemComponent_div_2_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 2, ["*ngTemplateOutlet", "content"]);
} }
function DropdownItemComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DropdownItemComponent_div_2_ng_container_2_1_Template, 1, 0, undefined, 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function DropdownItemComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, DropdownItemComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(2, DropdownItemComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.props.label && ctx_r2.props.label || ctx_r2.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.props.label && !ctx_r2.label);
} }
function DropdownItemComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 3);
} }
const _c3 = ["*", "*", "*", "*"];
function DropdownMenuComponent_ng_container_1_fab_dropdown_item_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fab-dropdown-item", 5);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("props", item_r6);
} }
function DropdownMenuComponent_ng_container_1_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "content"]);
} }
function DropdownMenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DropdownMenuComponent_ng_container_1_fab_dropdown_item_1_Template, 1, 1, "fab-dropdown-item", 3);
    ɵngcc0.ɵɵtemplate(2, DropdownMenuComponent_ng_container_1_2_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function DropdownMenuComponent_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngTemplateOutlet", "content"]);
} }
function DropdownMenuComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DropdownMenuComponent_ng_container_2_1_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function DropdownMenuComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 2);
} }
const _c4 = ["label"];
function DropdownToggleComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4, 5);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵelementEnd();
} }
function DropdownToggleComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
function DropdownToggleComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵelement(1, "fab-icon", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("data-only-child", ctx_r2.arrowIsOnlyChild);
} }
function HeadingComponent_h1_0_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "content"]);
} }
function HeadingComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h1", 2);
    ɵngcc0.ɵɵtemplate(1, HeadingComponent_h1_0_1_Template, 1, 0, undefined, 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function HeadingComponent_h2_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngTemplateOutlet", "content"]);
} }
function HeadingComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h2", 2);
    ɵngcc0.ɵɵtemplate(1, HeadingComponent_h2_1_1_Template, 1, 0, undefined, 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function HeadingComponent_h3_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 2, ["*ngTemplateOutlet", "content"]);
} }
function HeadingComponent_h3_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h3", 2);
    ɵngcc0.ɵɵtemplate(1, HeadingComponent_h3_2_1_Template, 1, 0, undefined, 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function HeadingComponent_h4_3_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 3, ["*ngTemplateOutlet", "content"]);
} }
function HeadingComponent_h4_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h4", 2);
    ɵngcc0.ɵɵtemplate(1, HeadingComponent_h4_3_1_Template, 1, 0, undefined, 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function HeadingComponent_h5_4_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 4, ["*ngTemplateOutlet", "content"]);
} }
function HeadingComponent_h5_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h5", 2);
    ɵngcc0.ɵɵtemplate(1, HeadingComponent_h5_4_1_Template, 1, 0, undefined, 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function HeadingComponent_h6_5_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 5, ["*ngTemplateOutlet", "content"]);
} }
function HeadingComponent_h6_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h6", 2);
    ɵngcc0.ɵɵtemplate(1, HeadingComponent_h6_5_1_Template, 1, 0, undefined, 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function HeadingComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 6);
} }
const _c5 = ["*", "*", "*", "*", "*", "*", "*"];
function InputComponent_div_2_fab_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fab-icon", 10);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("props", ctx_r6.icon);
} }
function InputComponent_div_2_fab_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fab-icon", 10);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("props", ctx_r7.iconStart);
} }
function InputComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtemplate(1, InputComponent_div_2_fab_icon_1_Template, 1, 1, "fab-icon", 9);
    ɵngcc0.ɵɵtemplate(2, InputComponent_div_2_fab_icon_2_Template, 1, 1, "fab-icon", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.iconStart);
} }
function InputComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 11);
    ɵngcc0.ɵɵlistener("blur", function InputComponent_input_3_Template_input_blur_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.handleFocus(false); })("focus", function InputComponent_input_3_Template_input_focus_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.handleFocus(true); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r1.placeholder)("type", ctx_r1.type);
} }
function InputComponent_textarea_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "textarea", 11);
    ɵngcc0.ɵɵlistener("blur", function InputComponent_textarea_4_Template_textarea_blur_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.handleFocus(false); })("focus", function InputComponent_textarea_4_Template_textarea_focus_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.handleFocus(true); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r2.placeholder)("type", ctx_r2.type);
} }
function InputComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelement(1, "fab-icon", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("props", ctx_r3.iconEnd);
} }
function InputComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 13);
    ɵngcc0.ɵɵlistener("click", function InputComponent_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.toggleType(); });
    ɵngcc0.ɵɵelement(1, "fab-icon", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("data-toggled", ctx_r4.type === "text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("name", ctx_r4.toggleIcon);
} }
function InputComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.message.text);
} }
function LinkComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.props.label || ctx_r0.label);
} }
function ListItemComponent_div_0_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "content"]);
} }
function ListItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, ListItemComponent_div_0_2_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵattribute("data-divider", ctx_r0.divider)("data-striped", ctx_r0.striped);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.item && ctx_r0.item.label || ctx_r0.label, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function ListItemComponent_button_1_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngTemplateOutlet", "content"]);
} }
function ListItemComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵlistener("click", function ListItemComponent_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.handleClick(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, ListItemComponent_button_1_2_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵattribute("data-divider", ctx_r1.divider)("data-striped", ctx_r1.striped);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.item && ctx_r1.item.label || ctx_r1.label, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function ListItemComponent_a_2_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 2, ["*ngTemplateOutlet", "content"]);
} }
function ListItemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, ListItemComponent_a_2_2_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵattribute("data-divider", ctx_r2.divider)("data-striped", ctx_r2.striped)("href", ctx_r2.href, ɵngcc0.ɵɵsanitizeUrl)("rel", ctx_r2.rel)("target", ctx_r2.target);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.item && ctx_r2.item.label || ctx_r2.label, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function ListItemComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 3);
} }
function ModalHeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "fab-close-button", 3);
    ɵngcc0.ɵɵlistener("click", function ModalHeaderComponent_div_0_Template_fab_close_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.closeModal(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("color", ctx_r0.color || ctx_r0.parentColor);
} }
function SearchInputComponent_fab_button_2_fab_inner_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fab-inner-icon", 5);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("icon", ctx_r1.button.icon)("parentProps", ctx_r1.button);
} }
function SearchInputComponent_fab_button_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "fab-button", 3);
    ɵngcc0.ɵɵtemplate(1, SearchInputComponent_fab_button_2_fab_inner_icon_1_Template, 1, 2, "fab-inner-icon", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("props", ctx_r0.buttonProps);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.button && ctx_r0.button.icon);
} }
const _c6 = function () { return { name: "search" }; };
function SegmentComponent_button_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function SegmentComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 3);
    ɵngcc0.ɵɵlistener("click", function SegmentComponent_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.handleClick(); });
    ɵngcc0.ɵɵtemplate(1, SegmentComponent_button_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵattribute("data-active", ctx_r0.active)("data-name", ctx_r0.name);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function SegmentComponent_a_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "content"]);
} }
function SegmentComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵtemplate(1, SegmentComponent_a_1_1_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵproperty("href", ctx_r1.href, ɵngcc0.ɵɵsanitizeUrl)("rel", ctx_r1.rel)("target", ctx_r1.target);
    ɵngcc0.ɵɵattribute("data-active", ctx_r1.active)("data-name", ctx_r1.name);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function SegmentComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1);
} }
const _c7 = ["*", "*"];
function TabComponent_button_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 3);
    ɵngcc0.ɵɵlistener("click", function TabComponent_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.handleClick(); });
    ɵngcc0.ɵɵtemplate(1, TabComponent_button_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵattribute("data-active", ctx_r0.active)("data-name", ctx_r0.name);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function TabComponent_a_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "content"]);
} }
function TabComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵtemplate(1, TabComponent_a_1_1_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵproperty("href", ctx_r1.href || ctx_r1.link, ɵngcc0.ɵɵsanitizeUrl)("rel", ctx_r1.rel)("target", ctx_r1.target);
    ɵngcc0.ɵɵattribute("data-active", ctx_r1.active)("data-name", ctx_r1.name);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function TabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1);
} }
function TagComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TagComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, TagComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵattribute("data-placement-x", !!ctx_r0.placement && ctx_r0.placement.x)("data-placement-y", !!ctx_r0.placement && ctx_r0.placement.y);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function TagComponent_button_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TagComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 3);
    ɵngcc0.ɵɵtemplate(1, TagComponent_button_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵattribute("data-placement-x", !!ctx_r1.placement && ctx_r1.placement.x)("data-placement-y", !!ctx_r1.placement && ctx_r1.placement.y);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function TagComponent_a_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "content"]);
} }
function TagComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵtemplate(1, TagComponent_a_2_1_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵproperty("href", ctx_r2.href, ɵngcc0.ɵɵsanitizeUrl)("rel", ctx_r2.rel)("target", ctx_r2.target);
    ɵngcc0.ɵɵattribute("data-placement-x", !!ctx_r2.placement && ctx_r2.placement.x)("data-placement-y", !!ctx_r2.placement && ctx_r2.placement.y);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function TagComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1);
} }
function TextComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementContainerEnd();
} }
function TextComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.content);
} }
const _c8 = ["toast"];
function ToastComponent_fab_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fab-icon", 5);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("props", ctx_r0.icon);
} }
function ToastComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.message);
} }
function ToastComponent_div_5_fab_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "fab-button", 10);
    ɵngcc0.ɵɵlistener("click", function ToastComponent_div_5_fab_button_1_Template_fab_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.hideToast(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("props", ctx_r3.hideButton);
} }
function ToastComponent_div_5_fab_button_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fab-button", 11);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("props", ctx_r4.button);
} }
function ToastComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtemplate(1, ToastComponent_div_5_fab_button_1_Template, 1, 1, "fab-button", 8);
    ɵngcc0.ɵɵtemplate(2, ToastComponent_div_5_fab_button_2_Template, 1, 1, "fab-button", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !!ctx_r2.hideButton && !ctx_r2.button);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.button);
} }
const _c9 = function (a0) { return { "height": a0 }; };
function ToastStackComponent_fab_toast_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fab-toast", 2);
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("hideButton", toast_r1.hideButton)("color", toast_r1.color)("hiding", toast_r1.hiding)("icon", toast_r1.icon)("index", toast_r1.index)("message", toast_r1.message)("stack", toast_r1.stack)("stacked", true);
} }
function ToastPortalComponent_fab_toast_stack_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fab-toast-stack", 1);
} if (rf & 2) {
    const stack_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("placement", stack_r1.placement)("toasts", stack_r1.toasts);
} }
function ToggleComponent_ng_container_4_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "content"]);
} }
function ToggleComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ToggleComponent_ng_container_4_1_Template, 1, 0, undefined, 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function ToggleComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.label, " ");
} }
function ToggleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1);
} }
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
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver)); };
ModalService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: ApplicationRef },
    { type: Injector },
    { type: ComponentFactoryResolver }
];
/** @nocollapse */ ModalService.ngInjectableDef = defineInjectable({ factory: function ModalService_Factory() { return new ModalService(inject(ApplicationRef), inject(INJECTOR), inject(ComponentFactoryResolver)); }, token: ModalService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ComponentFactoryResolver }]; }, null); })();

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
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(ɵngcc0.ɵɵinject('UserOptions')); };
ThemeService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/** @nocollapse */
ThemeService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['UserOptions',] }] }
];
/** @nocollapse */ ThemeService.ngInjectableDef = defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(inject("UserOptions")); }, token: ThemeService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ThemeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['UserOptions']
            }] }]; }, null); })();

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
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/** @nocollapse */
ToastService.ctorParameters = () => [];
/** @nocollapse */ ToastService.ngInjectableDef = defineInjectable({ factory: function ToastService_Factory() { return new ToastService(); }, token: ToastService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

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
FabulaService.ɵfac = function FabulaService_Factory(t) { return new (t || FabulaService)(); };
FabulaService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: FabulaService, factory: FabulaService.ɵfac, providedIn: 'root' });
/** @nocollapse */
FabulaService.ctorParameters = () => [];
FabulaService.propDecorators = {
    responsiveness: [{ type: Input }],
    utils: [{ type: Input }]
};
/** @nocollapse */ FabulaService.ngInjectableDef = defineInjectable({ factory: function FabulaService_Factory() { return new FabulaService(); }, token: FabulaService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FabulaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, { responsiveness: [{
            type: Input
        }], utils: [{
            type: Input
        }] }); })();

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
CommonComponent.ɵfac = function CommonComponent_Factory(t) { return new (t || CommonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
CommonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CommonComponent, selectors: [["fab-component"]], inputs: { props: "props", down: "down", on: "on", up: "up" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function CommonComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CommonComponent, [{
        type: Component,
        args: [{
                selector: 'fab-component',
                template: ''
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { props: [{
            type: Input
        }], down: [{
            type: Input
        }], on: [{
            type: Input
        }], up: [{
            type: Input
        }] }); })();

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
FabulaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FabulaModule });
FabulaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FabulaModule_Factory(t) { return new (t || FabulaModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FabulaModule, { declarations: function () { return [CommonComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [CommonComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FabulaModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
AlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["fab-alert"]], inputs: { border: "border", clear: "clear", closeButton: "closeButton", faded: "faded", glow: "glow", outline: "outline", visible: "visible", icon: "icon", borderColor: "borderColor", color: "color", invert: "invert", marker: "marker", text: "text", textColor: "textColor", title: "title", titleColor: "titleColor", type: "type" }, outputs: { close: "close" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "fab-alert", "data-fab-component", "alert", 4, "ngIf"], ["data-fab-component", "alert", 1, "fab-alert"], [3, "props", 4, "ngIf"], [1, "fab-alert__stage"], ["class", "fab-alert__title", 4, "ngIf"], ["class", "fab-alert__text", 4, "ngIf"], ["size", "sm", 3, "parentColor", "click", 4, "ngIf"], [3, "props"], [1, "fab-alert__title"], [1, "fab-alert__text"], ["size", "sm", 3, "parentColor", "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, AlertComponent_div_0_Template, 7, 6, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: function () { return [ɵngcc1.NgIf, IconComponent,
        CloseButtonComponent]; }, styles: ["[_nghost-%COMP%]{display:block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 'fab-alert',
                template: "<div class=\"fab-alert\" [attr.data-closing]=\"closing\" [attr.data-title]=\"!!title\" data-fab-component=\"alert\"\n  *ngIf=\"visible\">\n  <fab-icon [props]=\"icon\" *ngIf=\"icon || type\"></fab-icon>\n  <div class=\"fab-alert__stage\">\n    <div class=\"fab-alert__title\" *ngIf=\"title\">{{title}}</div>\n    <div class=\"fab-alert__text\" *ngIf=\"text\">{{text}}</div>\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button (click)=\"closeAlert()\" [parentColor]=\"color\" size=\"sm\" *ngIf=\"closeButton\">\n  </fab-close-button>\n</div>",
                styles: [":host{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { border: [{
            type: Input
        }], clear: [{
            type: Input
        }], closeButton: [{
            type: Input
        }], faded: [{
            type: Input
        }], glow: [{
            type: Input
        }], outline: [{
            type: Input
        }], visible: [{
            type: Input
        }], close: [{
            type: Output
        }], icon: [{
            type: Input
        }], borderColor: [{
            type: Input
        }], color: [{
            type: Input
        }], invert: [{
            type: Input
        }], marker: [{
            type: Input
        }], text: [{
            type: Input
        }], textColor: [{
            type: Input
        }], title: [{
            type: Input
        }], titleColor: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();

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
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
IconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: IconComponent, selectors: [["fab-icon"]], inputs: { size: "size", color: "color", name: "name" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "fab-icon"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "i", 0);
    } }, styles: ["[_nghost-%COMP%]{color:inherit;display:inline-flex}[_nghost-%COMP%]   .fab-icon[_ngcontent-%COMP%]{align-items:center}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(IconComponent, [{
        type: Component,
        args: [{
                selector: 'fab-icon',
                template: "<i class=\"fab-icon\"></i>\n",
                styles: [":host{color:inherit;display:inline-flex}:host .fab-icon{align-items:center}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { size: [{
            type: Input
        }], color: [{
            type: Input
        }], name: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/icons.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconsModule {
}
IconsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: IconsModule });
IconsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function IconsModule_Factory(t) { return new (t || IconsModule)(); }, imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(IconsModule, { declarations: function () { return [IconComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [IconComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(IconsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    IconComponent
                ],
                imports: [
                    CommonModule,
                ],
                exports: [
                    IconComponent
                ]
            }]
    }], null, null); })();

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
CloseButtonComponent.ɵfac = function CloseButtonComponent_Factory(t) { return new (t || CloseButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
CloseButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CloseButtonComponent, selectors: [["fab-close-button"]], inputs: { color: "color", parentColor: "parentColor", size: "size" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "fab-close-button"], ["name", "x"]], template: function CloseButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵelement(1, "fab-icon", 1);
        ɵngcc0.ɵɵelementEnd();
    } }, directives: [IconComponent], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CloseButtonComponent, [{
        type: Component,
        args: [{
                selector: 'fab-close-button',
                template: "<button class=\"fab-close-button\">\n    <fab-icon name=\"x\"></fab-icon>\n</button>"
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { color: [{
            type: Input
        }], parentColor: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/close-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloseButtonModule {
}
CloseButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CloseButtonModule });
CloseButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CloseButtonModule_Factory(t) { return new (t || CloseButtonModule)(); }, imports: [[
            CommonModule,
            IconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CloseButtonModule, { declarations: function () { return [CloseButtonComponent]; }, imports: function () { return [CommonModule,
        IconsModule]; }, exports: function () { return [CloseButtonComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CloseButtonModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/alert.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertModule {
}
AlertModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AlertModule });
AlertModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[
            CloseButtonModule,
            CommonModule,
            IconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AlertModule, { declarations: function () { return [AlertComponent]; }, imports: function () { return [CloseButtonModule,
        CommonModule,
        IconsModule]; }, exports: function () { return [AlertComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
AvatarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AvatarComponent, selectors: [["fab-avatar"]], inputs: { color: "color", darken: "darken", faded: "faded", icon: "icon", lighten: "lighten", rounded: "rounded", showInitials: "showInitials", size: "size", src: "src" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 6, vars: 7, consts: [["data-fab-wrapper", "avatar", 1, "fab-avatar-wrapper"], [1, "fab-avatar"], [3, "props", 4, "ngIf"], ["class", "fab-avatar__initials", 4, "ngIf"], ["class", "fab-avatar__image", 3, "ngStyle", 4, "ngIf"], [3, "props"], [1, "fab-avatar__initials"], [1, "fab-avatar__image", 3, "ngStyle"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, AvatarComponent_fab_icon_2_Template, 1, 1, "fab-icon", 2);
        ɵngcc0.ɵɵtemplate(3, AvatarComponent_span_3_Template, 2, 1, "span", 3);
        ɵngcc0.ɵɵtemplate(4, AvatarComponent_div_4_Template, 1, 3, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-rounded", ctx.rounded);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("data-color", ctx.color)("data-rounded", ctx.rounded)("data-size", ctx.size);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.showInitials && ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showInitials);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.src);
    } }, directives: [ɵngcc1.NgIf, IconComponent, ɵngcc1.NgStyle], styles: ["[_nghost-%COMP%]{display:inline-block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AvatarComponent, [{
        type: Component,
        args: [{
                selector: 'fab-avatar',
                template: "<div class=\"fab-avatar-wrapper\" data-fab-wrapper=\"avatar\" [attr.data-rounded]=\"rounded\">\n  <div class=\"fab-avatar\" [attr.data-color]=\"color\" [attr.data-rounded]=\"rounded\" [attr.data-size]=\"size\">\n    <fab-icon *ngIf=\"!showInitials && icon\" [props]=\"icon\"></fab-icon>\n    <span class=\"fab-avatar__initials\" *ngIf=\"showInitials\">{{initials}}</span>\n    <div class=\"fab-avatar__image\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\" *ngIf=\"src\"></div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{display:inline-block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { color: [{
            type: Input
        }], darken: [{
            type: Input
        }], faded: [{
            type: Input
        }], icon: [{
            type: Input
        }], lighten: [{
            type: Input
        }], rounded: [{
            type: Input
        }], showInitials: [{
            type: Input
        }], size: [{
            type: Input
        }], src: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/avatar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AvatarModule {
}
AvatarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AvatarModule });
AvatarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AvatarModule_Factory(t) { return new (t || AvatarModule)(); }, imports: [[
            CommonModule,
            IconsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AvatarModule, { declarations: function () { return [AvatarComponent]; }, imports: function () { return [CommonModule,
        IconsModule]; }, exports: function () { return [AvatarComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AvatarModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
BadgeComponent.ɵfac = function BadgeComponent_Factory(t) { return new (t || BadgeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
BadgeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BadgeComponent, selectors: [["fab-badge"]], inputs: { circle: "circle", clear: "clear", darken: "darken", faded: "faded", glow: "glow", invert: "invert", label: "label", lighten: "lighten", outline: "outline", placement: "placement", placementX: "placementX", placementY: "placementY", rounded: "rounded", size: "size", color: "color" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 4, vars: 2, consts: [["data-fab-wrapper", "badge", 1, "fab-badge-wrapper"], ["data-fab-component", "badge", 1, "fab-badge"], [4, "ngIf"]], template: function BadgeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, BadgeComponent_span_2_Template, 2, 1, "span", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-has-placement", !!ctx.placement);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.NgIf], styles: ["[_nghost-%COMP%]{display:inline-block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BadgeComponent, [{
        type: Component,
        args: [{
                selector: 'fab-badge',
                template: "<div class=\"fab-badge-wrapper\" [attr.data-has-placement]=\"!!placement\" data-fab-wrapper=\"badge\">\n  <div class=\"fab-badge\" data-fab-component=\"badge\">\n    <span *ngIf=\"label\">{{label}}</span>\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: [":host{display:inline-block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { circle: [{
            type: Input
        }], clear: [{
            type: Input
        }], darken: [{
            type: Input
        }], faded: [{
            type: Input
        }], glow: [{
            type: Input
        }], invert: [{
            type: Input
        }], label: [{
            type: Input
        }], lighten: [{
            type: Input
        }], outline: [{
            type: Input
        }], placement: [{
            type: Input
        }], placementX: [{
            type: Input
        }], placementY: [{
            type: Input
        }], rounded: [{
            type: Input
        }], size: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/badge.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BadgeModule {
}
BadgeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BadgeModule });
BadgeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BadgeModule_Factory(t) { return new (t || BadgeModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BadgeModule, { declarations: function () { return [BadgeComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BadgeComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BadgeModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["fab-button"]], inputs: { border: "border", compact: "compact", glow: "glow", circle: "circle", clear: "clear", color: "color", darken: "darken", disabled: "disabled", expand: "expand", faded: "faded", gradient: "gradient", href: "href", invert: "invert", lighten: "lighten", loading: "loading", label: "label", outline: "outline", rel: "rel", rounded: "rounded", size: "size", target: "target", wide: "wide" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 4, vars: 2, consts: [["class", "fab-button", "data-fab-component", "button", 3, "disabled", 4, "ngIf"], ["class", "fab-button", "data-fab-component", "button", 4, "ngIf"], ["content", ""], ["data-fab-component", "button", 1, "fab-button", 3, "disabled"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["data-fab-component", "button", 1, "fab-button"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵtemplate(0, ButtonComponent_button_0_Template, 3, 9, "button", 0);
        ɵngcc0.ɵɵtemplate(1, ButtonComponent_a_1_Template, 3, 11, "a", 1);
        ɵngcc0.ɵɵtemplate(2, ButtonComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.href && !ctx.props.href);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.href || ctx.props.href);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:inline-block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'fab-button',
                template: "<button class=\"fab-button\" [attr.data-border]=\"border || props.border\" [attr.data-color]=\"color || props.color\"\n  [attr.data-circle]=\"!!circle || !!props.circle\" [attr.data-expand]=\"expand || props.expand\"\n  [attr.data-outline]=\"outline || props.outline\" [attr.data-rounded]=\"rounded || props.rounded\"\n  [disabled]=\"disabled || props.disabled\" data-fab-component=\"button\" *ngIf=\"!href && !props.href\">\n  <ng-container *ngIf=\"!label && !props.label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"label || props.label\">{{label || props.label}}</ng-container>\n</button>\n\n<a class=\"fab-button\" [attr.data-border]=\"border || props.border\" [attr.data-color]=\"color || props.color\"\n  [attr.data-circle]=\"!!circle || !!props.circle\" [attr.data-expand]=\"expand || props.expand\"\n  [attr.data-outline]=\"outline || props.outline\" [attr.data-rounded]=\"rounded || props.rounded\"\n  [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  data-fab-component=\"button\" *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"!label && !props.label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"label || props.label\">{{label || props.label}}</ng-container>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [":host{display:inline-block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { border: [{
            type: Input
        }], compact: [{
            type: Input
        }], glow: [{
            type: Input
        }], circle: [{
            type: Input
        }], clear: [{
            type: Input
        }], color: [{
            type: Input
        }], darken: [{
            type: Input
        }], disabled: [{
            type: Input
        }], expand: [{
            type: Input
        }], faded: [{
            type: Input
        }], gradient: [{
            type: Input
        }], href: [{
            type: Input
        }], invert: [{
            type: Input
        }], lighten: [{
            type: Input
        }], loading: [{
            type: Input
        }], label: [{
            type: Input
        }], outline: [{
            type: Input
        }], rel: [{
            type: Input
        }], rounded: [{
            type: Input
        }], size: [{
            type: Input
        }], target: [{
            type: Input
        }], wide: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonModule {
}
ButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonModule, { declarations: function () { return [ButtonComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ButtonComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
ButtonGroupComponent.ɵfac = function ButtonGroupComponent_Factory(t) { return new (t || ButtonGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ButtonGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtonGroupComponent, selectors: [["fab-button-group"]], inputs: { divider: "divider", dividerColor: "dividerColor", layout: "layout", color: "color" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["data-fab-component", "buttonGroup", 1, "fab-button-group"]], template: function ButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .fab-button-group-wrapper[_ngcontent-%COMP%]{display:block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonGroupComponent, [{
        type: Component,
        args: [{
                selector: 'fab-button-group',
                template: "<div class=\"fab-button-group\" data-fab-component=\"buttonGroup\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{display:inline-block}:host .fab-button-group-wrapper{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { divider: [{
            type: Input
        }], dividerColor: [{
            type: Input
        }], layout: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/button-group.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonGroupModule {
}
ButtonGroupModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonGroupModule });
ButtonGroupModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonGroupModule_Factory(t) { return new (t || ButtonGroupModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonGroupModule, { declarations: function () { return [ButtonGroupComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ButtonGroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonGroupModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
CardImageComponent.ɵfac = function CardImageComponent_Factory(t) { return new (t || CardImageComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
CardImageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardImageComponent, selectors: [["fab-card-image"]], inputs: { adaptColor: "adaptColor", cover: "cover", darken: "darken", faded: "faded", icon: "icon", lighten: "lighten", color: "color", height: "height", layout: "layout", src: "src", width: "width" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [["data-fab-component", "cardImage", 1, "fab-card-image"], [3, "props"], [3, "src", 4, "ngIf"], [3, "src"]], template: function CardImageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "fab-icon", 1);
        ɵngcc0.ɵɵtemplate(2, CardImageComponent_img_2_Template, 1, 1, "img", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-layout", ctx.layout);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("props", ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.src);
    } }, directives: [IconComponent, ɵngcc1.NgIf], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardImageComponent, [{
        type: Component,
        args: [{
                selector: 'fab-card-image',
                template: "<div class=\"fab-card-image\" [attr.data-layout]=\"layout\"\n  data-fab-component=\"cardImage\">\n  <fab-icon [props]=\"icon\"></fab-icon>\n  <img [src]=\"src\" *ngIf=\"src\">\n  <ng-content></ng-content>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { adaptColor: [{
            type: Input
        }], cover: [{
            type: Input
        }], darken: [{
            type: Input
        }], faded: [{
            type: Input
        }], icon: [{
            type: Input
        }], lighten: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], layout: [{
            type: Input
        }], src: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();

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
CardSectionComponent.ɵfac = function CardSectionComponent_Factory(t) { return new (t || CardSectionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
CardSectionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardSectionComponent, selectors: [["fab-card-section"]], inputs: { darken: "darken", expand: "expand", faded: "faded", layout: "layout", lighten: "lighten", color: "color", divider: "divider", padding: "padding" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["data-fab-component", "cardSection", 1, "fab-card-section"]], template: function CardSectionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-layout", ctx.layout);
    } }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardSectionComponent, [{
        type: Component,
        args: [{
                selector: 'fab-card-section',
                template: "<div class=\"fab-card-section\" [attr.data-layout]=\"layout\" data-fab-component=\"cardSection\">\n  <ng-content></ng-content>\n</div>\n\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { darken: [{
            type: Input
        }], expand: [{
            type: Input
        }], faded: [{
            type: Input
        }], layout: [{
            type: Input
        }], lighten: [{
            type: Input
        }], color: [{
            type: Input
        }], divider: [{
            type: Input
        }], padding: [{
            type: Input
        }] }); })();

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
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
CardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardComponent, selectors: [["fab-card"]], contentQueries: function CardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CardImageComponent, false);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CardSectionComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cardImageComponents = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cardSectionComponents = _t);
    } }, inputs: { glow: "glow", layout: "layout", padding: "padding", color: "color" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["data-fab-component", "card", 1, "fab-card"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'fab-card',
                template: "<div class=\"fab-card\" data-fab-component=\"card\">\n    <ng-content></ng-content>\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { glow: [{
            type: Input
        }], layout: [{
            type: Input
        }], padding: [{
            type: Input
        }], cardImageComponents: [{
            type: ContentChildren,
            args: [CardImageComponent]
        }], cardSectionComponents: [{
            type: ContentChildren,
            args: [CardSectionComponent]
        }], color: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardModule {
}
CardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CardModule });
CardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[
            CommonModule,
            IconsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CardModule, { declarations: function () { return [CardComponent,
        CardImageComponent,
        CardSectionComponent]; }, imports: function () { return [CommonModule,
        IconsModule]; }, exports: function () { return [CardComponent,
        CardImageComponent,
        CardSectionComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
CheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["fab-checkbox"]], inputs: { checked: "checked", disabled: "disabled", indeterminate: "indeterminate", readOnly: "readOnly", rounded: "rounded", size: "size", activeColor: "activeColor", color: "color", inactiveColor: "inactiveColor", label: "label" }, outputs: { change: "change", check: "check", uncheck: "uncheck" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 8, vars: 10, consts: [["data-fab-wrapper", "checkbox", 1, "fab-checkbox-wrapper"], ["data-fab-component", "checkbox", 1, "fab-checkbox"], [1, "fab-checkbox__square", 3, "click"], [3, "props"], [1, "fab-checkbox__label"], ["type", "checkbox", 3, "checked", "disabled", "indeterminate", "change"], [4, "ngIf"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵlistener("click", function CheckboxComponent_Template_div_click_2_listener() { return ctx.handleChange(); });
        ɵngcc0.ɵɵelement(3, "fab-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "label", 4);
        ɵngcc0.ɵɵelementStart(5, "input", 5);
        ɵngcc0.ɵɵlistener("change", function CheckboxComponent_Template_input_change_5_listener($event) { return ctx.handleChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, CheckboxComponent_ng_container_6_Template, 2, 1, "ng-container", 6);
        ɵngcc0.ɵɵtemplate(7, CheckboxComponent_ng_container_7_Template, 2, 0, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("data-checked", ctx.checked)("data-disabled", ctx.disabled)("data-indeterminate", ctx.indeterminate)("data-read-only", ctx.readOnly);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("props", ctx.currentIcon);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled)("indeterminate", ctx.indeterminate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.label);
    } }, directives: [IconComponent, ɵngcc1.NgIf], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'fab-checkbox',
                template: "<div class=\"fab-checkbox-wrapper\" data-fab-wrapper=\"checkbox\">\n  <div class=\"fab-checkbox\" [attr.data-checked]=\"checked\" [attr.data-disabled]=\"disabled\"\n    [attr.data-indeterminate]=\"indeterminate\" [attr.data-read-only]=\"readOnly\" data-fab-component=\"checkbox\">\n    <div class=\"fab-checkbox__square\" (click)=\"handleChange()\">\n      <fab-icon [props]=\"currentIcon\"></fab-icon>\n    </div>\n    <label class=\"fab-checkbox__label\">\n      <input [checked]=\"checked\" [disabled]=\"disabled\" [indeterminate]=\"indeterminate\" (change)=\"handleChange($event)\"\n        type=\"checkbox\">\n      <ng-container *ngIf=\"label\">{{label}}</ng-container>\n      <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n      </ng-container>\n    </label>\n  </div>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], indeterminate: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], rounded: [{
            type: Input
        }], size: [{
            type: Input
        }], change: [{
            type: Output
        }], check: [{
            type: Output
        }], uncheck: [{
            type: Output
        }], activeColor: [{
            type: Input
        }], color: [{
            type: Input
        }], inactiveColor: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/checkbox.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxModule {
}
CheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CheckboxModule });
CheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, imports: [[
            CommonModule,
            IconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CheckboxModule, { declarations: function () { return [CheckboxComponent]; }, imports: function () { return [CommonModule,
        IconsModule]; }, exports: function () { return [CheckboxComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CheckboxModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
DividerComponent.ɵfac = function DividerComponent_Factory(t) { return new (t || DividerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
DividerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DividerComponent, selectors: [["fab-divider"]], inputs: { label: "label", textColor: "textColor" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "fab-divider"]], template: function DividerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, styles: ["[_nghost-%COMP%]{display:block}"] });
/** @nocollapse */
DividerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
DividerComponent.propDecorators = {
    label: [{ type: Input }],
    textColor: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DividerComponent, [{
        type: Component,
        args: [{
                selector: 'fab-divider',
                template: "<div class=\"fab-divider\"></div>",
                styles: [":host{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { label: [{
            type: Input
        }], textColor: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/divider.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DividerModule {
}
DividerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DividerModule });
DividerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DividerModule_Factory(t) { return new (t || DividerModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DividerModule, { declarations: function () { return [DividerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [DividerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DividerModule, [{
        type: NgModule,
        args: [{
                declarations: [DividerComponent],
                entryComponents: [
                    DividerComponent
                ],
                imports: [CommonModule],
                exports: [DividerComponent]
            }]
    }], null, null); })();

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
DropdownHeaderComponent.ɵfac = function DropdownHeaderComponent_Factory(t) { return new (t || DropdownHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
DropdownHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropdownHeaderComponent, selectors: [["fab-dropdown-header"]], inputs: { color: "color", label: "label" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["data-fab-component", "dropdownHeader", 1, "fab-dropdown-header"], [4, "ngIf"]], template: function DropdownHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DropdownHeaderComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, DropdownHeaderComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.label);
    } }, directives: [ɵngcc1.NgIf], encapsulation: 2 });
/** @nocollapse */
DropdownHeaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
DropdownHeaderComponent.propDecorators = {
    color: [{ type: Input }],
    label: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'fab-dropdown-header',
                template: "<div class=\"fab-dropdown-header\" data-fab-component=\"dropdownHeader\">\n  <ng-container *ngIf=\"label\">{{label}}</ng-container>\n  <ng-container *ngIf=\"!label\">\n    <ng-content></ng-content>\n  </ng-container>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { color: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();

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
DropdownItemComponent.ɵfac = function DropdownItemComponent_Factory(t) { return new (t || DropdownItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
DropdownItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropdownItemComponent, selectors: [["fab-dropdown-item"]], inputs: { button: "button", clickToClose: "clickToClose", invert: "invert", props: "props", target: "target", color: "color", href: "href", label: "label", parentColor: "parentColor", rel: "rel", size: "size" }, outputs: { clicked: "clicked" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3, decls: 5, vars: 3, consts: [["class", "fab-dropdown-item", "data-fab-component", "dropdownItem", 4, "ngIf"], ["class", "fab-dropdown-item", "data-fab-component", "dropdownItem", 3, "click", 4, "ngIf"], ["content", ""], ["data-fab-component", "dropdownItem", 1, "fab-dropdown-item"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["data-fab-component", "dropdownItem", 1, "fab-dropdown-item", 3, "click"]], template: function DropdownItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c3);
        ɵngcc0.ɵɵtemplate(0, DropdownItemComponent_a_0_Template, 3, 5, "a", 0);
        ɵngcc0.ɵɵtemplate(1, DropdownItemComponent_button_1_Template, 3, 2, "button", 1);
        ɵngcc0.ɵɵtemplate(2, DropdownItemComponent_div_2_Template, 3, 2, "div", 0);
        ɵngcc0.ɵɵtemplate(3, DropdownItemComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.href || ctx.props.href);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.button || ctx.props.button) && !ctx.href && !ctx.props.href);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.button && !ctx.href && !ctx.props.button && !ctx.props.href);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownItemComponent, [{
        type: Component,
        args: [{
                selector: 'fab-dropdown-item',
                template: "<a class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</a>\n\n<button class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" (click)=\"handleClick()\"\n  *ngIf=\"(button || props.button) && !href && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</button>\n\n<div class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" *ngIf=\"!button && !href && !props.button && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [":host{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { button: [{
            type: Input
        }], clickToClose: [{
            type: Input
        }], invert: [{
            type: Input
        }], props: [{
            type: Input
        }], target: [{
            type: Input
        }], clicked: [{
            type: Output
        }], color: [{
            type: Input
        }], href: [{
            type: Input
        }], label: [{
            type: Input
        }], parentColor: [{
            type: Input
        }], rel: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

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
DropdownMenuComponent.ɵfac = function DropdownMenuComponent_Factory(t) { return new (t || DropdownMenuComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
DropdownMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropdownMenuComponent, selectors: [["fab-dropdown-menu"]], contentQueries: function DropdownMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, DropdownHeaderComponent, false);
        ɵngcc0.ɵɵcontentQuery(dirIndex, DropdownItemComponent, false);
        ɵngcc0.ɵɵcontentQuery(dirIndex, DividerComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentHeader = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentItems = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.divider = _t);
    } }, viewQuery: function DropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(DropdownHeaderComponent, true);
        ɵngcc0.ɵɵviewQuery(DropdownItemComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewHeader = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewItems = _t);
    } }, inputs: { clickToClose: "clickToClose", padding: "padding", alignment: "alignment", color: "color", direction: "direction", items: "items", size: "size" }, outputs: { clickItem: "clickItem", closed: "closed" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 5, vars: 4, consts: [["data-fab-component", "dropdownMenu", 1, "fab-dropdown-menu"], [4, "ngIf"], ["content", ""], [3, "props", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet"], [3, "props"]], template: function DropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DropdownMenuComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, DropdownMenuComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, DropdownMenuComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-direction", ctx.direction)("data-open", ctx.isOpen);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.items);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.items);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, DropdownItemComponent], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownMenuComponent, [{
        type: Component,
        args: [{
                selector: 'fab-dropdown-menu',
                template: "<div class=\"fab-dropdown-menu\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\"\n  data-fab-component=\"dropdownMenu\">\n  <ng-container *ngIf=\"items\">\n    <fab-dropdown-item *ngFor=\"let item of items\" [props]=\"item\"></fab-dropdown-item>\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n\n  <ng-container *ngIf=\"!items\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { clickToClose: [{
            type: Input
        }], padding: [{
            type: Input
        }], clickItem: [{
            type: Output
        }], closed: [{
            type: Output
        }], contentHeader: [{
            type: ContentChildren,
            args: [DropdownHeaderComponent]
        }], contentItems: [{
            type: ContentChildren,
            args: [DropdownItemComponent]
        }], divider: [{
            type: ContentChildren,
            args: [DividerComponent]
        }], viewHeader: [{
            type: ViewChildren,
            args: [DropdownHeaderComponent]
        }], viewItems: [{
            type: ViewChildren,
            args: [DropdownItemComponent]
        }], alignment: [{
            type: Input
        }], color: [{
            type: Input
        }], direction: [{
            type: Input
        }], items: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

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
DropdownToggleComponent.ɵfac = function DropdownToggleComponent_Factory(t) { return new (t || DropdownToggleComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
DropdownToggleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropdownToggleComponent, selectors: [["fab-dropdown-toggle"]], viewQuery: function DropdownToggleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c4, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.labelEl = _t.first);
    } }, inputs: { arrow: "arrow", isOpen: "isOpen", direction: "direction", icon: "icon", label: "label" }, outputs: { toggle: "toggle" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 5, vars: 6, consts: [[1, "fab-dropdown-toggle", 3, "click"], [3, "props"], ["class", "fab-dropdown-toggle__label", 4, "ngIf"], ["class", "fab-dropdown-toggle__chevron", 4, "ngIf"], [1, "fab-dropdown-toggle__label"], ["label", ""], [1, "fab-dropdown-toggle__chevron"], ["name", "chevron-down"]], template: function DropdownToggleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function DropdownToggleComponent_Template_div_click_0_listener() { return ctx.handleClick(); });
        ɵngcc0.ɵɵelementStart(1, "fab-button", 1);
        ɵngcc0.ɵɵtemplate(2, DropdownToggleComponent_span_2_Template, 3, 0, "span", 2);
        ɵngcc0.ɵɵtemplate(3, DropdownToggleComponent_span_3_Template, 2, 1, "span", 2);
        ɵngcc0.ɵɵtemplate(4, DropdownToggleComponent_span_4_Template, 2, 1, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-direction", ctx.direction)("data-open", ctx.isOpen);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("props", ctx.props);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.arrow);
    } }, directives: [ButtonComponent, ɵngcc1.NgIf, IconComponent], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownToggleComponent, [{
        type: Component,
        args: [{
                selector: 'fab-dropdown-toggle',
                template: "<div class=\"fab-dropdown-toggle\" (click)=\"handleClick()\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\">\n  <fab-button [props]=\"props\">\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"!label\" #label>\n      <ng-content></ng-content>\n    </span>\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"label\">{{ label }}</span>\n    <span class=\"fab-dropdown-toggle__chevron\" *ngIf=\"arrow\" [attr.data-only-child]=\"arrowIsOnlyChild\">\n      <fab-icon name=\"chevron-down\"></fab-icon>\n    </span>\n  </fab-button>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { arrow: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], toggle: [{
            type: Output
        }], direction: [{
            type: Input
        }], icon: [{
            type: Input
        }], label: [{
            type: Input
        }], labelEl: [{
            type: ViewChild,
            args: ['label']
        }] }); })();

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
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
DropdownComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropdownComponent, selectors: [["fab-dropdown"]], contentQueries: function DropdownComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, DropdownMenuComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, DropdownToggleComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownMenu = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownToggle = _t.first);
    } }, inputs: { alignment: "alignment", direction: "direction", expand: "expand", isOpen: "isOpen" }, outputs: { close: "close", open: "open", toggle: "toggle" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["data-fab-component", "dropdown", 1, "fab-dropdown"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-open", ctx.isOpen);
    } }, styles: ["[_nghost-%COMP%]{display:inline-block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownComponent, [{
        type: Component,
        args: [{
                selector: 'fab-dropdown',
                template: "<div class=\"fab-dropdown\" [attr.data-open]=\"isOpen\" data-fab-component=\"dropdown\">\n  <ng-content></ng-content>\n</div>",
                styles: [":host{display:inline-block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { alignment: [{
            type: Input
        }], direction: [{
            type: Input
        }], expand: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], close: [{
            type: Output
        }], open: [{
            type: Output
        }], toggle: [{
            type: Output
        }], dropdownMenu: [{
            type: ContentChild,
            args: [DropdownMenuComponent]
        }], dropdownToggle: [{
            type: ContentChild,
            args: [DropdownToggleComponent]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/dropdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownModule {
}
DropdownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DropdownModule });
DropdownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DropdownModule_Factory(t) { return new (t || DropdownModule)(); }, imports: [[
            ButtonModule,
            CommonModule,
            DividerModule,
            IconsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DropdownModule, { declarations: function () { return [DropdownComponent,
        DropdownHeaderComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent]; }, imports: function () { return [ButtonModule,
        CommonModule,
        DividerModule,
        IconsModule]; }, exports: function () { return [DropdownComponent,
        DropdownHeaderComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
ColumnComponent.ɵfac = function ColumnComponent_Factory(t) { return new (t || ColumnComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ColumnComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ColumnComponent, selectors: [["fab-column"], ["fab-col"]], inputs: { col: "col" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "fab-column"]], template: function ColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-col", ctx.col);
    } }, styles: ["[_nghost-%COMP%]{display:block}"] });
/** @nocollapse */
ColumnComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ColumnComponent.propDecorators = {
    col: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColumnComponent, [{
        type: Component,
        args: [{
                selector: 'fab-column, fab-col',
                template: "<div class=\"fab-column\" [attr.data-col]=\"col\">\n  <ng-content></ng-content>\n</div>",
                styles: [":host{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { col: [{
            type: Input
        }] }); })();

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
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ContainerComponent, selectors: [["fab-container"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["data-fab-component", "container", 1, "fab-container"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [""] });
/** @nocollapse */
ContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContainerComponent, [{
        type: Component,
        args: [{
                selector: 'fab-container',
                template: "<div class=\"fab-container\" data-fab-component=\"container\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, null); })();

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
RowComponent.ɵfac = function RowComponent_Factory(t) { return new (t || RowComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
RowComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RowComponent, selectors: [["fab-row"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["data-fab-component", "row", 1, "fab-row"]], template: function RowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]{display:block}"] });
/** @nocollapse */
RowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RowComponent, [{
        type: Component,
        args: [{
                selector: 'fab-row',
                template: "<div class=\"fab-row\" data-fab-component=\"row\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/grid.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridModule {
}
GridModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GridModule });
GridModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GridModule, { declarations: function () { return [ColumnComponent,
        ContainerComponent,
        RowComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ColumnComponent,
        ContainerComponent,
        RowComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
HeadingComponent.ɵfac = function HeadingComponent_Factory(t) { return new (t || HeadingComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
HeadingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HeadingComponent, selectors: [["fab-heading"]], inputs: { color: "color", level: "level", weight: "weight" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c5, decls: 8, vars: 6, consts: [["class", "fab-heading", "data-fab-component", "heading", 4, "ngIf"], ["content", ""], ["data-fab-component", "heading", 1, "fab-heading"], [4, "ngTemplateOutlet"]], template: function HeadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c5);
        ɵngcc0.ɵɵtemplate(0, HeadingComponent_h1_0_Template, 2, 1, "h1", 0);
        ɵngcc0.ɵɵtemplate(1, HeadingComponent_h2_1_Template, 2, 1, "h2", 0);
        ɵngcc0.ɵɵtemplate(2, HeadingComponent_h3_2_Template, 2, 1, "h3", 0);
        ɵngcc0.ɵɵtemplate(3, HeadingComponent_h4_3_Template, 2, 1, "h4", 0);
        ɵngcc0.ɵɵtemplate(4, HeadingComponent_h5_4_Template, 2, 1, "h5", 0);
        ɵngcc0.ɵɵtemplate(5, HeadingComponent_h6_5_Template, 2, 1, "h6", 0);
        ɵngcc0.ɵɵtemplate(6, HeadingComponent_ng_template_6_Template, 1, 0, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.level == 1);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.level == 2);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.level == 3);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.level == 4);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.level == 5);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.level == 6);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeadingComponent, [{
        type: Component,
        args: [{
                selector: 'fab-heading',
                template: "<h1 class=\"fab-heading\" *ngIf=\"level == 1\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h1>\n<h2 class=\"fab-heading\" *ngIf=\"level == 2\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h2>\n<h3 class=\"fab-heading\" *ngIf=\"level == 3\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h3>\n<h4 class=\"fab-heading\" *ngIf=\"level == 4\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h4>\n<h5 class=\"fab-heading\" *ngIf=\"level == 5\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h5>\n<h6 class=\"fab-heading\" *ngIf=\"level == 6\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h6>\n\n<ng-template #content><ng-content></ng-content></ng-template>",
                styles: [":host{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { color: [{
            type: Input
        }], level: [{
            type: Input
        }], weight: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/heading.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeadingModule {
}
HeadingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: HeadingModule });
HeadingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function HeadingModule_Factory(t) { return new (t || HeadingModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(HeadingModule, { declarations: function () { return [HeadingComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [HeadingComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeadingModule, [{
        type: NgModule,
        args: [{
                declarations: [HeadingComponent],
                entryComponents: [
                    HeadingComponent
                ],
                imports: [CommonModule],
                exports: [HeadingComponent]
            }]
    }], null, null); })();

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
ElementComponent.ɵfac = function ElementComponent_Factory(t) { return new (t || ElementComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ElementComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ElementComponent, selectors: [["fab-element"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "fab-element"]], template: function ElementComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]{display:inline-block}"] });
/** @nocollapse */
ElementComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ElementComponent, [{
        type: Component,
        args: [{
                selector: 'fab-element',
                template: "<span class=\"fab-element\"><ng-content></ng-content></span>",
                styles: [":host{display:inline-block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, null); })();

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
WrapperComponent.ɵfac = function WrapperComponent_Factory(t) { return new (t || WrapperComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
WrapperComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: WrapperComponent, selectors: [["fab-wrapper"]], inputs: { bgColor: "bgColor", color: "color" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["data-fab-component", "wrapper", 1, "fab-wrapper"]], template: function WrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .fab-wrapper[_ngcontent-%COMP%]{height:100%;width:100%}"] });
/** @nocollapse */
WrapperComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
WrapperComponent.propDecorators = {
    bgColor: [{ type: Input }],
    color: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WrapperComponent, [{
        type: Component,
        args: [{
                selector: 'fab-wrapper',
                template: "<div class=\"fab-wrapper\" data-fab-component=\"wrapper\">\n    <ng-content></ng-content>\n</div>",
                styles: [":host{display:block}:host .fab-wrapper{height:100%;width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { bgColor: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/helpers.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HelpersModule {
}
HelpersModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: HelpersModule });
HelpersModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function HelpersModule_Factory(t) { return new (t || HelpersModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(HelpersModule, { declarations: function () { return [ElementComponent,
        WrapperComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ElementComponent,
        WrapperComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HelpersModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
InnerIconComponent.ɵfac = function InnerIconComponent_Factory(t) { return new (t || InnerIconComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
InnerIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InnerIconComponent, selectors: [["fab-inner-icon"]], inputs: { color: "color", icon: "icon", parentProps: "parentProps" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "fab-inner-icon"]], template: function InnerIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "span", 0);
    } }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InnerIconComponent, [{
        type: Component,
        args: [{
                selector: 'fab-inner-icon',
                template: "<span class=\"fab-inner-icon\"></span>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { color: [{
            type: Input
        }], icon: [{
            type: Input
        }], parentProps: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/inner-icon.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InnerIconModule {
}
InnerIconModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InnerIconModule });
InnerIconModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InnerIconModule_Factory(t) { return new (t || InnerIconModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InnerIconModule, { declarations: function () { return [InnerIconComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InnerIconComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InnerIconModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
InputComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputComponent, selectors: [["fab-input"]], hostVars: 1, hostBindings: function InputComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-focus", ctx.focused);
    } }, inputs: { disabled: "disabled", expand: "expand", glow: "glow", passwordToggle: "passwordToggle", placeholder: "placeholder", rounded: "rounded", size: "size", textarea: "textarea", type: "type", color: "color", has: "has", icon: "icon", iconEnd: "iconEnd", iconStart: "iconStart", message: "message", status: "status", variant: "variant" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 10, vars: 11, consts: [["data-fab-wrapper", "input", 1, "fab-input-wrapper"], ["data-fab-component", "input", 1, "fab-input"], ["class", "fab-input__icon", "data-placement", "start", 4, "ngIf"], ["class", "fab-input__field", 3, "disabled", "blur", "focus", 4, "ngIf"], ["class", "fab-input__icon", "data-placement", "end", 4, "ngIf"], ["class", "fab-input__password-toggle", 3, "click", 4, "ngIf"], [1, "fab-input__elements"], ["class", "fab-input__message", 4, "ngIf"], ["data-placement", "start", 1, "fab-input__icon"], [3, "props", 4, "ngIf"], [3, "props"], [1, "fab-input__field", 3, "disabled", "blur", "focus"], ["data-placement", "end", 1, "fab-input__icon"], [1, "fab-input__password-toggle", 3, "click"], [3, "name"], [1, "fab-input__message"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, InputComponent_div_2_Template, 3, 2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, InputComponent_input_3_Template, 1, 3, "input", 3);
        ɵngcc0.ɵɵtemplate(4, InputComponent_textarea_4_Template, 1, 3, "textarea", 3);
        ɵngcc0.ɵɵtemplate(5, InputComponent_div_5_Template, 2, 1, "div", 4);
        ɵngcc0.ɵɵtemplate(6, InputComponent_button_6_Template, 2, 2, "button", 5);
        ɵngcc0.ɵɵelementStart(7, "div", 6);
        ɵngcc0.ɵɵprojection(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(9, InputComponent_div_9_Template, 3, 1, "div", 7);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-focus", ctx.hasFocus);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("data-disabled", ctx.disabled)("data-focus", ctx.hasFocus)("data-textarea", !!ctx.textarea)("data-variant", ctx.variant);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon || ctx.iconStart);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.textarea);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.textarea);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.iconEnd && !ctx.passwordToggle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.passwordToggle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message && ctx.message.text);
    } }, directives: [ɵngcc1.NgIf, IconComponent], styles: ["[_nghost-%COMP%]{display:block}[data-focus=true][_nghost-%COMP%]{z-index:1}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{
                selector: 'fab-input',
                template: "<div class=\"fab-input-wrapper\" [attr.data-focus]=\"hasFocus\" data-fab-wrapper=\"input\">\n  <div class=\"fab-input\" [attr.data-disabled]=\"disabled\" [attr.data-focus]=\"hasFocus\" [attr.data-textarea]=\"!!textarea\"\n    [attr.data-variant]=\"variant\" data-fab-component=\"input\">\n    <div class=\"fab-input__icon\" data-placement=\"start\" *ngIf=\"icon || iconStart\">\n      <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n      <fab-icon [props]=\"iconStart\" *ngIf=\"iconStart\"></fab-icon>\n    </div>\n\n    <input class=\"fab-input__field\" [disabled]=\"disabled\" (blur)=\"handleFocus(false)\" (focus)=\"handleFocus(true)\"\n      [attr.placeholder]=\"placeholder\" [attr.type]=\"type\" *ngIf=\"!textarea\">\n\n    <textarea class=\"fab-input__field\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\" [attr.type]=\"type\"\n      (blur)=\"handleFocus(false)\" (focus)=\"handleFocus(true)\" *ngIf=\"textarea\"></textarea>\n\n    <div class=\"fab-input__icon\" data-placement=\"end\" *ngIf=\"iconEnd && !passwordToggle\">\n      <fab-icon [props]=\"iconEnd\"></fab-icon>\n    </div>\n\n    <button class=\"fab-input__password-toggle\" (click)=\"toggleType()\" [attr.data-toggled]=\"type === 'text'\"\n      *ngIf=\"passwordToggle\">\n      <fab-icon [name]=\"toggleIcon\"></fab-icon>\n    </button>\n\n    <div class=\"fab-input__elements\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-input__message\" *ngIf=\"message && message.text\">\n    <span>{{message.text}}</span>\n  </div>\n</div>",
                styles: [":host{display:block}:host[data-focus=true]{z-index:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { focused: [{
            type: HostBinding,
            args: ['attr.data-focus']
        }], disabled: [{
            type: Input
        }], expand: [{
            type: Input
        }], glow: [{
            type: Input
        }], passwordToggle: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], rounded: [{
            type: Input
        }], size: [{
            type: Input
        }], textarea: [{
            type: Input
        }], type: [{
            type: Input
        }], color: [{
            type: Input
        }], has: [{
            type: Input
        }], icon: [{
            type: Input
        }], iconEnd: [{
            type: Input
        }], iconStart: [{
            type: Input
        }], message: [{
            type: Input
        }], status: [{
            type: Input
        }], variant: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputModule {
}
InputModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputModule });
InputModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputModule_Factory(t) { return new (t || InputModule)(); }, imports: [[
            CommonModule,
            IconsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputModule, { declarations: function () { return [InputComponent]; }, imports: function () { return [CommonModule,
        IconsModule]; }, exports: function () { return [InputComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
InputGroupComponent.ɵfac = function InputGroupComponent_Factory(t) { return new (t || InputGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
InputGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputGroupComponent, selectors: [["fab-input-group"]], inputs: { layout: "layout" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["data-fab-wrapper", "inputGroup", 1, "fab-input-group-wrapper"], ["data-fab-component", "inputGroup", 1, "fab-input-group"]], template: function InputGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/** @nocollapse */
InputGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
InputGroupComponent.propDecorators = {
    layout: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputGroupComponent, [{
        type: Component,
        args: [{
                selector: 'fab-input-group',
                template: "<div class=\"fab-input-group-wrapper\" data-fab-wrapper=\"inputGroup\">\n  <div class=\"fab-input-group\" data-fab-component=\"inputGroup\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { layout: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/input-group.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputGroupModule {
}
InputGroupModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputGroupModule });
InputGroupModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputGroupModule_Factory(t) { return new (t || InputGroupModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputGroupModule, { declarations: function () { return [InputGroupComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InputGroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputGroupModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
LinkComponent.ɵfac = function LinkComponent_Factory(t) { return new (t || LinkComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
LinkComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LinkComponent, selectors: [["fab-link"]], inputs: { target: "target", underline: "underline", color: "color", href: "href", label: "label", props: "props", rel: "rel", size: "size" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 5, consts: [["data-fab-component", "link", 1, "fab-link"], [4, "ngIf"]], template: function LinkComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "a", 0);
        ɵngcc0.ɵɵtemplate(1, LinkComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-size", ctx.size)("href", ctx.props.href || ctx.href, ɵngcc0.ɵɵsanitizeUrl)("rel", ctx.rel)("target", ctx.target);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.props.label || ctx.label);
    } }, directives: [ɵngcc1.NgIf], styles: ["[_nghost-%COMP%]{display:inline-block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LinkComponent, [{
        type: Component,
        args: [{
                selector: 'fab-link',
                template: "<a class=\"fab-link\" [attr.data-size]=\"size\" [attr.href]=\"props.href || href\" [attr.rel]=\"rel\" [attr.target]=\"target\" data-fab-component=\"link\">\n    <ng-container *ngIf=\"props.label || label\">{{props.label || label}}</ng-container>\n    <ng-content></ng-content>\n</a>",
                styles: [":host{display:inline-block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { target: [{
            type: Input
        }], underline: [{
            type: Input
        }], color: [{
            type: Input
        }], href: [{
            type: Input
        }], label: [{
            type: Input
        }], props: [{
            type: Input
        }], rel: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/link.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkModule {
}
LinkModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LinkModule });
LinkModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LinkModule_Factory(t) { return new (t || LinkModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LinkModule, { declarations: function () { return [LinkComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [LinkComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LinkModule, [{
        type: NgModule,
        args: [{
                declarations: [LinkComponent],
                entryComponents: [LinkComponent],
                imports: [CommonModule],
                exports: [LinkComponent]
            }]
    }], null, null); })();

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
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ListItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ListItemComponent, selectors: [["fab-list-item"]], inputs: { button: "button", item: "item", striped: "striped", target: "target", color: "color", divider: "divider", href: "href", label: "label", padding: "padding", props: "props", rel: "rel" }, outputs: { clicked: "clicked" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3, decls: 5, vars: 3, consts: [["class", "fab-list-item", "data-fab-component", "listItem", 4, "ngIf"], ["class", "fab-list-item", "data-fab-component", "listItem", 3, "click", 4, "ngIf"], ["content", ""], ["data-fab-component", "listItem", 1, "fab-list-item"], [4, "ngTemplateOutlet"], ["data-fab-component", "listItem", 1, "fab-list-item", 3, "click"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c3);
        ɵngcc0.ɵɵtemplate(0, ListItemComponent_div_0_Template, 3, 4, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ListItemComponent_button_1_Template, 3, 4, "button", 1);
        ɵngcc0.ɵɵtemplate(2, ListItemComponent_a_2_Template, 3, 7, "a", 0);
        ɵngcc0.ɵɵtemplate(3, ListItemComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.button && !ctx.href);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !!ctx.button);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !!ctx.href && !ctx.button);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [""] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListItemComponent, [{
        type: Component,
        args: [{
                selector: 'fab-list-item',
                template: "<div class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" *ngIf=\"!button && !href\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</div>\n\n<button class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" (click)=\"handleClick()\" *ngIf=\"!!button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</button>\n\n<a class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" [attr.href]=\"href\" [attr.rel]=\"rel\" [attr.target]=\"target\" *ngIf=\"!!href && !button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { button: [{
            type: Input
        }], item: [{
            type: Input
        }], striped: [{
            type: Input
        }], target: [{
            type: Input
        }], clicked: [{
            type: Output
        }], color: [{
            type: Input
        }], divider: [{
            type: Input
        }], href: [{
            type: Input
        }], label: [{
            type: Input
        }], padding: [{
            type: Input
        }], props: [{
            type: Input
        }], rel: [{
            type: Input
        }] }); })();

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
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ListComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ListComponent, selectors: [["fab-list"]], contentQueries: function ListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, ListItemComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentItems = _t);
    } }, viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(ListItemComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewItems = _t);
    } }, inputs: { divider: "divider", padding: "padding", striped: "striped", color: "color", props: "props" }, outputs: { clickItem: "clickItem" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["data-fab-wrapper", "list", 1, "fab-list-wrapper"], ["data-fab-component", "list", 1, "fab-list"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [""] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'fab-list',
                template: "<div class=\"fab-list-wrapper\" data-fab-wrapper=\"list\">\n  <div class=\"fab-list\" data-fab-component=\"list\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { divider: [{
            type: Input
        }], padding: [{
            type: Input
        }], striped: [{
            type: Input
        }], clickItem: [{
            type: Output
        }], contentItems: [{
            type: ContentChildren,
            args: [ListItemComponent]
        }], viewItems: [{
            type: ViewChildren,
            args: [ListItemComponent]
        }], color: [{
            type: Input
        }], props: [{
            type: Input
        }] }); })();

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
ListHeaderComponent.ɵfac = function ListHeaderComponent_Factory(t) { return new (t || ListHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ListHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ListHeaderComponent, selectors: [["fab-list-header"]], inputs: { color: "color" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["data-fab-component", "listHeader", 1, "fab-list-header"]], template: function ListHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/** @nocollapse */
ListHeaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ListHeaderComponent.propDecorators = {
    color: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'fab-list-header',
                template: "<div class=\"fab-list-header\" data-fab-component=\"listHeader\">\n    <ng-content></ng-content>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { color: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListModule {
}
ListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ListModule });
ListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ListModule_Factory(t) { return new (t || ListModule)(); }, imports: [[
            CommonModule,
            DividerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ListModule, { declarations: function () { return [ListComponent,
        ListHeaderComponent,
        ListItemComponent]; }, imports: function () { return [CommonModule,
        DividerModule]; }, exports: function () { return [ListComponent,
        ListHeaderComponent,
        ListItemComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
ModalSectionComponent.ɵfac = function ModalSectionComponent_Factory(t) { return new (t || ModalSectionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ModalSectionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ModalSectionComponent, selectors: [["fab-modal-section"]], inputs: { padding: "padding", adaptColor: "adaptColor", color: "color", darken: "darken", divider: "divider", dividerColor: "dividerColor", lighten: "lighten", parentColor: "parentColor" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["data-fab-component", "modalSection", 1, "fab-modal-section"]], template: function ModalSectionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModalSectionComponent, [{
        type: Component,
        args: [{
                selector: 'fab-modal-section',
                template: "<div class=\"fab-modal-section\" data-fab-component=\"modalSection\">\n  <ng-content></ng-content>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { padding: [{
            type: Input
        }], adaptColor: [{
            type: Input
        }], color: [{
            type: Input
        }], darken: [{
            type: Input
        }], divider: [{
            type: Input
        }], dividerColor: [{
            type: Input
        }], lighten: [{
            type: Input
        }], parentColor: [{
            type: Input
        }] }); })();

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
ModalBodyComponent.ɵfac = function ModalBodyComponent_Factory(t) { return new (t || ModalBodyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ModalBodyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ModalBodyComponent, selectors: [["fab-modal-body"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["data-fab-component", "modalBody", 1, "fab-modal-body", "fab-modal-section"]], template: function ModalBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/** @nocollapse */
ModalBodyComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModalBodyComponent, [{
        type: Component,
        args: [{
                selector: 'fab-modal-body',
                template: "<div class=\"fab-modal-body fab-modal-section\" data-fab-component=\"modalBody\">\n  <ng-content></ng-content>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, null); })();

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
ModalFooterComponent.ɵfac = function ModalFooterComponent_Factory(t) { return new (t || ModalFooterComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ModalFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ModalFooterComponent, selectors: [["fab-modal-footer"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["data-fab-component", "modalFooter", 1, "fab-modal-footer", "fab-modal-section"]], template: function ModalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/** @nocollapse */
ModalFooterComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModalFooterComponent, [{
        type: Component,
        args: [{
                selector: 'fab-modal-footer',
                template: "<div class=\"fab-modal-footer fab-modal-section\" data-fab-component=\"modalFooter\">\n  <ng-content></ng-content>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, null); })();

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
ModalHeaderComponent.ɵfac = function ModalHeaderComponent_Factory(t) { return new (t || ModalHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ModalHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ModalHeaderComponent, selectors: [["fab-modal-header"]], viewQuery: function ModalHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(CloseButtonComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.closeButton = _t.first);
    } }, outputs: { clickedClose: "clickedClose" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "fab-modal-header fab-modal-section", "data-fab-component", "modalHeader", 4, "ngIf"], ["data-fab-component", "modalHeader", 1, "fab-modal-header", "fab-modal-section"], [1, "fab-modal-header__content"], [3, "color", "click"]], template: function ModalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, ModalHeaderComponent_div_0_Template, 4, 1, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.init);
    } }, directives: [ɵngcc1.NgIf, CloseButtonComponent], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModalHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'fab-modal-header',
                template: "<div class=\"fab-modal-header fab-modal-section\" data-fab-component=\"modalHeader\" *ngIf=\"init\">\n  <div class=\"fab-modal-header__content\">\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button [color]=\"color || parentColor\" (click)=\"closeModal()\"></fab-close-button>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { clickedClose: [{
            type: Output
        }], closeButton: [{
            type: ViewChild,
            args: [CloseButtonComponent]
        }] }); })();

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
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ModalService)); };
ModalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["fab-modal"]], contentQueries: function ModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, ModalBodyComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, ModalFooterComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, ModalHeaderComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, ModalSectionComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalBody = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalFooter = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalHeader = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalSection = _t.first);
    } }, inputs: { glow: "glow", isOpen: "isOpen", size: "size", color: "color" }, outputs: { close: "close", open: "open" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "fab-modal-wrapper"], [1, "fab-modal__dialog"], [1, "fab-modal"], [1, "fab-modal__backdrop", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵlistener("click", function ModalComponent_Template_div_click_4_listener() { return ctx.closeModal(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-closing", ctx.modalService.modalIsClosing)("data-open", ctx.isOpen);
    } }, styles: [""] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{
                selector: 'fab-modal',
                template: "<div class=\"fab-modal-wrapper\" [attr.data-closing]=\"modalService.modalIsClosing\" [attr.data-open]=\"isOpen\">\n  <div class=\"fab-modal__dialog\">\n    <div class=\"fab-modal\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-modal__backdrop\" (click)=\"closeModal()\"></div>\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ModalService }]; }, { glow: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], size: [{
            type: Input
        }], close: [{
            type: Output
        }], open: [{
            type: Output
        }], modalBody: [{
            type: ContentChild,
            args: [ModalBodyComponent]
        }], modalFooter: [{
            type: ContentChild,
            args: [ModalFooterComponent]
        }], modalHeader: [{
            type: ContentChild,
            args: [ModalHeaderComponent]
        }], modalSection: [{
            type: ContentChild,
            args: [ModalSectionComponent]
        }], color: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/modal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalModule {
}
ModalModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ModalModule });
ModalModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); }, providers: [
        ModalService
    ], imports: [[
            CloseButtonModule,
            CommonModule,
            IconsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ModalModule, { declarations: function () { return [ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalSectionComponent]; }, imports: function () { return [CloseButtonModule,
        CommonModule,
        IconsModule]; }, exports: function () { return [ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalSectionComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModalModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
ResponsivenessModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ResponsivenessModule });
ResponsivenessModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ResponsivenessModule_Factory(t) { return new (t || ResponsivenessModule)(); }, imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ResponsivenessModule, { imports: function () { return [CommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ResponsivenessModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ]
            }]
    }], null, null); })();

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
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
SearchInputComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SearchInputComponent, selectors: [["fab-search-input"]], viewQuery: function SearchInputComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(ButtonComponent, true);
        ɵngcc0.ɵɵviewQuery(InputComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.buttonEl = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputEl = _t.first);
    } }, inputs: { button: "button", placeholder: "placeholder" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 4, vars: 5, consts: [["data-fab-wrapper", "searchInput", 1, "fab-search-input"], ["data-fab-wrapper", "searchInput", 3, "iconStart", "placeholder", "props"], [3, "props", 4, "ngIf"], [3, "props"], [3, "icon", "parentProps", 4, "ngIf"], [3, "icon", "parentProps"]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "fab-input", 1);
        ɵngcc0.ɵɵtemplate(2, SearchInputComponent_fab_button_2_Template, 2, 2, "fab-button", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("iconStart", ɵngcc0.ɵɵpureFunction0(4, _c6))("placeholder", ctx.placeholder)("props", ctx.inputProps);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.button);
    } }, directives: [InputComponent, ɵngcc1.NgIf, ButtonComponent,
        InnerIconComponent], styles: ["[_nghost-%COMP%]{display:block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SearchInputComponent, [{
        type: Component,
        args: [{
                selector: 'fab-search-input',
                template: "<div class=\"fab-search-input\" data-fab-wrapper=\"searchInput\">\n  <fab-input [iconStart]=\"{ name: 'search' }\" [placeholder]=\"placeholder\" [props]=\"inputProps\" data-fab-wrapper=\"searchInput\">\n    <fab-button *ngIf=\"button\" [props]=\"buttonProps\">\n      <fab-inner-icon *ngIf=\"button && button.icon\" [icon]=\"button.icon\" [parentProps]=\"button\"></fab-inner-icon>\n    </fab-button>\n    <ng-content></ng-content>\n  </fab-input>\n</div>",
                styles: [":host{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { button: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], buttonEl: [{
            type: ViewChild,
            args: [ButtonComponent]
        }], inputEl: [{
            type: ViewChild,
            args: [InputComponent]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/search-input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchInputModule {
}
SearchInputModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SearchInputModule });
SearchInputModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SearchInputModule_Factory(t) { return new (t || SearchInputModule)(); }, imports: [[
            ButtonModule,
            CommonModule,
            InnerIconModule,
            InputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SearchInputModule, { declarations: function () { return [SearchInputComponent]; }, imports: function () { return [ButtonModule,
        CommonModule,
        InnerIconModule,
        InputModule]; }, exports: function () { return [SearchInputComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SearchInputModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ContentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ContentComponent, selectors: [["fab-content"]], inputs: { active: "active", name: "name", scope: "scope" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 4, consts: [[1, "fab-content", 3, "ngClass"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.contentClass);
        ɵngcc0.ɵɵattribute("data-active", ctx.active)("data-name", ctx.name)("data-scope", ctx.scope);
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContentComponent, [{
        type: Component,
        args: [{
                selector: 'fab-content',
                template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { active: [{
            type: Input
        }], name: [{
            type: Input
        }], scope: [{
            type: Input
        }] }); })();

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
SelectorComponent.ɵfac = function SelectorComponent_Factory(t) { return new (t || SelectorComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
SelectorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SelectorComponent, selectors: [["fab-selector"]], inputs: { active: "active", activeColor: "activeColor", activeTextColor: "activeTextColor", clear: "clear", color: "color", expand: "expand", faded: "faded", href: "href", inactiveColor: "inactiveColor", inactiveTextColor: "inactiveTextColor", invert: "invert", layout: "layout", link: "link", name: "name", outline: "outline", rel: "rel", rounded: "rounded", scope: "scope", stacked: "stacked", target: "target", type: "type" }, outputs: { selectedSegment: "selectedSegment" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function SelectorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div");
    } }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectorComponent, [{
        type: Component,
        args: [{
                selector: 'fab-selector',
                template: '<div></div>'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { active: [{
            type: Input
        }], selectedSegment: [{
            type: Output
        }], activeColor: [{
            type: Input
        }], activeTextColor: [{
            type: Input
        }], clear: [{
            type: Input
        }], color: [{
            type: Input
        }], expand: [{
            type: Input
        }], faded: [{
            type: Input
        }], href: [{
            type: Input
        }], inactiveColor: [{
            type: Input
        }], inactiveTextColor: [{
            type: Input
        }], invert: [{
            type: Input
        }], layout: [{
            type: Input
        }], link: [{
            type: Input
        }], name: [{
            type: Input
        }], outline: [{
            type: Input
        }], rel: [{
            type: Input
        }], rounded: [{
            type: Input
        }], scope: [{
            type: Input
        }], stacked: [{
            type: Input
        }], target: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();

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
SegmentComponent.ɵfac = function SegmentComponent_Factory(t) { return new (t || SegmentComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
SegmentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SegmentComponent, selectors: [["fab-segment"]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SelectorComponent, useExisting: SegmentComponent }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c7, decls: 4, vars: 2, consts: [["class", "fab-segment", "data-fab-component", "segment", 3, "click", 4, "ngIf"], ["class", "fab-segment", "data-fab-component", "segment", 3, "href", "rel", "target", 4, "ngIf"], ["content", ""], ["data-fab-component", "segment", 1, "fab-segment", 3, "click"], [4, "ngTemplateOutlet"], ["data-fab-component", "segment", 1, "fab-segment", 3, "href", "rel", "target"]], template: function SegmentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c7);
        ɵngcc0.ɵɵtemplate(0, SegmentComponent_button_0_Template, 2, 3, "button", 0);
        ɵngcc0.ɵɵtemplate(1, SegmentComponent_a_1_Template, 2, 6, "a", 1);
        ɵngcc0.ɵɵtemplate(2, SegmentComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.href);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.href);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
/** @nocollapse */
SegmentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SegmentComponent, [{
        type: Component,
        args: [{
                providers: [{ provide: SelectorComponent, useExisting: SegmentComponent }],
                selector: 'fab-segment',
                template: "<button class=\"fab-segment\" (click)=\"handleClick()\" *ngIf=\"!href\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-segment\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, null); })();

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
SegmentContentComponent.ɵfac = function SegmentContentComponent_Factory(t) { return new (t || SegmentContentComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
SegmentContentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SegmentContentComponent, selectors: [["fab-segment-content"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 4, consts: [[1, "fab-content", 3, "ngClass"]], template: function SegmentContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.contentClass);
        ɵngcc0.ɵɵattribute("data-active", ctx.active)("data-name", ctx.name)("data-scope", ctx.scope);
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2 });
/** @nocollapse */
SegmentContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SegmentContentComponent, [{
        type: Component,
        args: [{
                template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                selector: 'fab-segment-content'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, null); })();

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
SegmentsComponent.ɵfac = function SegmentsComponent_Factory(t) { return new (t || SegmentsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
SegmentsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SegmentsComponent, selectors: [["fab-segments"]], contentQueries: function SegmentsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, SelectorComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.childComponents = _t);
    } }, inputs: { border: "border", clear: "clear", expand: "expand", faded: "faded", invert: "invert", layout: "layout", outline: "outline", rounded: "rounded", stacked: "stacked", active: "active", activeColor: "activeColor", activeTextColor: "activeTextColor", color: "color", inactiveColor: "inactiveColor", inactiveTextColor: "inactiveTextColor", scope: "scope", type: "type" }, outputs: { changeSegment: "changeSegment" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["data-fab-wrapper", "segments", 1, "fab-segments-wrapper"], ["data-fab-component", "segments", 1, "fab-segments"]], template: function SegmentsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]{display:block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SegmentsComponent, [{
        type: Component,
        args: [{
                selector: 'fab-segments',
                template: "<div class=\"fab-segments-wrapper\" data-fab-wrapper=\"segments\">\n  <div class=\"fab-segments\" data-fab-component=\"segments\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: [":host{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { border: [{
            type: Input
        }], clear: [{
            type: Input
        }], expand: [{
            type: Input
        }], faded: [{
            type: Input
        }], invert: [{
            type: Input
        }], layout: [{
            type: Input
        }], outline: [{
            type: Input
        }], rounded: [{
            type: Input
        }], stacked: [{
            type: Input
        }], changeSegment: [{
            type: Output
        }], active: [{
            type: Input
        }], childComponents: [{
            type: ContentChildren,
            args: [SelectorComponent]
        }], activeColor: [{
            type: Input
        }], activeTextColor: [{
            type: Input
        }], color: [{
            type: Input
        }], inactiveColor: [{
            type: Input
        }], inactiveTextColor: [{
            type: Input
        }], scope: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();

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
SegmentsDirective.ɵfac = function SegmentsDirective_Factory(t) { return new (t || SegmentsDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SegmentsDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SegmentsDirective, selectors: [["", "segmentIsActive", ""], ["", "segmentName", ""], ["", "segmentScope", ""]], inputs: { segmentIsActive: "segmentIsActive", segmentName: "segmentName", segmentScope: "segmentScope" } });
/** @nocollapse */
SegmentsDirective.ctorParameters = () => [
    { type: ElementRef }
];
SegmentsDirective.propDecorators = {
    segmentIsActive: [{ type: Input }],
    segmentName: [{ type: Input }],
    segmentScope: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SegmentsDirective, [{
        type: Directive,
        args: [{
                selector: '[segmentIsActive], [segmentName], [segmentScope]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { segmentIsActive: [{
            type: Input
        }], segmentName: [{
            type: Input
        }], segmentScope: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/segments.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SegmentsModule {
}
SegmentsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SegmentsModule });
SegmentsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SegmentsModule_Factory(t) { return new (t || SegmentsModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SegmentsModule, { declarations: function () { return [ContentComponent,
        SegmentComponent,
        SegmentContentComponent,
        SegmentsComponent,
        SegmentsDirective,
        SelectorComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ContentComponent,
        SegmentComponent,
        SegmentContentComponent,
        SegmentsComponent,
        SegmentsDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SegmentsModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
TabComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabComponent, selectors: [["fab-tab"]], inputs: { type: "type" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SelectorComponent, useExisting: TabComponent }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c7, decls: 4, vars: 2, consts: [["class", "fab-tab", "data-fab-component", "tab", 3, "click", 4, "ngIf"], ["class", "fab-tab", "data-fab-component", "tab", 3, "href", "rel", "target", 4, "ngIf"], ["content", ""], ["data-fab-component", "tab", 1, "fab-tab", 3, "click"], [4, "ngTemplateOutlet"], ["data-fab-component", "tab", 1, "fab-tab", 3, "href", "rel", "target"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c7);
        ɵngcc0.ɵɵtemplate(0, TabComponent_button_0_Template, 2, 3, "button", 0);
        ɵngcc0.ɵɵtemplate(1, TabComponent_a_1_Template, 2, 6, "a", 1);
        ɵngcc0.ɵɵtemplate(2, TabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.href && !ctx.link);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.href || ctx.link);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
TabComponent.propDecorators = {
    type: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabComponent, [{
        type: Component,
        args: [{
                providers: [{ provide: SelectorComponent, useExisting: TabComponent }],
                selector: 'fab-tab',
                template: "<button class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" (click)=\"handleClick()\" *ngIf=\"!href && !link\" data-fab-component=\"tab\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" *ngIf=\"href || link\" [href]=\"href || link\" [rel]=\"rel\" [target]=\"target\" data-fab-component=\"tab\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { type: [{
            type: Input
        }] }); })();

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
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
TabsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabsComponent, selectors: [["fab-tabs"]], contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TabComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabComponents = _t);
    } }, inputs: { alignment: "alignment", props: "props" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["data-fab-wrapper", "tabs", 1, "fab-tabs-wrapper"], ["data-fab-component", "tabs", 1, "fab-tabs"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]   .fab-tabs-wrapper[_ngcontent-%COMP%]{height:100%}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabsComponent, [{
        type: Component,
        args: [{
                selector: 'fab-tabs',
                template: "<div class=\"fab-tabs-wrapper\" data-fab-wrapper=\"tabs\">\n  <div class=\"fab-tabs\" data-fab-component=\"tabs\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: [":host .fab-tabs-wrapper{height:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { tabComponents: [{
            type: ContentChildren,
            args: [TabComponent]
        }], alignment: [{
            type: Input
        }], props: [{
            type: Input
        }] }); })();

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
TabContentComponent.ɵfac = function TabContentComponent_Factory(t) { return new (t || TabContentComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
TabContentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabContentComponent, selectors: [["fab-tab-content"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 4, consts: [[1, "fab-content", 3, "ngClass"]], template: function TabContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.contentClass);
        ɵngcc0.ɵɵattribute("data-active", ctx.active)("data-name", ctx.name)("data-scope", ctx.scope);
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2 });
/** @nocollapse */
TabContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabContentComponent, [{
        type: Component,
        args: [{
                template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                selector: 'fab-tab-content'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/tabs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsModule {
}
TabsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabsModule });
TabsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabsModule_Factory(t) { return new (t || TabsModule)(); }, imports: [[
            CommonModule,
            SegmentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabsModule, { declarations: function () { return [TabComponent,
        TabsComponent,
        TabContentComponent]; }, imports: function () { return [CommonModule,
        SegmentsModule]; }, exports: function () { return [TabComponent,
        TabsComponent,
        TabContentComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabsModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
TagComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TagComponent, selectors: [["fab-tag"]], inputs: { button: "button", clear: "clear", faded: "faded", glow: "glow", invert: "invert", outline: "outline", rounded: "rounded", size: "size", color: "color", href: "href", link: "link", placement: "placement", rel: "rel", target: "target" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c7, decls: 5, vars: 3, consts: [["class", "fab-tag", "data-fab-component", "tag", 4, "ngIf"], ["class", "fab-tag", "data-fab-component", "tag", 3, "href", "rel", "target", 4, "ngIf"], ["content", ""], ["data-fab-component", "tag", 1, "fab-tag"], [4, "ngTemplateOutlet"], ["data-fab-component", "tag", 1, "fab-tag", 3, "href", "rel", "target"]], template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c7);
        ɵngcc0.ɵɵtemplate(0, TagComponent_div_0_Template, 2, 3, "div", 0);
        ɵngcc0.ɵɵtemplate(1, TagComponent_button_1_Template, 2, 3, "button", 0);
        ɵngcc0.ɵɵtemplate(2, TagComponent_a_2_Template, 2, 6, "a", 1);
        ɵngcc0.ɵɵtemplate(3, TagComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.button && !ctx.href);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.button);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.href);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TagComponent, [{
        type: Component,
        args: [{
                selector: 'fab-tag',
                template: "<div class=\"fab-tag\" *ngIf=\"!button && !href\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</div>\n\n<button class=\"fab-tag\" *ngIf=\"button\" [attr.data-placement-x]=\"!!placement && placement.x\"\n  [attr.data-placement-y]=\"!!placement && placement.y\" data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tag\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { button: [{
            type: Input
        }], clear: [{
            type: Input
        }], faded: [{
            type: Input
        }], glow: [{
            type: Input
        }], invert: [{
            type: Input
        }], outline: [{
            type: Input
        }], rounded: [{
            type: Input
        }], size: [{
            type: Input
        }], color: [{
            type: Input
        }], href: [{
            type: Input
        }], link: [{
            type: Input
        }], placement: [{
            type: Input
        }], rel: [{
            type: Input
        }], target: [{
            type: Input
        }] }); })();

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
TagGroupComponent.ɵfac = function TagGroupComponent_Factory(t) { return new (t || TagGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
TagGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TagGroupComponent, selectors: [["fab-tag-group"]], contentQueries: function TagGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TagComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tagComponents = _t);
    } }, inputs: { color: "color", spacing: "spacing" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "fab-tag-group-wrapper"], [1, "fab-tag-group"]], template: function TagGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TagGroupComponent, [{
        type: Component,
        args: [{
                selector: 'fab-tag-group',
                template: "<div class=\"fab-tag-group-wrapper\">\n  <div class=\"fab-tag-group\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { tagComponents: [{
            type: ContentChildren,
            args: [TagComponent]
        }], color: [{
            type: Input
        }], spacing: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/tag.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: remove tag group component
class TagModule {
}
TagModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TagModule });
TagModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TagModule_Factory(t) { return new (t || TagModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TagModule, { declarations: function () { return [TagComponent,
        TagGroupComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TagComponent,
        TagGroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TagModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
TextComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TextComponent, selectors: [["fab-text"]], inputs: { inline: "inline", wrap: "wrap", weight: "weight", props: "props", aux: "aux", color: "color", content: "content", size: "size", strong: "strong" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 5, consts: [["data-fab-component", "text", 1, "fab-text"], [4, "ngIf"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, TextComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, TextComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-aux", ctx.aux)("data-color", ctx.color)("data-size", ctx.size);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.content);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.content);
    } }, directives: [ɵngcc1.NgIf], styles: [""] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextComponent, [{
        type: Component,
        args: [{
                selector: 'fab-text',
                template: "<div class=\"fab-text\" [attr.data-aux]=\"aux\" [attr.data-color]=\"color\" [attr.data-size]=\"size\" data-fab-component=\"text\">\n  <ng-container *ngIf=\"!content\">\n    <ng-content></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"content\">{{content}}</ng-container>\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { inline: [{
            type: Input
        }], wrap: [{
            type: Input
        }], weight: [{
            type: Input
        }], props: [{
            type: Input
        }], aux: [{
            type: Input
        }], color: [{
            type: Input
        }], content: [{
            type: Input
        }], size: [{
            type: Input
        }], strong: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/text.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextModule {
}
TextModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TextModule });
TextModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TextModule_Factory(t) { return new (t || TextModule)(); }, imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TextModule, { declarations: function () { return [TextComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TextComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
ThemeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ThemeModule });
ThemeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ThemeModule_Factory(t) { return new (t || ThemeModule)(); }, providers: [ThemeService], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ThemeModule, { imports: function () { return [CommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ThemeModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [CommonModule],
                exports: [],
                providers: [ThemeService]
            }]
    }], null, null); })();

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
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService), ɵngcc0.ɵɵdirectiveInject(ToastService)); };
ToastComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["fab-toast"]], contentQueries: function ToastComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, InnerIconComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.iconComponent = _t.first);
    } }, viewQuery: function ToastComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c8, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.toastEl = _t.first);
    } }, inputs: { hiding: "hiding", stacked: "stacked", button: "button", clear: "clear", color: "color", faded: "faded", glow: "glow", hideButton: "hideButton", href: "href", icon: "icon", index: "index", message: "message", outline: "outline", rel: "rel", stack: "stack", target: "target" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 6, vars: 8, consts: [["data-fab-wrapper", "toast", 1, "fab-toast-wrapper", 3, "ngStyle"], ["data-fab-component", "toast", 1, "fab-toast"], [3, "props", 4, "ngIf"], ["class", "fab-toast__message", 4, "ngIf"], ["class", "fab-toast__button", 4, "ngIf"], [3, "props"], [1, "fab-toast__message"], [1, "fab-toast__button"], ["size", "sm", 3, "props", "click", 4, "ngIf"], ["size", "sm", 3, "props", 4, "ngIf"], ["size", "sm", 3, "props", "click"], ["size", "sm", 3, "props"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ToastComponent_fab_icon_2_Template, 1, 1, "fab-icon", 2);
        ɵngcc0.ɵɵtemplate(3, ToastComponent_span_3_Template, 2, 1, "span", 3);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵtemplate(5, ToastComponent_div_5_Template, 3, 2, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(6, _c9, ctx.toastHeight));
        ɵngcc0.ɵɵattribute("data-hiding", ctx.hiding)("data-stacked", ctx.stacked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !!ctx.button || !!ctx.hideButton);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgIf, IconComponent,
        ButtonComponent], styles: ["[_nghost-%COMP%]{display:block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: 'fab-toast',
                template: "<div class=\"fab-toast-wrapper\" data-fab-wrapper=\"toast\" [attr.data-hiding]=\"hiding\"\n  [attr.data-stacked]=\"stacked\" [ngStyle]=\"{ 'height': toastHeight }\">\n  <div class=\"fab-toast\" data-fab-component=\"toast\">\n    <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n    <span class=\"fab-toast__message\" *ngIf=\"message\">{{message}}</span>\n    <ng-content></ng-content>\n    <div class=\"fab-toast__button\" *ngIf=\"!!button || !!hideButton\">\n      <fab-button (click)=\"hideToast()\" [props]=\"hideButton\" size=\"sm\" *ngIf=\"!!hideButton && !button\"></fab-button>\n      <fab-button [props]=\"button\" size=\"sm\" *ngIf=\"button\"></fab-button>\n    </div>\n  </div>\n</div>",
                styles: [":host{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: FabulaService }, { type: ToastService }]; }, { hiding: [{
            type: Input
        }], stacked: [{
            type: Input
        }], button: [{
            type: Input
        }], clear: [{
            type: Input
        }], color: [{
            type: Input
        }], faded: [{
            type: Input
        }], glow: [{
            type: Input
        }], hideButton: [{
            type: Input
        }], href: [{
            type: Input
        }], icon: [{
            type: Input
        }], index: [{
            type: Input
        }], message: [{
            type: Input
        }], outline: [{
            type: Input
        }], rel: [{
            type: Input
        }], stack: [{
            type: Input
        }], target: [{
            type: Input
        }], iconComponent: [{
            type: ContentChild,
            args: [InnerIconComponent]
        }], toastEl: [{
            type: ViewChild,
            args: ['toast']
        }] }); })();

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
ToastStackComponent.ɵfac = function ToastStackComponent_Factory(t) { return new (t || ToastStackComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ToastStackComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastStackComponent, selectors: [["fab-toast-stack"]], inputs: { placement: "placement", toasts: "toasts" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [[1, "fab-toast-stack"], [3, "hideButton", "color", "hiding", "icon", "index", "message", "stack", "stacked", 4, "ngFor", "ngForOf"], [3, "hideButton", "color", "hiding", "icon", "index", "message", "stack", "stacked"]], template: function ToastStackComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ToastStackComponent_fab_toast_1_Template, 1, 8, "fab-toast", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-placement-x", ctx.placement.x)("data-placement-y", ctx.placement.y);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.visibleToasts);
    } }, directives: [ɵngcc1.NgForOf, ToastComponent], encapsulation: 2 });
/** @nocollapse */
ToastStackComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ToastStackComponent.propDecorators = {
    placement: [{ type: Input }],
    toasts: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastStackComponent, [{
        type: Component,
        args: [{
                selector: 'fab-toast-stack',
                template: "<div class=\"fab-toast-stack\" [attr.data-placement-x]=\"placement.x\" [attr.data-placement-y]=\"placement.y\">\n  <fab-toast [hideButton]=\"toast.hideButton\" [color]=\"toast.color\" [hiding]=\"toast.hiding\" [icon]=\"toast.icon\" [index]=\"toast.index\" [message]=\"toast.message\" [stack]=\"toast.stack\" [stacked]=\"true\" *ngFor=\"let toast of visibleToasts\"></fab-toast>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { placement: [{
            type: Input
        }], toasts: [{
            type: Input
        }] }); })();

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
ToastPortalComponent.ɵfac = function ToastPortalComponent_Factory(t) { return new (t || ToastPortalComponent)(ɵngcc0.ɵɵdirectiveInject(ToastService)); };
ToastPortalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastPortalComponent, selectors: [["fab-toast-portal"]], decls: 1, vars: 1, consts: [[3, "placement", "toasts", 4, "ngFor", "ngForOf"], [3, "placement", "toasts"]], template: function ToastPortalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ToastPortalComponent_fab_toast_stack_0_Template, 1, 2, "fab-toast-stack", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.stacks);
    } }, directives: [ɵngcc1.NgForOf, ToastStackComponent], encapsulation: 2 });
/** @nocollapse */
ToastPortalComponent.ctorParameters = () => [
    { type: ToastService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastPortalComponent, [{
        type: Component,
        args: [{
                selector: 'fab-toast-portal',
                template: "<fab-toast-stack *ngFor=\"let stack of stacks\" [placement]=\"stack.placement\" [toasts]=\"stack.toasts\"></fab-toast-stack>"
            }]
    }], function () { return [{ type: ToastService }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/toast.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastModule {
}
ToastModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastModule });
ToastModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastModule_Factory(t) { return new (t || ToastModule)(); }, providers: [
        ToastService
    ], imports: [[
            ButtonModule,
            CommonModule,
            IconsModule,
            InnerIconModule,
            LinkModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastModule, { declarations: function () { return [ToastComponent,
        ToastPortalComponent,
        ToastStackComponent]; }, imports: function () { return [ButtonModule,
        CommonModule,
        IconsModule,
        InnerIconModule,
        LinkModule]; }, exports: function () { return [ToastComponent,
        ToastPortalComponent,
        ToastStackComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FabulaService)); };
ToggleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToggleComponent, selectors: [["fab-toggle"]], inputs: { active: "active", disabled: "disabled", rounded: "rounded", activeColor: "activeColor", color: "color", inactiveColor: "inactiveColor", label: "label", size: "size" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c7, decls: 8, vars: 4, consts: [["data-fab-wrapper", "toggle", 1, "fab-toggle-wrapper"], ["data-fab-component", "toggle", 1, "fab-toggle"], [1, "fab-toggle__switch", 3, "click"], [1, "fab-toggle__label", 3, "click"], [4, "ngIf"], ["content", ""], [4, "ngTemplateOutlet"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c7);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "button", 2);
        ɵngcc0.ɵɵlistener("click", function ToggleComponent_Template_button_click_2_listener() { return ctx.handleClick(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵlistener("click", function ToggleComponent_Template_div_click_3_listener() { return ctx.handleClick(); });
        ɵngcc0.ɵɵtemplate(4, ToggleComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        ɵngcc0.ɵɵtemplate(5, ToggleComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, ToggleComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-active", ctx.active)("data-disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:block}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToggleComponent, [{
        type: Component,
        args: [{
                selector: 'fab-toggle',
                template: "<div class=\"fab-toggle-wrapper\" [attr.data-active]=\"active\" [attr.data-disabled]=\"disabled\" data-fab-wrapper=\"toggle\">\n  <div class=\"fab-toggle\" data-fab-component=\"toggle\">\n    <button class=\"fab-toggle__switch\" (click)=\"handleClick()\"></button>\n    <div class=\"fab-toggle__label\" (click)=\"handleClick()\">\n      <ng-container *ngIf=\"!label\">\n        <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n      </ng-container>\n      <ng-container *ngIf=\"label\">\n        {{label}}\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [":host{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FabulaService }]; }, { active: [{
            type: Input
        }], disabled: [{
            type: Input
        }], rounded: [{
            type: Input
        }], activeColor: [{
            type: Input
        }], color: [{
            type: Input
        }], inactiveColor: [{
            type: Input
        }], label: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/toggle.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleModule {
}
ToggleModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToggleModule });
ToggleModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToggleModule_Factory(t) { return new (t || ToggleModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToggleModule, { declarations: function () { return [ToggleComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ToggleComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToggleModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TooltipComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TooltipComponent, selectors: [["fab-tooltip"]], inputs: { placement: "placement", color: "color", label: "label", offset: "offset" }, decls: 3, vars: 2, consts: [[1, "fab-tooltip"], [1, "fab-tooltip__label"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("data-placement", ctx.placement);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipComponent, [{
        type: Component,
        args: [{
                selector: 'fab-tooltip',
                template: "<div class=\"fab-tooltip\" [attr.data-placement]=\"placement\">\n  <span class=\"fab-tooltip__label\">{{label}}</span>\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { placement: [{
            type: Input
        }], color: [{
            type: Input
        }], label: [{
            type: Input
        }], offset: [{
            type: Input
        }] }); })();

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
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver)); };
TooltipDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "tooltip", ""], ["", "tooltipColor", ""], ["", "tooltipLabel", ""], ["", "tooltipOffset", ""], ["", "tooltipPlacement", ""]], inputs: { tooltip: "tooltip", tooltipColor: "tooltipColor", tooltipLabel: "tooltipLabel", tooltipOffset: "tooltipOffset", tooltipPlacement: "tooltipPlacement" } });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[tooltip],[tooltipColor],[tooltipLabel],[tooltipOffset],[tooltipPlacement]'
            }]
    }], function () { return [{ type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ComponentFactoryResolver }]; }, { tooltip: [{
            type: Input
        }], tooltipColor: [{
            type: Input
        }], tooltipLabel: [{
            type: Input
        }], tooltipOffset: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/tooltip.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipModule {
}
TooltipModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TooltipModule });
TooltipModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TooltipModule, { declarations: function () { return [TooltipComponent,
        TooltipDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TooltipComponent,
        TooltipDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
CommonDirective.ɵfac = function CommonDirective_Factory(t) { return new (t || CommonDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CommonDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CommonDirective, selectors: [["commonDirective"]] });
/** @nocollapse */
CommonDirective.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CommonDirective, [{
        type: Directive,
        args: [{
                selector: 'commonDirective'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();

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
AlignDirective.ɵfac = function AlignDirective_Factory(t) { return new (t || AlignDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
AlignDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: AlignDirective, selectors: [["", "al", ""], ["", "alH", ""], ["", "alV", ""], ["", "align", ""], ["", "alignH", ""], ["", "alignV", ""]], inputs: { al: "al", alH: "alH", alV: "alV", align: "align", alignH: "alignH", alignV: "alignV" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlignDirective, [{
        type: Directive,
        args: [{
                selector: '[al],[alH],[alV], [align], [alignH],[alignV]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { al: [{
            type: Input,
            args: ['al']
        }], alH: [{
            type: Input,
            args: ['alH']
        }], alV: [{
            type: Input,
            args: ['alV']
        }], align: [{
            type: Input
        }], alignH: [{
            type: Input,
            args: ['alignH']
        }], alignV: [{
            type: Input,
            args: ['alignV']
        }] }); })();

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
BlockDirective.ɵfac = function BlockDirective_Factory(t) { return new (t || BlockDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BlockDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BlockDirective, selectors: [["", "block", ""]], inputs: { block: "block" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
BlockDirective.ctorParameters = () => [
    { type: ElementRef }
];
BlockDirective.propDecorators = {
    block: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BlockDirective, [{
        type: Directive,
        args: [{
                selector: '[block]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { block: [{
            type: Input
        }] }); })();

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
ColumnDirective.ɵfac = function ColumnDirective_Factory(t) { return new (t || ColumnDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
ColumnDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ColumnDirective, selectors: [["", "col", ""], ["", "col-down", ""], ["", "col-up", ""], ["", "col-on", ""], ["", "col-not-on", ""]], inputs: { col: "col", colDown: ["col-down", "colDown"], colNotOn: ["col-not-on", "colNotOn"], colOn: ["col-on", "colOn"], colUp: ["col-up", "colUp"] } });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColumnDirective, [{
        type: Directive,
        args: [{
                selector: '[col],[col-down],[col-up],[col-on],[col-not-on]'
            }]
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ViewContainerRef }]; }, { col: [{
            type: Input
        }], colDown: [{
            type: Input,
            args: ['col-down']
        }], colNotOn: [{
            type: Input,
            args: ['col-not-on']
        }], colOn: [{
            type: Input,
            args: ['col-on']
        }], colUp: [{
            type: Input,
            args: ['col-up']
        }] }); })();

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
FlexDirective.ɵfac = function FlexDirective_Factory(t) { return new (t || FlexDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FlexDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FlexDirective, selectors: [["", "basis", ""], ["", "flex", ""], ["", "flow", ""], ["", "grow", ""], ["", "shrink", ""], ["", "wrap", ""]], inputs: { basis: "basis", direction: "direction", flex: "flex", flow: "flow", grow: "grow", shrink: "shrink", wrap: "wrap" } });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FlexDirective, [{
        type: Directive,
        args: [{
                selector: '[basis], [flex], [flow], [grow], [shrink], [wrap]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { basis: [{
            type: Input
        }], direction: [{
            type: Input
        }], flex: [{
            type: Input
        }], flow: [{
            type: Input
        }], grow: [{
            type: Input
        }], shrink: [{
            type: Input
        }], wrap: [{
            type: Input
        }] }); })();

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
FlowDirective.ɵfac = function FlowDirective_Factory(t) { return new (t || FlowDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FlowDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FlowDirective, selectors: [["", "flow", ""]], inputs: { flow: "flow" } });
/** @nocollapse */
FlowDirective.ctorParameters = () => [
    { type: ElementRef }
];
FlowDirective.propDecorators = {
    flow: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FlowDirective, [{
        type: Directive,
        args: [{
                selector: '[flow]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { flow: [{
            type: Input
        }] }); })();

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
GrowDirective.ɵfac = function GrowDirective_Factory(t) { return new (t || GrowDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
GrowDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GrowDirective, selectors: [["", "grow", ""]], inputs: { grow: "grow" } });
/** @nocollapse */
GrowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
GrowDirective.propDecorators = {
    grow: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GrowDirective, [{
        type: Directive,
        args: [{
                selector: '[grow]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { grow: [{
            type: Input
        }] }); })();

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
MarginDirective.ɵfac = function MarginDirective_Factory(t) { return new (t || MarginDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MarginDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MarginDirective, selectors: [["", "m", ""], ["", "mb", ""], ["", "ml", ""], ["", "mr", ""], ["", "mt", ""], ["", "mx", ""], ["", "my", ""]], inputs: { m: "m", mb: "mb", ml: "ml", mr: "mr", mt: "mt", mx: "mx", my: "my" } });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MarginDirective, [{
        type: Directive,
        args: [{
                selector: '[m],[mb],[ml],[mr],[mt],[mx],[my]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { m: [{
            type: Input
        }], mb: [{
            type: Input
        }], ml: [{
            type: Input
        }], mr: [{
            type: Input
        }], mt: [{
            type: Input
        }], mx: [{
            type: Input
        }], my: [{
            type: Input
        }] }); })();

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
OverflowDirective.ɵfac = function OverflowDirective_Factory(t) { return new (t || OverflowDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
OverflowDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: OverflowDirective, selectors: [["", "ov", ""], ["", "ovX", ""], ["", "ovY", ""]], inputs: { ov: "ov", ovX: "ovX", ovY: "ovY" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
OverflowDirective.ctorParameters = () => [
    { type: ElementRef }
];
OverflowDirective.propDecorators = {
    ov: [{ type: Input, args: ['ov',] }],
    ovX: [{ type: Input, args: ['ovX',] }],
    ovY: [{ type: Input, args: ['ovY',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverflowDirective, [{
        type: Directive,
        args: [{
                selector: '[ov],[ovX],[ovY]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { ov: [{
            type: Input,
            args: ['ov']
        }], ovX: [{
            type: Input,
            args: ['ovX']
        }], ovY: [{
            type: Input,
            args: ['ovY']
        }] }); })();

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
PaddingDirective.ɵfac = function PaddingDirective_Factory(t) { return new (t || PaddingDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
PaddingDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PaddingDirective, selectors: [["", "p", ""], ["", "pb", ""], ["", "pl", ""], ["", "pr", ""], ["", "pt", ""], ["", "px", ""], ["", "py", ""]], inputs: { p: "p", pb: "pb", pl: "pl", pr: "pr", pt: "pt", px: "px", py: "py" } });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PaddingDirective, [{
        type: Directive,
        args: [{
                selector: '[p],[pb],[pl],[pr],[pt],[px],[py]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { p: [{
            type: Input
        }], pb: [{
            type: Input
        }], pl: [{
            type: Input
        }], pr: [{
            type: Input
        }], pt: [{
            type: Input
        }], px: [{
            type: Input
        }], py: [{
            type: Input
        }] }); })();

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
RowDirective.ɵfac = function RowDirective_Factory(t) { return new (t || RowDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
RowDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RowDirective, selectors: [["", "row", ""]], inputs: { row: "row" } });
/** @nocollapse */
RowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
RowDirective.propDecorators = {
    row: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RowDirective, [{
        type: Directive,
        args: [{
                selector: '[row]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { row: [{
            type: Input
        }] }); })();

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
SizeDirective.ɵfac = function SizeDirective_Factory(t) { return new (t || SizeDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SizeDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SizeDirective, selectors: [["", "expand", ""], ["", "height", ""], ["", "width", ""]], inputs: { expand: "expand", height: "height", width: "width" } });
/** @nocollapse */
SizeDirective.ctorParameters = () => [
    { type: ElementRef }
];
SizeDirective.propDecorators = {
    expand: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SizeDirective, [{
        type: Directive,
        args: [{
                selector: '[expand], [height], [width]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { expand: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();

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
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) { return new (t || VisibilityDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
VisibilityDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: VisibilityDirective, selectors: [["", "hidden", ""], ["", "visible", ""]], inputs: { hidden: "hidden", visible: "visible" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
VisibilityDirective.ctorParameters = () => [
    { type: ElementRef }
];
VisibilityDirective.propDecorators = {
    hidden: [{ type: Input }],
    visible: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VisibilityDirective, [{
        type: Directive,
        args: [{
                selector: '[hidden],[visible]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { hidden: [{
            type: Input
        }], visible: [{
            type: Input
        }] }); })();

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
UtilsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: UtilsModule });
UtilsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function UtilsModule_Factory(t) { return new (t || UtilsModule)(); }, imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(UtilsModule, { declarations: function () { return [AlignDirective,
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
        VisibilityDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [AlignDirective,
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
        VisibilityDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UtilsModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fabula.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ModalService, ThemeService, ToastService, FabulaModule, AlertModule, AvatarModule, BadgeModule, ButtonModule, ButtonGroupModule, CardModule, CheckboxModule, DividerModule, DropdownModule, GridModule, HeadingModule, HelpersModule, IconsModule, InnerIconModule, InputModule, InputGroupModule, LinkModule, ListModule, ModalModule, ResponsivenessModule, SearchInputModule, SegmentsModule, TabsModule, TagModule, TextModule, ThemeModule, ToastModule, ToggleModule, TooltipModule, UtilsModule, AlertComponent as ɵd, AvatarComponent as ɵh, BadgeComponent as ɵi, ButtonGroupComponent as ɵk, ButtonComponent as ɵj, CardImageComponent as ɵm, CardSectionComponent as ɵn, CardComponent as ɵl, CheckboxComponent as ɵo, CloseButtonComponent as ɵf, ColumnComponent as ɵv, CommonComponent as ɵb, ContainerComponent as ɵw, ContentComponent as ɵbo, DividerComponent as ɵp, DropdownHeaderComponent as ɵs, DropdownItemComponent as ɵt, DropdownMenuComponent as ɵr, DropdownToggleComponent as ɵu, DropdownComponent as ɵq, ElementComponent as ɵz, HeadingComponent as ɵy, IconComponent as ɵg, InnerIconComponent as ɵbb, InputGroupComponent as ɵbd, InputComponent as ɵbc, LinkComponent as ɵbe, ListHeaderComponent as ɵbh, ListItemComponent as ɵbg, ListComponent as ɵbf, ModalBodyComponent as ɵbj, ModalFooterComponent as ɵbl, ModalHeaderComponent as ɵbm, ModalSectionComponent as ɵbk, ModalComponent as ɵbi, RowComponent as ɵx, SearchInputComponent as ɵbn, SegmentContentComponent as ɵbr, SegmentComponent as ɵbp, SegmentsComponent as ɵbs, SelectorComponent as ɵbq, TabContentComponent as ɵbw, TabComponent as ɵbu, TabsComponent as ɵbv, TagGroupComponent as ɵby, TagComponent as ɵbx, TextComponent as ɵbz, ToastPortalComponent as ɵcb, ToastStackComponent as ɵcc, ToastComponent as ɵca, ToggleComponent as ɵcd, TooltipComponent as ɵce, WrapperComponent as ɵba, AlignDirective as ɵcg, BlockDirective as ɵci, ColumnDirective as ɵcj, CommonDirective as ɵch, FlexDirective as ɵck, FlowDirective as ɵcl, GrowDirective as ɵcm, MarginDirective as ɵcn, OverflowDirective as ɵco, PaddingDirective as ɵcp, RowDirective as ɵcq, SegmentsDirective as ɵbt, SizeDirective as ɵcr, TooltipDirective as ɵcf, VisibilityDirective as ɵcs, CloseButtonModule as ɵe, FabulaService as ɵc };

//# sourceMappingURL=fabula.js.map