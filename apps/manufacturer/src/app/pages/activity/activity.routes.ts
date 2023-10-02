import {Route} from "@angular/router";
import {ClassificationComponent} from "./classification/classification.component";
import {HatchComponent} from "./hatch/hatch.component";

export const activityRoutes: Route[] = [
  {
    path: 'phan-loai', component: ClassificationComponent
  },
  {
    path: 'ap-trung', component: HatchComponent
  }
];
