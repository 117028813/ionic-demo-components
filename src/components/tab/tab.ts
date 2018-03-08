import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the TabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tab',
  templateUrl: 'tab.html'
})
export class TabComponent {

  @Input() title
  @Output() tabSelect = new EventEmitter()

  constructor() {
  }

  onClick() {
    this.tabSelect.emit(this.title)
  }

}
