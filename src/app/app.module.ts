import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { Geolocation } from "@ionic-native/geolocation";

import { ActivityPage } from "../pages/activity/activity";

@NgModule({
  declarations: [MyApp, HomePage, ActivityPage, LoginPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "ios"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ActivityPage, LoginPage],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
