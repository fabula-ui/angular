/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/toast.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { InnerIconComponent } from '../components/inner-icon/inner-icon.component';
import { ToastComponent } from '../components/toast/toast.component';
// Modules
import { ButtonModule } from '../modules/button.module';
import { IconsModule } from './icons.module';
import { InnerIconModule } from '../modules/inner-icon.module';
import { LinkModule } from './link.module';
// Services
import { ToastService } from '../services/toast.service';
import { ToastStackComponent } from '../components/toast-stack/toast-stack.component';
import { ToastPortalComponent } from '../components/toast-portal/toast-portal.component';
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
export { ToastModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvdG9hc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBR3pGO0lBQUE7SUE0QjJCLENBQUM7O2dCQTVCM0IsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3FCQUN0QjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixVQUFVO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDTCxjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsWUFBWTtxQkFDZjtpQkFDSjs7SUFDMEIsa0JBQUM7Q0FBQSxBQTVCNUIsSUE0QjRCO1NBQWYsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgTmdNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBJbm5lckljb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2lubmVyLWljb24vaW5uZXItaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL21vZHVsZXMvYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBJY29uc01vZHVsZSB9IGZyb20gJy4vaWNvbnMubW9kdWxlJztcbmltcG9ydCB7IElubmVySWNvbk1vZHVsZSB9IGZyb20gJy4uL21vZHVsZXMvaW5uZXItaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTGlua01vZHVsZSB9IGZyb20gJy4vbGluay5tb2R1bGUnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG9hc3Quc2VydmljZSc7XG5pbXBvcnQgeyBUb2FzdFN0YWNrQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdC1zdGFjay90b2FzdC1zdGFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9hc3RQb3J0YWxDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0LXBvcnRhbC90b2FzdC1wb3J0YWwuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUb2FzdENvbXBvbmVudCxcbiAgICAgICAgVG9hc3RQb3J0YWxDb21wb25lbnQsXG4gICAgICAgIFRvYXN0U3RhY2tDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBJbm5lckljb25Db21wb25lbnQsXG4gICAgICAgIFRvYXN0Q29tcG9uZW50LFxuICAgICAgICBUb2FzdFBvcnRhbENvbXBvbmVudCxcbiAgICAgICAgVG9hc3RTdGFja0NvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCdXR0b25Nb2R1bGUsXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgSWNvbnNNb2R1bGUsXG4gICAgICAgIElubmVySWNvbk1vZHVsZSxcbiAgICAgICAgTGlua01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUb2FzdENvbXBvbmVudCxcbiAgICAgICAgVG9hc3RQb3J0YWxDb21wb25lbnQsXG4gICAgICAgIFRvYXN0U3RhY2tDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUb2FzdFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0TW9kdWxlIHsgfVxuIl19