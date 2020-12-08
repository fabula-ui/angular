/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/segments.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ContentComponent } from '../components/content/content.component';
import { SegmentComponent } from '../components/segment/segment.component';
import { SegmentContentComponent } from '../components/segment-content/segment-content.component';
import { SegmentsComponent } from '../components/segments/segments.component';
import { SelectorComponent } from '../components/selector/selector.component';
// Directives
import { SegmentsDirective } from '../directives/segments.directive';
export class SegmentsModule {
}
SegmentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ContentComponent,
                    SegmentComponent,
                    SegmentContentComponent,
                    SegmentsComponent,
                    SegmentsDirective,
                    SelectorComponent
                ],
                entryComponents: [
                    SelectorComponent
                ],
                imports: [CommonModule],
                exports: [
                    ContentComponent,
                    SegmentComponent,
                    SegmentContentComponent,
                    SegmentsComponent,
                    SegmentsDirective
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvc2VnbWVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQUc5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQXVCckUsTUFBTSxPQUFPLGNBQWM7OztZQXJCMUIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsdUJBQXVCO29CQUN2QixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsaUJBQWlCO2lCQUNwQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2IsaUJBQWlCO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRTtvQkFDTCxnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsdUJBQXVCO29CQUN2QixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtpQkFDcEI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgTmdNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlZ21lbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlZ21lbnQvc2VnbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VnbWVudENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlZ21lbnQtY29udGVudC9zZWdtZW50LWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlZ21lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZWdtZW50cy9zZWdtZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlbGVjdG9yL3NlbGVjdG9yLmNvbXBvbmVudCc7XG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCB7IFNlZ21lbnRzRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9zZWdtZW50cy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb250ZW50Q29tcG9uZW50LFxuICAgICAgICBTZWdtZW50Q29tcG9uZW50LFxuICAgICAgICBTZWdtZW50Q29udGVudENvbXBvbmVudCxcbiAgICAgICAgU2VnbWVudHNDb21wb25lbnQsXG4gICAgICAgIFNlZ21lbnRzRGlyZWN0aXZlLFxuICAgICAgICBTZWxlY3RvckNvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFNlbGVjdG9yQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENvbnRlbnRDb21wb25lbnQsXG4gICAgICAgIFNlZ21lbnRDb21wb25lbnQsXG4gICAgICAgIFNlZ21lbnRDb250ZW50Q29tcG9uZW50LFxuICAgICAgICBTZWdtZW50c0NvbXBvbmVudCxcbiAgICAgICAgU2VnbWVudHNEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlZ21lbnRzTW9kdWxlIHsgfVxuIl19