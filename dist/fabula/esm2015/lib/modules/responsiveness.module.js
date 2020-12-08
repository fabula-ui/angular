/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/responsiveness.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { FabulaService } from '../services/fabula.service';
// @dynamic
export class ResponsivenessModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZW5lc3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvcmVzcG9uc2l2ZW5lc3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQVEzRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULGFBQWE7Z0JBQ2I7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVU7Ozs7b0JBQUUsQ0FBQyxPQUFzQixFQUFFLEVBQUU7OztvQkFBQyxHQUFHLEVBQUU7d0JBQzNDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUNoQyxDQUFDLENBQUEsQ0FBQTtvQkFDRCxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQ3JCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBckJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVuZXNzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXNwb25zaXZlbmVzc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBGYWJ1bGFTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IChzZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlKSA9PiAoKSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlc3BvbnNpdmVuZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcHM6IFtGYWJ1bGFTZXJ2aWNlXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19