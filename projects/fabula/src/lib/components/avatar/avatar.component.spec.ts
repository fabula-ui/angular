import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';
import { IconComponent } from '../icon/icon.component';

describe('Avatar Component', () => {
    let component: AvatarComponent;
    let fixture: ComponentFixture<AvatarComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AvatarComponent,
          IconComponent,
        ],
      })
        .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AvatarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('Should create', () => {
      expect(component).toBeTruthy();
    });

});
