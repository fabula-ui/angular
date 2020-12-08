/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/modal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ModalComponent } from '../components/modal/modal.component';
import { ModalBodyComponent } from '../components/modal-body/modal-body.component';
import { ModalFooterComponent } from '../components/modal-footer/modal-footer.component';
import { ModalHeaderComponent } from '../components/modal-header/modal-header.component';
import { ModalSectionComponent } from '../components/modal-section/modal-section.component';
// Modules
import { CloseButtonModule } from './close-button.module';
import { IconsModule } from '../modules/icons.module';
// Services
import { ModalService } from '../services/modal.service';
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ModalComponent,
                        ModalBodyComponent,
                        ModalFooterComponent,
                        ModalHeaderComponent,
                        ModalSectionComponent
                    ],
                    entryComponents: [
                        ModalComponent,
                        ModalBodyComponent,
                        ModalFooterComponent,
                        ModalHeaderComponent,
                        ModalSectionComponent
                    ],
                    exports: [
                        ModalComponent,
                        ModalBodyComponent,
                        ModalFooterComponent,
                        ModalHeaderComponent,
                        ModalSectionComponent
                    ],
                    imports: [
                        CloseButtonModule,
                        CommonModule,
                        IconsModule
                    ],
                    providers: [
                        ModalService
                    ]
                },] }
    ];
    return ModalModule;
}());
export { ModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUFHNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUd0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQ7SUFBQTtJQStCMkIsQ0FBQzs7Z0JBL0IzQixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3FCQUN4QjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2IsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixxQkFBcUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLHFCQUFxQjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixXQUFXO3FCQUNkO29CQUNELFNBQVMsRUFBRTt3QkFDUCxZQUFZO3FCQUNmO2lCQUNKOztJQUMwQixrQkFBQztDQUFBLEFBL0I1QixJQStCNEI7U0FBZixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBOZ01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC1ib2R5L21vZGFsLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC1mb290ZXIvbW9kYWwtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC1zZWN0aW9uL21vZGFsLXNlY3Rpb24uY29tcG9uZW50JztcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHsgQ2xvc2VCdXR0b25Nb2R1bGUgfSBmcm9tICcuL2Nsb3NlLWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9tb2R1bGVzL2ljb25zLm1vZHVsZSc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTW9kYWxDb21wb25lbnQsXG4gICAgICAgIE1vZGFsQm9keUNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxGb290ZXJDb21wb25lbnQsXG4gICAgICAgIE1vZGFsSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBNb2RhbFNlY3Rpb25Db21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBNb2RhbENvbXBvbmVudCxcbiAgICAgICAgTW9kYWxCb2R5Q29tcG9uZW50LFxuICAgICAgICBNb2RhbEZvb3RlckNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIE1vZGFsU2VjdGlvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBNb2RhbENvbXBvbmVudCxcbiAgICAgICAgTW9kYWxCb2R5Q29tcG9uZW50LFxuICAgICAgICBNb2RhbEZvb3RlckNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIE1vZGFsU2VjdGlvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDbG9zZUJ1dHRvbk1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBJY29uc01vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE1vZGFsU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUgeyB9XG4iXX0=