import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConversationController, IPrompt } from '../../providers/conversation/conversation';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  activities: IPrompt[] = [];
  currentPrompt: IPrompt = null;

  constructor(
    private navCtrl:NavController,
    private conversationCtrl:ConversationController,
    private userProvider:UserProvider) {
  }

  ngOnInit() {
    this.conversationCtrl.prompts$.subscribe(p => this.activities.push(p));
  }

  ionViewDidLoad() {
    // start dialog

    setTimeout(() => {
      this.conversationCtrl.prompt('Hi!');

      setTimeout(() => {
      this.conversationCtrl.choice(
        'I am Laxmi, your Krushak Saathi.',
        [{
          title: "Let's start",
          value: 'start',
        }],
        _ => {
          this.navCtrl.setRoot(LoginPage);
        }
      );
      }, 1000);
    }, 1000);


  }

  onSend() {
    if(this.currentPrompt) {
      this.currentPrompt.callback('response');
    } else {
      this.conversationCtrl.question('response');
    }
  }

}
