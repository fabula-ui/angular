import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { AvatarComponent } from './avatar.component';

// Modules
import { AvatarModule } from '../../modules/avatar.module';
import { BadgeModule } from '../../modules/badge.module';

@Component({
  template: `<fab-avatar><fab-badge></fab-badge></fab-avatar>`,
})
class BadgeExample { }

describe('Avatar Component', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BadgeExample
      ],
      imports: [
        AvatarModule,
        BadgeModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a defined structure', () => {
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const avatarElement = compiled.querySelector('.fab-avatar');
    const wrapperElement = compiled.querySelector('.fab-avatar-wrapper');

    expect(avatarElement).toBeTruthy();
    expect(wrapperElement).toBeTruthy();
  });

  it('Should have an image', () => {
    let compiled: HTMLElement;
    let element;

    component.src = 'image';
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
    element = compiled.querySelector('.fab-avatar__image');

    expect(element).toBeTruthy();
    expect(element.style.backgroundImage).toBe(`url(image)`);
  });

  it('Should have an icon', () => {
    let compiled: HTMLElement;
    let iconElement;

    component.icon = { name: 'icon' };
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
    iconElement = compiled.querySelector('.fab-icon');

    expect(iconElement).toBeTruthy();
  });

  it('Should show initials', () => {
    let compiled: HTMLElement;
    let iconElement;
    let initialsElement;

    component.showInitials = 'Show Initials';
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
    iconElement = compiled.querySelector('.fab-icon');
    initialsElement = compiled.querySelector('.fab-avatar__initials');

    expect(iconElement).toBeFalsy();
    expect(initialsElement.textContent).toBe('SI');
  });

  it('Should accept external components - eg: badge', () => {
    const badgeFixture = TestBed.createComponent(BadgeExample);
    const compiled: HTMLElement = badgeFixture.debugElement.nativeElement;
    const badgeElement = compiled.querySelector('.fab-badge');

    expect(badgeElement).toBeTruthy();
  });
});
