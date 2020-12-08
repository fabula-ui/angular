/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/dropdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { DropdownHeaderComponent } from '../components/dropdown-header/dropdown-header.component';
import { DropdownItemComponent } from '../components/dropdown-item/dropdown-item.component';
import { DropdownMenuComponent } from '../components/dropdown-menu/dropdown-menu.component';
import { DropdownToggleComponent } from '../components/dropdown-toggle/dropdown-toggle.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';
// Modules
import { ButtonModule } from './button.module';
import { DividerModule } from './divider.module';
import { IconsModule } from './icons.module';
export class DropdownModule {
}
DropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DropdownComponent,
                    DropdownHeaderComponent,
                    DropdownItemComponent,
                    DropdownMenuComponent,
                    DropdownToggleComponent,
                ],
                imports: [
                    ButtonModule,
                    CommonModule,
                    DividerModule,
                    IconsModule
                ],
                exports: [
                    DropdownComponent,
                    DropdownHeaderComponent,
                    DropdownItemComponent,
                    DropdownMenuComponent,
                    DropdownToggleComponent,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZHJvcGRvd24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQUc5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXlCN0MsTUFBTSxPQUFPLGNBQWM7OztZQXRCMUIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtpQkFDMUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixhQUFhO29CQUNiLFdBQVc7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2QixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsdUJBQXVCO2lCQUMxQjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBOZ01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IERyb3Bkb3duSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9kcm9wZG93bi1oZWFkZXIvZHJvcGRvd24taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Ryb3Bkb3duLWl0ZW0vZHJvcGRvd24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IERyb3Bkb3duVG9nZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9kcm9wZG93bi10b2dnbGUvZHJvcGRvd24tdG9nZ2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IERpdmlkZXJNb2R1bGUgfSBmcm9tICcuL2RpdmlkZXIubW9kdWxlJztcbmltcG9ydCB7IEljb25zTW9kdWxlIH0gZnJvbSAnLi9pY29ucy5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIERyb3Bkb3duQ29tcG9uZW50LFxuICAgICAgICBEcm9wZG93bkhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgRHJvcGRvd25JdGVtQ29tcG9uZW50LFxuICAgICAgICBEcm9wZG93bk1lbnVDb21wb25lbnQsXG4gICAgICAgIERyb3Bkb3duVG9nZ2xlQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCdXR0b25Nb2R1bGUsXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRGl2aWRlck1vZHVsZSxcbiAgICAgICAgSWNvbnNNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRHJvcGRvd25Db21wb25lbnQsXG4gICAgICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBEcm9wZG93bkl0ZW1Db21wb25lbnQsXG4gICAgICAgIERyb3Bkb3duTWVudUNvbXBvbmVudCxcbiAgICAgICAgRHJvcGRvd25Ub2dnbGVDb21wb25lbnQsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1vZHVsZSB7IH1cbiJdfQ==