import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { Geolocation } from "@ionic-native/geolocation";
import { NativeGeocoder } from "@ionic-native/native-geocoder";

import { ActivityPage } from "../pages/activity/activity";
import { WelcomePage } from "../pages/welcome/welcome";

@NgModule({
  declarations: [MyApp, HomePage, ActivityPage, LoginPage, WelcomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "ios"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ActivityPage, WelcomePage, LoginPage],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
