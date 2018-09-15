import { NgModule } from '@angular/core';
import { FixedChoiceQuestionComponent } from './fixed-choice-question/fixed-choice-question';
import { ButtonGroupComponent } from './button-group/button-group';
@NgModule({
	declarations: [FixedChoiceQuestionComponent,
    ButtonGroupComponent],
	imports: [],
	exports: [FixedChoiceQuestionComponent,
    ButtonGroupComponent]
})
export class ComponentsModule {}
