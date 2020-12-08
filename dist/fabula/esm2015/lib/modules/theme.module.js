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
export class ThemeModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvdGhlbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGVBQWUsRUFDZixRQUFRLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQU0vQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBU3pELE1BQU0sT0FBTyxXQUFXOzs7OztJQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQXNCO1FBQ25DLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsWUFBWTtnQkFDWjtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVTs7OztvQkFBRSxDQUFDLE9BQXFCLEVBQUUsRUFBRTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFBO29CQUMzRCxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3BCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsT0FBTztpQkFDbEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF4QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFQUF9JTklUSUFMSVpFUixcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBNb2RlbHNcbmltcG9ydCB7IElVc2VyT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy91c2VyLW9wdGlvbnMubW9kZWwnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdGhlbWUuc2VydmljZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW10sXG4gIHByb3ZpZGVyczogW1RoZW1lU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zPzogSVVzZXJPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUaGVtZVNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogKHNlcnZpY2U6IFRoZW1lU2VydmljZSkgPT4gKCkgPT4gc2VydmljZS5pbml0KCksXG4gICAgICAgICAgZGVwczogW1RoZW1lU2VydmljZV0sXG4gICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdVc2VyT3B0aW9ucycsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==