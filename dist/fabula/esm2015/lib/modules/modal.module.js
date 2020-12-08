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
export class ModalModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUFHNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUd0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFpQ3pELE1BQU0sT0FBTyxXQUFXOzs7WUEvQnZCLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixxQkFBcUI7aUJBQ3hCO2dCQUNELGVBQWUsRUFBRTtvQkFDYixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIscUJBQXFCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsaUJBQWlCO29CQUNqQixZQUFZO29CQUNaLFdBQVc7aUJBQ2Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLFlBQVk7aUJBQ2Y7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgTmdNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsQm9keUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwtYm9keS9tb2RhbC1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwtZm9vdGVyL21vZGFsLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwtc2VjdGlvbi9tb2RhbC1zZWN0aW9uLmNvbXBvbmVudCc7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7IENsb3NlQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9jbG9zZS1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IEljb25zTW9kdWxlIH0gZnJvbSAnLi4vbW9kdWxlcy9pY29ucy5tb2R1bGUnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbW9kYWwuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBNb2RhbEJvZHlDb21wb25lbnQsXG4gICAgICAgIE1vZGFsRm9vdGVyQ29tcG9uZW50LFxuICAgICAgICBNb2RhbEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxTZWN0aW9uQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgTW9kYWxDb21wb25lbnQsXG4gICAgICAgIE1vZGFsQm9keUNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxGb290ZXJDb21wb25lbnQsXG4gICAgICAgIE1vZGFsSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBNb2RhbFNlY3Rpb25Db21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTW9kYWxDb21wb25lbnQsXG4gICAgICAgIE1vZGFsQm9keUNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxGb290ZXJDb21wb25lbnQsXG4gICAgICAgIE1vZGFsSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBNb2RhbFNlY3Rpb25Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ2xvc2VCdXR0b25Nb2R1bGUsXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgSWNvbnNNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNb2RhbFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsTW9kdWxlIHsgfVxuIl19