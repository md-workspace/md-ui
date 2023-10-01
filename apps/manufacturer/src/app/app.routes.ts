import {Route} from '@angular/router';
import {AppComponent} from "./app.component";
import {StageComponent} from "./pages/stage/stage.component";
import {ClassificationComponent} from "./pages/classification/classification.component";
import {HatchComponent} from "./pages/hatch/hatch.component";

export const appRoutes: Route[] = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: 'hoat-dong', component: StageComponent
      },
      {
        path: 'phan-loai', component: ClassificationComponent
      },
      {
        path: 'ap-trung', component: HatchComponent
      }
    ]
  }
];
