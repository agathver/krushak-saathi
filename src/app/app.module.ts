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

import { CurrentWeatherComponent } from '../components/current-weather/current-weather';
import { WeatherProvider } from '../providers/weather/weather';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActivityPage,
    LoginPage,
    CurrentWeatherComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActivityPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    WeatherProvider
  ]
})
export class AppModule { }
