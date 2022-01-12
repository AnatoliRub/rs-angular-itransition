import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export class SearchSettingsComponent {
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  toggleSettings() {
    this.toggle.emit();
  }
}
