import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, Slides } from "ionic-angular";
/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-activity",
  templateUrl: "activity.html"
})
export class ActivityPage {
  @ViewChild(Slides)
  slides: Slides;

  events = [
    {
      date: "2017-12-26",
      events: [
        {
          id: 1,
          title: "First event"
        },
        {
          id: 3,
          title: "Third event"
        }
      ]
    },
    {
      date: "2017-12-30",
      events: [
        {
          id: 2,
          title: "Second event"
        }
      ]
    },
    {
      date: "2017-12-31",
      events: [
        {
          id: 4,
          title: "Last event"
        }
      ]
    }
  ];

  isThumbsUp = false;
  isThumbsDown = false;
  searchShow = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  showType() {
    this.searchShow = true;
  }
  onCancel(eve) {
    this.searchShow = false;
  }
  onClear(eve) {
    this.searchShow = false;
  }

  checkFocus(eve) {
    this.searchShow = true;
  }

  onInput(eve) {
    console.log(eve.target.value);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ActivityPage");
  }
}
