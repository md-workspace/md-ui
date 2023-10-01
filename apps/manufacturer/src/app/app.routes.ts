import { Route } from '@angular/router';
import {AppComponent} from "./app.component";
import {StageComponent} from "./pages/stage/stage.component";

export const appRoutes: Route[] = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: 'hoat-dong', component: StageComponent
      }
    ]
  }
];
