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
export { ListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUcvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7O0FBR2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRDtJQUFBO0lBb0IwQixDQUFDOztnQkFwQjFCLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLGlCQUFpQjtxQkFDcEI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNiLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixhQUFhO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLGlCQUFpQjtxQkFDcEI7aUJBQ0o7O0lBQ3lCLGlCQUFDO0NBQUEsQUFwQjNCLElBb0IyQjtTQUFkLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE5nTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9saXN0LWhlYWRlci9saXN0LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50JztcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHsgRGl2aWRlck1vZHVsZSB9IGZyb20gJy4vZGl2aWRlci5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExpc3RDb21wb25lbnQsXG4gICAgICAgIExpc3RIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIExpc3RJdGVtQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgTGlzdEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgTGlzdEl0ZW1Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBEaXZpZGVyTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIExpc3RDb21wb25lbnQsXG4gICAgICAgIExpc3RIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIExpc3RJdGVtQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0TW9kdWxlIHsgfVxuIl19