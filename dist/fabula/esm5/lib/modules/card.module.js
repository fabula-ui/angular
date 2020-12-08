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
var CardModule = /** @class */ (function () {
    function CardModule() {
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
    return CardModule;
}());
export { CardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUcvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBR2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QztJQUFBO0lBb0IwQixDQUFDOztnQkFwQjFCLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLG9CQUFvQjtxQkFDdkI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNiLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDTCxhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3FCQUN2QjtpQkFDSjs7SUFDeUIsaUJBQUM7Q0FBQSxBQXBCM0IsSUFvQjJCO1NBQWQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgTmdNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHsgQ2FyZFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQtc2VjdGlvbi9jYXJkLXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZC1pbWFnZS9jYXJkLWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uc01vZHVsZSB9IGZyb20gJy4vaWNvbnMubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDYXJkQ29tcG9uZW50LFxuICAgICAgICBDYXJkSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIENhcmRTZWN0aW9uQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgQ2FyZEltYWdlQ29tcG9uZW50LFxuICAgICAgICBDYXJkU2VjdGlvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEljb25zTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENhcmRDb21wb25lbnQsXG4gICAgICAgIENhcmRJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgQ2FyZFNlY3Rpb25Db21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRNb2R1bGUgeyB9XG4iXX0=