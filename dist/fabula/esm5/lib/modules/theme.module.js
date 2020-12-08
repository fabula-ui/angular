/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/theme.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { ThemeService } from '../services/theme.service';
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
export { ThemeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvdGhlbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGVBQWUsRUFDZixRQUFRLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQU0vQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBR3pEO0lBQUE7SUF5QkEsQ0FBQzs7Ozs7SUFsQlEsbUJBQU87Ozs7SUFBZCxVQUFlLE9BQXNCO1FBQ25DLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsWUFBWTtnQkFDWjtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVTs7OztvQkFBRSxVQUFDLE9BQXFCOzs7b0JBQUssY0FBTSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBZCxDQUFjLElBQUEsQ0FBQTtvQkFDM0QsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUNwQixLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBeEJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzFCOztJQW9CRCxrQkFBQztDQUFBLEFBekJELElBeUJDO1NBbkJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIE5nTW9kdWxlLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gTW9kZWxzXG5pbXBvcnQgeyBJVXNlck9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvdXNlci1vcHRpb25zLm1vZGVsJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRoZW1lU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RoZW1lLnNlcnZpY2UnO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFtUaGVtZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9ucz86IElVc2VyT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVGhlbWVTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IChzZXJ2aWNlOiBUaGVtZVNlcnZpY2UpID0+ICgpID0+IHNlcnZpY2UuaW5pdCgpLFxuICAgICAgICAgIGRlcHM6IFtUaGVtZVNlcnZpY2VdLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnVXNlck9wdGlvbnMnLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=