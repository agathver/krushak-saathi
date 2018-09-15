import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConversationController, IPrompt } from '../../providers/conversation/conversation';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';
import { CropChecklistProvider } from '../../providers/crop-checklist/crop-checklist';
import { CropSuggestionProvider } from '../../providers/crop-suggestion/crop-suggestion';

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

  currentResponse: string;

  constructor(
    private navCtrl: NavController,
    private conversationCtrl: ConversationController,
    private cropChecklist:CropChecklistProvider,
    private suggestions:CropSuggestionProvider,
    private userProvider: UserProvider) {
  }

  ngOnInit() {
    this.conversationCtrl.prompts$.subscribe(p => {
      this.currentPrompt = p;
      this.activities.push(p)
    });

    this.conversationCtrl.clear$.subscribe(() => this.activities = []);
  }

  async ionViewDidLoad() {
    const user = await this.userProvider.currentUser();
    if (!user) {
      this.loginDialog();
    } else {
      this.cropStatus();
    }
  }

  onSend() {
    this.activities.push({
      type: 'user-response',
      text: this.currentResponse,
    });

    this.callback(this.currentResponse);

    this.currentResponse = '';
  }

  callback(response: string) {
    if (this.currentPrompt && this.currentPrompt.callback) {
      this.currentPrompt.callback(response);
    } else {
      this.conversationCtrl.question(response);
    }

    this.currentPrompt = null;
  }

  loginDialog() {
    this.conversationCtrl.prompt('Hi!');
    setTimeout(() =>
      this.conversationCtrl.choice(
        'I am Laxmi, your Krushak Saathi.',
        [{
          title: "Let's start",
          value: 'start',
        }])
        .then(() => this.startLogin())
      , 1000);
  }

  async startLogin() {
    const name = await this.conversationCtrl.prompt('Please provide me your name');
    const landSize = await this.conversationCtrl.prompt('What provides the size of your land (acres)?');

    const cropsText = await this.conversationCtrl.prompt('What crops do you grow?')
    const crops = cropsText.split(',').map(String.prototype.trim);

    console.log(name, landSize, cropsText);

    this.userProvider.register({
      name,
      landSize,
      crops
    });

    this.conversationCtrl.clear();

    this.cropStatus();
  }

  async cropStatus() {
    if(await this.cropChecklist.currentCrop()) {
      const nextTask = await this.cropChecklist.getLastestItem();
    } else {
      this.cropChooser();
    }
  }

  async cropChooser() {
    const suggestedCrops = this.suggestions.cropSuggestions().map(x => ({
      title: x.name,
      value: x.id
    }));

    const choosenCrop = await this.conversationCtrl.choice('Choose a crop for cultivation', suggestedCrops);
    return this.seedVendor(choosenCrop);
  }

  async seedVendor(choosenCrop) {
    const vendors = this.suggestions.seedVendorSuggestion(choosenCrop);

    const response = await this.conversationCtrl.choice(`We have ${vendors.length} seed vendors near your area.`,
    [
      {
        title: 'Show vendors',
        value: 'vendors'
      },
      {
        title: 'I have procured the seeds',
        value: 'dismiss'
      },
    ]);
  }
}
