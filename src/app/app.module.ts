import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule, Button } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";

import { ActivityPage } from "../pages/activity/activity";
import { UserProvider } from '../providers/user/user';
import { IonicStorageModule } from "@ionic/storage";

import { CurrentWeatherComponent } from '../components/current-weather/current-weather';
import { WeatherProvider } from '../providers/weather/weather';
import { HttpClientModule } from '@angular/common/http';
import { ConversationController } from "../providers/conversation/conversation";
import { FixedChoiceQuestionComponent } from "../components/fixed-choice-question/fixed-choice-question";
import { ButtonGroupComponent } from "../components/button-group/button-group";
import { CropSuggestionProvider } from '../providers/crop-suggestion/crop-suggestion';
import { CropChecklistProvider } from '../providers/crop-checklist/crop-checklist';
import { SeedSuggestionPage } from "../pages/seed-suggestion/seed-suggestion";
import { SoilPreparationPage } from "../pages/soil-preparation/soil-preparation";
import { SeedPlantingPage } from "../pages/seed-planting/seed-planting";
import { MandiPricesPage } from "../pages/mandi-prices/mandi-prices";
import { FertilizerRecommendationsPage } from "../pages/fertilizer-recommendations/fertilizer-recommendations";
import { TimelinePage } from "../pages/timeline/timeline";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActivityPage,
    LoginPage,
    CurrentWeatherComponent,
    ButtonGroupComponent,
    FixedChoiceQuestionComponent,
    SeedSuggestionPage,
    SoilPreparationPage,
    SeedPlantingPage,
    MandiPricesPage,
    FertilizerRecommendationsPage,
    TimelinePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }),
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActivityPage,
    LoginPage,
    SeedSuggestionPage,
    SoilPreparationPage,
    SeedPlantingPage,
    MandiPricesPage,
    FertilizerRecommendationsPage,
    TimelinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WeatherProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider,
    ConversationController,
    CropSuggestionProvider,
    CropChecklistProvider
  ]
})
export class AppModule { }
