import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Choice } from '../../providers/conversation/conversation';

/**
 * Generated class for the FixedChoiceQuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fixed-choice-question',
  templateUrl: 'fixed-choice-question.html'
})
export class FixedChoiceQuestionComponent {

  @Input() title: string;

  @Input() choices: Choice[] = [];

  @Output() reply: EventEmitter<string>;

  constructor() {
    this.reply = new EventEmitter<string>();
  }

  selectionChanged(selection) {
    console.log(selection);
    this.reply.emit(selection);
  }

}
