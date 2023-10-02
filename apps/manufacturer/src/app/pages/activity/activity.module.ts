import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HatchComponent} from "./hatch/hatch.component";
import {activityRoutes} from "./activity.routes";
import {ClassificationComponent} from "./classification/classification.component";

const PAGES = [
  HatchComponent,
  ClassificationComponent
];

@NgModule({
  declarations: [PAGES],
  imports: [
    RouterModule.forChild(activityRoutes),
  ],
  providers: [],
  bootstrap: [],
})
export class ActivityModule {
}
