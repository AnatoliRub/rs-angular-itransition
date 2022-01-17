import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSettings = new EventEmitter<void>();

  @Output() showSearchingResults = new EventEmitter<string>();

  showSettings() {
    this.toggleSettings.emit();
  }

  displaySearchingResult(value: string) {
    this.showSearchingResults.emit(value);
  }
}
