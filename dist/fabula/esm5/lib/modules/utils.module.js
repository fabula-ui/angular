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
var UtilsModule = /** @class */ (function () {
    function UtilsModule() {
    }
    /**
     * @return {?}
     */
    UtilsModule.forRoot = /**
     * @return {?}
     */
    function () {
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
                    function (service) { return (/**
                     * @return {?}
                     */
                    function () {
                        service.utils = true;
                    }); }),
                    deps: [FabulaService],
                    multi: true
                }
            ]
        };
    };
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
    return UtilsModule;
}());
export { UtilsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvdXRpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQUd6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBRzNEO0lBQUE7SUFzREEsQ0FBQzs7OztJQWhCVSxtQkFBTzs7O0lBQWQ7UUFDSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNQLGFBQWE7Z0JBQ2I7b0JBQ0ksT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVU7Ozs7b0JBQUUsVUFBQyxPQUFzQjs7O29CQUFLO3dCQUNwQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDekIsQ0FBQyxJQUFBLENBQUE7b0JBQ0QsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNyQixLQUFLLEVBQUUsSUFBSTtpQkFDZDthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7O2dCQXJESixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsbUJBQW1CO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTtxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixtQkFBbUI7cUJBQ3RCO2lCQUNKOztJQWtCRCxrQkFBQztDQUFBLEFBdERELElBc0RDO1NBakJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgeyBBbGlnbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWxpZ24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEJsb2NrRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9ibG9jay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9jb2x1bW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbW1vbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvY29tbW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGbGV4RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9mbGV4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGbG93RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9mbG93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHcm93RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9ncm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYXJnaW5EaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL21hcmdpbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT3ZlcmZsb3dEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL292ZXJmbG93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQYWRkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9wYWRkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSb3dEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3Jvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2l6ZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvc2l6ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVmlzaWJpbGl0eURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvdmlzaWJpbGl0eS5kaXJlY3RpdmUnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIC8vIERpcmVjdGl2ZXNcbiAgICAgICAgQWxpZ25EaXJlY3RpdmUsXG4gICAgICAgIEJsb2NrRGlyZWN0aXZlLFxuICAgICAgICBDb2x1bW5EaXJlY3RpdmUsXG4gICAgICAgIENvbW1vbkRpcmVjdGl2ZSxcbiAgICAgICAgRmxleERpcmVjdGl2ZSxcbiAgICAgICAgRmxvd0RpcmVjdGl2ZSxcbiAgICAgICAgR3Jvd0RpcmVjdGl2ZSxcbiAgICAgICAgTWFyZ2luRGlyZWN0aXZlLFxuICAgICAgICBPdmVyZmxvd0RpcmVjdGl2ZSxcbiAgICAgICAgUGFkZGluZ0RpcmVjdGl2ZSxcbiAgICAgICAgUm93RGlyZWN0aXZlLFxuICAgICAgICBTaXplRGlyZWN0aXZlLFxuICAgICAgICBWaXNpYmlsaXR5RGlyZWN0aXZlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgLy8gRGlyZWN0aXZlc1xuICAgICAgICBBbGlnbkRpcmVjdGl2ZSxcbiAgICAgICAgQmxvY2tEaXJlY3RpdmUsXG4gICAgICAgIENvbHVtbkRpcmVjdGl2ZSxcbiAgICAgICAgQ29tbW9uRGlyZWN0aXZlLFxuICAgICAgICBGbGV4RGlyZWN0aXZlLFxuICAgICAgICBGbG93RGlyZWN0aXZlLFxuICAgICAgICBHcm93RGlyZWN0aXZlLFxuICAgICAgICBPdmVyZmxvd0RpcmVjdGl2ZSxcbiAgICAgICAgTWFyZ2luRGlyZWN0aXZlLFxuICAgICAgICBQYWRkaW5nRGlyZWN0aXZlLFxuICAgICAgICBSb3dEaXJlY3RpdmUsXG4gICAgICAgIFNpemVEaXJlY3RpdmUsXG4gICAgICAgIFZpc2liaWxpdHlEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxzTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBVdGlsc01vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIEZhYnVsYVNlcnZpY2UsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChzZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlKSA9PiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnV0aWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0ZhYnVsYVNlcnZpY2VdLFxuICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=