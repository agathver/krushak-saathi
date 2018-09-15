import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConversationController } from '../../providers/conversation/conversation';

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



  constructor(private conversationCtrl:ConversationController) {
  }

  ngOnInit() {
    this.conversationCtrl.prompts$.subscribe(p => {

    });
  }

  ionViewDidLoad() {

  }

}
