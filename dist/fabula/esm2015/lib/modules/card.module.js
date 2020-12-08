/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { CardComponent } from '../components/card/card.component';
// Modules
import { CardSectionComponent } from '../components/card-section/card-section.component';
import { CardImageComponent } from '../components/card-image/card-image.component';
import { IconsModule } from './icons.module';
export class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CardComponent,
                    CardImageComponent,
                    CardSectionComponent
                ],
                entryComponents: [
                    CardImageComponent,
                    CardSectionComponent
                ],
                imports: [
                    CommonModule,
                    IconsModule
                ],
                exports: [
                    CardComponent,
                    CardImageComponent,
                    CardSectionComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUcvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBR2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXVCN0MsTUFBTSxPQUFPLFVBQVU7OztZQXBCdEIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsb0JBQW9CO2lCQUN2QjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2Isa0JBQWtCO29CQUNsQixvQkFBb0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFdBQVc7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixvQkFBb0I7aUJBQ3ZCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE5nTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7IENhcmRTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkLXNlY3Rpb24vY2FyZC1zZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQtaW1hZ2UvY2FyZC1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbnNNb2R1bGUgfSBmcm9tICcuL2ljb25zLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2FyZENvbXBvbmVudCxcbiAgICAgICAgQ2FyZEltYWdlQ29tcG9uZW50LFxuICAgICAgICBDYXJkU2VjdGlvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIENhcmRJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgQ2FyZFNlY3Rpb25Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBJY29uc01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBDYXJkQ29tcG9uZW50LFxuICAgICAgICBDYXJkSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIENhcmRTZWN0aW9uQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkTW9kdWxlIHsgfVxuIl19