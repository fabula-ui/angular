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
export class ToastModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvdG9hc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBK0J6RixNQUFNLE9BQU8sV0FBVzs7O1lBNUJ2QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixtQkFBbUI7aUJBQ3RCO2dCQUNELGVBQWUsRUFBRTtvQkFDYixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixtQkFBbUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixtQkFBbUI7aUJBQ3RCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxZQUFZO2lCQUNmO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE5nTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgSW5uZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbm5lci1pY29uL2lubmVyLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQnO1xuXG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9tb2R1bGVzL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbnNNb2R1bGUgfSBmcm9tICcuL2ljb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBJbm5lckljb25Nb2R1bGUgfSBmcm9tICcuLi9tb2R1bGVzL2lubmVyLWljb24ubW9kdWxlJztcbmltcG9ydCB7IExpbmtNb2R1bGUgfSBmcm9tICcuL2xpbmsubW9kdWxlJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvYXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9hc3RTdGFja0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3Qtc3RhY2svdG9hc3Qtc3RhY2suY29tcG9uZW50JztcbmltcG9ydCB7IFRvYXN0UG9ydGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdC1wb3J0YWwvdG9hc3QtcG9ydGFsLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVG9hc3RDb21wb25lbnQsXG4gICAgICAgIFRvYXN0UG9ydGFsQ29tcG9uZW50LFxuICAgICAgICBUb2FzdFN0YWNrQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgSW5uZXJJY29uQ29tcG9uZW50LFxuICAgICAgICBUb2FzdENvbXBvbmVudCxcbiAgICAgICAgVG9hc3RQb3J0YWxDb21wb25lbnQsXG4gICAgICAgIFRvYXN0U3RhY2tDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnV0dG9uTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEljb25zTW9kdWxlLFxuICAgICAgICBJbm5lckljb25Nb2R1bGUsXG4gICAgICAgIExpbmtNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVG9hc3RDb21wb25lbnQsXG4gICAgICAgIFRvYXN0UG9ydGFsQ29tcG9uZW50LFxuICAgICAgICBUb2FzdFN0YWNrQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVG9hc3RTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE1vZHVsZSB7IH1cbiJdfQ==