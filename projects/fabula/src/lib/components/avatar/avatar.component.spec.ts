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

    it('Should have an icon as an object', () => {
      component.icon = { name: 'icon' };
      fixture.detectChanges();
  
      const compiled: HTMLElement = fixture.debugElement.nativeElement;
      const iconElement = compiled.querySelector('.fab-icon');
      const name = iconElement.getAttribute('data-name');
  
      expect(name).toBe('icon');
    });
  
    it('Should have an icon as a string', () => {
      component.icon = 'icon';
      fixture.detectChanges();
  
      const compiled: HTMLElement = fixture.debugElement.nativeElement;
      const iconElement = compiled.querySelector('.fab-icon');
      const name = iconElement.getAttribute('data-name');
  
      expect(name).toBe('icon');
    });

    it('Should show initials', () => {
      component.showInitials = 'Show Initials';
      fixture.detectChanges();
  
      const compiled: HTMLElement = fixture.debugElement.nativeElement;
      const initalsElement = compiled.querySelector('.fab-avatar__initials');
      const text = initalsElement.textContent;
  
      expect(text).toBe('SI');
    });

});
