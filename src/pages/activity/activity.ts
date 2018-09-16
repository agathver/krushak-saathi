import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConversationController, IPrompt } from '../../providers/conversation/conversation';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';
import { CropChecklistProvider } from '../../providers/crop-checklist/crop-checklist';
import { CropSuggestionProvider } from '../../providers/crop-suggestion/crop-suggestion';
import { SeedSuggestionPage } from '../seed-suggestion/seed-suggestion';
import { SoilPreparationPage } from '../soil-preparation/soil-preparation';
import { SeedPlantingPage } from '../seed-planting/seed-planting';
import { TimelinePage } from '../timeline/timeline';
import { MandiPricesPage } from '../mandi-prices/mandi-prices';

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
    private cropChecklist: CropChecklistProvider,
    private suggestions: CropSuggestionProvider,
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
      this.cropTasks();
    }
  }

  onSend() {
    this.activities.push({
      type: 'user-response',
      text: this.currentResponse,
    });

    if(this.currentResponse === 'mandi prices') {
      this.navCtrl.push(MandiPricesPage);
    }

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
    const landSize = await this.conversationCtrl.prompt('What is the size of your land (acres)?');

    const cropsText = await this.conversationCtrl.prompt('What crops do you grow?');
    console.log(cropsText);
    const crops = cropsText.split(',');

    console.log(name, landSize, crops);

    this.userProvider.register({
      name,
      landSize,
      crops
    });

    this.conversationCtrl.clear();

    this.cropTasks();
  }

  async cropTasks() {

    console.log('Crop tasks');

    const crop = await this.cropChecklist.currentCrop();

    if (!crop) {
      return this.cropChooser();
    }

    console.log(await this.cropChecklist.isSeedsProcured(), await this.cropChecklist.isSoilPrepared(), await this.cropChecklist.isCropPlanted());

    if (!await this.cropChecklist.isSeedsProcured()) {
      return this.seedVendor(crop);
    } else if (!await this.cropChecklist.isSoilPrepared()) {
      return this.soilPreparation(crop);
    } else if (!await this.cropChecklist.isCropPlanted()) {
      return this.plantSeeds(crop);
    } else {
      return this.prepareCrop(crop);
    }

  }

  async cropChooser() {
    const suggestedCrops = this.suggestions.cropSuggestions().map(x => ({
      title: x.name,
      value: x.id
    }));

    const choosenCrop = await this.conversationCtrl.choice('Choose a crop for cultivation', suggestedCrops);

    this.cropChecklist.currentCrop(choosenCrop);

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

    if (response === 'vendors') {
      this.cropChecklist.setSeedsProcured(true);
      await this.navCtrl.push(SeedSuggestionPage, {
        crop: choosenCrop
      });
    } else if (response === 'dismiss') {
      // mark task as done!
      this.cropChecklist.setSeedsProcured(true);
    }

    this.cropTasks();
  }

  async soilPreparation(crop) {
    // const vendors = this.suggestions.seedVendorSuggestion(choosenCrop);

    const response = await this.conversationCtrl.choice(`Every crop needs a different style of soil preparation. Would you like me to show you how it is done?`,
      [
        {
          title: 'Yes, please',
          value: 'prepare'
        },
        {
          title: 'I have prepared the soil',
          value: 'dismiss'
        },
      ]);

    if (response === 'prepare') {
      await this.navCtrl.push(SoilPreparationPage, {
        crop
      });
      this.cropChecklist.setSoilPrepared(true);
    } else if (response === 'dismiss') {
      // mark task as done!
      this.cropChecklist.setSoilPrepared(true);
    }

    this.cropTasks();
  }

  async plantSeeds(crop) {

    const response = await this.conversationCtrl.choice(`Now allow 5 days for the field to dry and normalize.`,
      [
        {
          title: 'Show me seeding steps',
          value: 'steps'
        },
        {
          title: 'Show timeline',
          value: 'timeline'
        },
      ]);

    if (response === 'steps') {
      this.navCtrl.push(SeedPlantingPage, {
        crop
      });
    } else if (response === 'timeline') {
      // mark task as done!
      this.navCtrl.push(TimelinePage, {
        crop
      });
    }
  }

  async prepareCrop(crop) {

  }
}
