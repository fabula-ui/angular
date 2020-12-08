/**
 * @fileoverview added by tsickle
 * Generated from: lib/fabula.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { ThemeService } from './services/theme.service';
import { CommonComponent } from './components/common-component/common-component.component';
// @dynamic
export class FabulaModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFidWxhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9mYWJ1bGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGVBQWUsRUFDZixRQUFRLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQU0vQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOztBQWlCM0YsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBc0I7UUFDbkMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxZQUFZO2dCQUNaO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVOzs7O29CQUFFLENBQUMsT0FBcUIsRUFBRSxFQUFFOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBLENBQUE7b0JBQzNELElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDcEIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWhDRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7aUJBQ2hCO2dCQUNELGVBQWUsRUFBRTtvQkFDZixlQUFlO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFQUF9JTklUSUFMSVpFUixcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBNb2RlbHNcbmltcG9ydCB7IElVc2VyT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL3VzZXItb3B0aW9ucy5tb2RlbCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBUaGVtZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29tbW9uQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIENvbW1vbkNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGYWJ1bGFNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zPzogSVVzZXJPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGYWJ1bGFNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVGhlbWVTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IChzZXJ2aWNlOiBUaGVtZVNlcnZpY2UpID0+ICgpID0+IHNlcnZpY2UuaW5pdCgpLFxuICAgICAgICAgIGRlcHM6IFtUaGVtZVNlcnZpY2VdLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnVXNlck9wdGlvbnMnLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=