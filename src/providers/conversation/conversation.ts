import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

interface IPrompt {
  title:string,
  callback: (response:string) => void
}

@Injectable()
export class ConversationController {

  // private initialized = false;

  prompts$: Subject<IPrompt>;

  prompt(title:string, callback:(x:string) => void) {
    this.prompts$.next({
      title,
      callback
    });
  }

  // ready() {

  // }
}
