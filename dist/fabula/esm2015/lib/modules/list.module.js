/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ListComponent } from '../components/list/list.component';
import { ListHeaderComponent } from '../components/list-header/list-header.component';
import { ListItemComponent } from '../components/list-item/list-item.component';
// Modules
import { DividerModule } from './divider.module';
export class ListModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUcvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7O0FBR2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXVCakQsTUFBTSxPQUFPLFVBQVU7OztZQXBCdEIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkIsaUJBQWlCO2lCQUNwQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2IsbUJBQW1CO29CQUNuQixpQkFBaUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGFBQWE7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkIsaUJBQWlCO2lCQUNwQjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBOZ01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdC1oZWFkZXIvbGlzdC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7IERpdmlkZXJNb2R1bGUgfSBmcm9tICcuL2RpdmlkZXIubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMaXN0Q29tcG9uZW50LFxuICAgICAgICBMaXN0SGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBMaXN0SXRlbUNvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIExpc3RIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIExpc3RJdGVtQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRGl2aWRlck1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBMaXN0Q29tcG9uZW50LFxuICAgICAgICBMaXN0SGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBMaXN0SXRlbUNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdE1vZHVsZSB7IH1cbiJdfQ==