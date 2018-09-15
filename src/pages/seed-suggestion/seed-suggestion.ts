import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  LaunchNavigator,
  LaunchNavigatorOptions
} from "@ionic-native/launch-navigator";

/**
 * Generated class for the SeedSuggestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-seed-suggestion",
  templateUrl: "seed-suggestion.html"
})
export class SeedSuggestionPage {
  seedlocations: Array<any> = [
    {
      name: "quality seeds",
      coords: {
        long: 768.43,
        lat: 78.43
      },
      rating: 5
    },
    {
      name: "kamlesh seeds",
      coords: {
        long: 243.67,
        lat: 45.67
      },
      rating: 3
    }
  ];
  options: LaunchNavigatorOptions = {
    start: [50, 50]
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public launchNavigator: LaunchNavigator
  ) {}

  navigate(lat, long) {
    this.launchNavigator
      .navigate([lat, long], this.options)
      .then(
        success => console.log("Launched navigator"),
        error => console.log("Error launching navigator", error)
      );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SeedSuggestionPage");
  }
}
