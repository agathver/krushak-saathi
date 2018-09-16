import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CropSuggestionProvider, Store } from "../../providers/crop-suggestion/crop-suggestion";

/**
 * Generated class for the SeedSuggestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-seed-suggestion",
  templateUrl: "seed-suggestion.html"
})
export class SeedSuggestionPage {

  crop: string;

  stores: Store[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // public launchNavigator: LaunchNavigator,
    private suggestions: CropSuggestionProvider
  ) {
    this.crop = navParams.get('crop');
  }

  navigate(coords) {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lon}`, '_system');
  }

  ionViewDidLoad() {
    this.stores = this.suggestions.seedVendorSuggestion(this.crop);
  }
}
