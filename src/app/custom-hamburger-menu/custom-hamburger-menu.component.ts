import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-hamburger-menu',
  templateUrl: './custom-hamburger-menu.component.html',
  styleUrls: ['./custom-hamburger-menu.component.scss']
})
export class CustomHamburgerMenuComponent {
  sidebarOpen = true; // Set this to true to make the sidebar always visible

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

