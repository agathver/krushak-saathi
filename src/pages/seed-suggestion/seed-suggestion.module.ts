import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeedSuggestionPage } from './seed-suggestion';

@NgModule({
  declarations: [
    SeedSuggestionPage,
  ],
  imports: [
    IonicPageModule.forChild(SeedSuggestionPage),
  ],
})
export class SeedSuggestionPageModule {}
