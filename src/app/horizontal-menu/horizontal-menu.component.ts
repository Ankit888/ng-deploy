import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent   {

  @Output() toggleSidenav = new EventEmitter<void>();

  // Emit the event to toggle the sidenav
  toggleSidenavHandler() {
    this.toggleSidenav.emit();
  }
}
