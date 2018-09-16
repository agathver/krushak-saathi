import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CropSuggestionProvider } from '../../providers/crop-suggestion/crop-suggestion';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  timeline: { week: number, item: string }[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    cropSuggestions: CropSuggestionProvider
  ) {
    const crop = this.navParams.get('crop');
    this.timeline.push(...(
      cropSuggestions.soilPreparation(crop)
        .concat(cropSuggestions.dailyGuide(crop))
        .map((item, week) => ({ week, item }))
    ));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}
