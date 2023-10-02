import {Route} from "@angular/router";
import {StageComponent} from "./stage/stage.component";
import {ClassificationComponent} from "./classification/classification.component";
import {HatchComponent} from "./hatch/hatch.component";

export const activityRoutes: Route[] = [
  {
    path: 'hoat-dong', component: StageComponent
  },
  {
    path: 'phan-loai', component: ClassificationComponent
  },
  {
    path: 'ap-trung', component: HatchComponent
  }
];
