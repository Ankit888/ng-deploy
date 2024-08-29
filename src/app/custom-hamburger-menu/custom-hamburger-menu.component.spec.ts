import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHamburgerMenuComponent } from './custom-hamburger-menu.component';

describe('CustomHamburgerMenuComponent', () => {
  let component: CustomHamburgerMenuComponent;
  let fixture: ComponentFixture<CustomHamburgerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHamburgerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHamburgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
