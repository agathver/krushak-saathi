import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";

import { ActivityPage } from "../activity/activity";
import { UserProvider } from "../../providers/user/user";

@Component({
  selector: "page-login",
  templateUrl: "login.html",
})
export class LoginPage {
  crops: any;
  latitude: any;
  longitude: any;
  location: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private userProvider: UserProvider
  ) {
  }

  openActivity() {
    let activity = this.modalCtrl.create(ActivityPage);
    activity.present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
}
