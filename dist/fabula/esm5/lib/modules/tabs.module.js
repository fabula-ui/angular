/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/tabs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { TabComponent } from '../components/tab/tab.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { TabContentComponent } from '../components/tab-content/tab-content.component';
// Module
import { SegmentsModule } from './segments.module';
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
export { TabsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy90YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUcvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOztBQUd0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBQTtJQXFCMEIsQ0FBQzs7Z0JBckIxQixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixtQkFBbUI7cUJBQ3RCO29CQUNELGVBQWUsRUFBRTt3QkFDYixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsbUJBQW1CO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixjQUFjO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixhQUFhO3dCQUNiLG1CQUFtQjtxQkFDdEI7aUJBQ0o7O0lBQ3lCLGlCQUFDO0NBQUEsQUFyQjNCLElBcUIyQjtTQUFkLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE5nTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90YWIvdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RhYi1jb250ZW50L3RhYi1jb250ZW50LmNvbXBvbmVudCc7XG5cbi8vIE1vZHVsZVxuaW1wb3J0IHsgU2VnbWVudHNNb2R1bGUgfSBmcm9tICcuL3NlZ21lbnRzLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFRhYkNvbXBvbmVudCxcbiAgICAgICAgVGFic0NvbXBvbmVudCxcbiAgICAgICAgVGFiQ29udGVudENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFRhYkNvbXBvbmVudCxcbiAgICAgICAgVGFic0NvbXBvbmVudCxcbiAgICAgICAgVGFiQ29udGVudENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFNlZ21lbnRzTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFRhYkNvbXBvbmVudCxcbiAgICAgICAgVGFic0NvbXBvbmVudCxcbiAgICAgICAgVGFiQ29udGVudENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7IH1cbiJdfQ==