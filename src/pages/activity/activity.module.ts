import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ActivityPage } from "./activity";
import { PipesModule } from "../../pipes/pipes.module";
@NgModule({
  declarations: [ActivityPage],
  imports: [IonicPageModule.forChild(ActivityPage), PipesModule]
})
export class ActivityPageModule {}
