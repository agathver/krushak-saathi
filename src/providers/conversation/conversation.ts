import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { empty } from 'rxjs/observable/empty';

export interface Choice {
  title: string,
  value: string,
}

export interface IPrompt {
  type: 'response' | 'question' | 'user-response' | 'choice';
  text: string;
  callback?: (response?: string) => any;
  choices?: Choice[];
}

@Injectable()
export class ConversationController {

  // private initialized = false;

  prompts$: Subject<IPrompt>;

  clear$: Subject<{}>;

  constructor() {
    this.prompts$ = new Subject<IPrompt>();
    this.clear$ = new Subject<{}>();
  }

  response(text: string) {
    this.prompts$.next({
      type: 'response',
      text
    })
  }

  prompt(text: string): Promise<string> {
    return new Promise<string>(resolve => {
      this.prompts$.next({
        type: 'question',
        text,
        callback: resolve
      });
    });

  }

  choice(text, choices: Choice[]): Promise<string> {
    return new Promise(resolve => {
      this.prompts$.next({
        type: 'choice',
        text,
        choices,
        callback: resolve
      });
    });
  }

  question(query) {
    //
  }

  clear() {
    this.clear$.next(empty());
  }

  // ready() {

  // }

}
