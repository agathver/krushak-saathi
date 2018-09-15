import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface Choice {
  title: string,
  value: string,
}

export interface IPrompt {
  type: 'question' | 'user-response' | 'choice';
  title:string;
  callback?: (response?:string) => any;
  choices?: Choice[];
}

@Injectable()
export class ConversationController {

  // private initialized = false;

  prompts$: Subject<IPrompt>;

  constructor() {
    this.prompts$ = new Subject<IPrompt>();
  }

  prompt(title:string, callback?:(x:string) => void) {
    this.prompts$.next({
      type: 'question',
      title,
      callback
    });
  }

  choice(title, choices:Choice[], callback?:(x:string) => void) {
    this.prompts$.next({
      type: 'choice',
      title,
      choices,
      callback
    })
  }

  question(query) {
    //
  }

  // ready() {

  // }

}
