import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() isOpen: boolean = true; // Make sure to default to true if you want the sidebar to be always visible
  @Output() close = new EventEmitter<void>();
}
