import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { ActivityPage } from "../activity/activity";
import { UserProvider } from "../../providers/user/user";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  busy:boolean

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private userProvider:UserProvider) {
  }

  async ngOnInit() {
    this.busy = true;
    const user = await this.userProvider.currentUser();

    this.busy = false;
    if(user) {
      this.openActivity();
    }
  }

  login() {
    let loginpage = this.modalCtrl.create(LoginPage);
    loginpage.present();
  }

  openActivity() {
    this.navCtrl.setRoot(ActivityPage);
  }
}
