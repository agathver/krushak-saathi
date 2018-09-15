import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import {
  NativeGeocoder,
  NativeGeocoderReverseResult,
  NativeGeocoderOptions
} from "@ionic-native/native-geocoder";

import { ActivityPage } from "../activity/activity";

import { LoginPage } from "../login/login";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  crops: any;
  latitude: any;
  longitude: any;
  location: string;
  options: NativeGeocoderOptions;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {
    this.options = {
      useLocale: true,
      maxResults: 5
    };
  }

  getLocation() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
      })
      .then(() => {
        this.nativeGeocoder
          .reverseGeocode(this.latitude, this.longitude, this.options)
          .then((result: NativeGeocoderReverseResult[]) => {
            console.log(JSON.stringify(result[0]));
            this.location = JSON.stringify(result[0]);
          })
          .catch((error: any) => console.log(error));
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
  openActivity() {
    let activity = this.modalCtrl.create(ActivityPage);
    activity.present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
    this.getLocation();
  }
}
