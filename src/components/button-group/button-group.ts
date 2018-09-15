import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Choice } from '../../providers/conversation/conversation';

@Component({
  selector: 'button-group',
  templateUrl: 'button-group.html'
})
export class ButtonGroupComponent {

  @Input() choices: Choice[];

  @Input() selectedChoice: string;

  @Input() color: string = 'primary';

  @Output() changed: EventEmitter<string>;

  constructor() {
    this.changed = new EventEmitter<string>();
  }

  select(choice) {
    this.selectedChoice = choice;
    this.changed.emit(choice);
  }

}
