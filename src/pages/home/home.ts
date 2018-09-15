import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { ActivityPage } from "../activity/activity";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}
  login() {
    let loginpage = this.modalCtrl.create(LoginPage);
    loginpage.present();
  }

  openActivity() {
    this.navCtrl.setRoot(ActivityPage);
  }
}
