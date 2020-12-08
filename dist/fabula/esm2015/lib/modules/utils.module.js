/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/utils.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Directives
import { AlignDirective } from '../directives/align.directive';
import { BlockDirective } from '../directives/block.directive';
import { ColumnDirective } from '../directives/column.directive';
import { CommonDirective } from '../directives/common.directive';
import { FlexDirective } from '../directives/flex.directive';
import { FlowDirective } from '../directives/flow.directive';
import { GrowDirective } from '../directives/grow.directive';
import { MarginDirective } from '../directives/margin.directive';
import { OverflowDirective } from '../directives/overflow.directive';
import { PaddingDirective } from '../directives/padding.directive';
import { RowDirective } from '../directives/row.directive';
import { SizeDirective } from '../directives/size.directive';
import { VisibilityDirective } from '../directives/visibility.directive';
// Services
import { FabulaService } from '../services/fabula.service';
// @dynamic
export class UtilsModule {
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
UtilsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvdXRpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQUd6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBd0MzRCxNQUFNLE9BQU8sV0FBVzs7OztJQUNwQixNQUFNLENBQUMsT0FBTztRQUNWLE9BQU87WUFDSCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1AsYUFBYTtnQkFDYjtvQkFDSSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVTs7OztvQkFBRSxDQUFDLE9BQXNCLEVBQUUsRUFBRTs7O29CQUFDLEdBQUcsRUFBRTt3QkFDekMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUMsQ0FBQSxDQUFBO29CQUNELElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDckIsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDOzs7WUFyREosUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxlQUFlO29CQUNmLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixhQUFhO29CQUNiLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsbUJBQW1CO2lCQUN0QjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHsgQWxpZ25EaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2FsaWduLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCbG9ja0RpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYmxvY2suZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21tb25EaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2NvbW1vbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmxleERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZmxleC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmxvd0RpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZmxvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR3Jvd0RpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZ3Jvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFyZ2luRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9tYXJnaW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IE92ZXJmbG93RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9vdmVyZmxvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUGFkZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcGFkZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUm93RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNpemVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3NpemUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFZpc2liaWxpdHlEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3Zpc2liaWxpdHkuZGlyZWN0aXZlJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAvLyBEaXJlY3RpdmVzXG4gICAgICAgIEFsaWduRGlyZWN0aXZlLFxuICAgICAgICBCbG9ja0RpcmVjdGl2ZSxcbiAgICAgICAgQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBDb21tb25EaXJlY3RpdmUsXG4gICAgICAgIEZsZXhEaXJlY3RpdmUsXG4gICAgICAgIEZsb3dEaXJlY3RpdmUsXG4gICAgICAgIEdyb3dEaXJlY3RpdmUsXG4gICAgICAgIE1hcmdpbkRpcmVjdGl2ZSxcbiAgICAgICAgT3ZlcmZsb3dEaXJlY3RpdmUsXG4gICAgICAgIFBhZGRpbmdEaXJlY3RpdmUsXG4gICAgICAgIFJvd0RpcmVjdGl2ZSxcbiAgICAgICAgU2l6ZURpcmVjdGl2ZSxcbiAgICAgICAgVmlzaWJpbGl0eURpcmVjdGl2ZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIC8vIERpcmVjdGl2ZXNcbiAgICAgICAgQWxpZ25EaXJlY3RpdmUsXG4gICAgICAgIEJsb2NrRGlyZWN0aXZlLFxuICAgICAgICBDb2x1bW5EaXJlY3RpdmUsXG4gICAgICAgIENvbW1vbkRpcmVjdGl2ZSxcbiAgICAgICAgRmxleERpcmVjdGl2ZSxcbiAgICAgICAgRmxvd0RpcmVjdGl2ZSxcbiAgICAgICAgR3Jvd0RpcmVjdGl2ZSxcbiAgICAgICAgT3ZlcmZsb3dEaXJlY3RpdmUsXG4gICAgICAgIE1hcmdpbkRpcmVjdGl2ZSxcbiAgICAgICAgUGFkZGluZ0RpcmVjdGl2ZSxcbiAgICAgICAgUm93RGlyZWN0aXZlLFxuICAgICAgICBTaXplRGlyZWN0aXZlLFxuICAgICAgICBWaXNpYmlsaXR5RGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBVdGlsc01vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVXRpbHNNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBGYWJ1bGFTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiAoc2VydmljZTogRmFidWxhU2VydmljZSkgPT4gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZS51dGlscyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtGYWJ1bGFTZXJ2aWNlXSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19