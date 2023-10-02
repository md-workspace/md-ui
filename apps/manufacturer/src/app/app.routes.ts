import {Route} from '@angular/router';
import {AppComponent} from "./app.component";

export const appRoutes: Route[] = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: 'activity', loadChildren: () => import('./pages/activity/activity.module').then((m) => m.ActivityModule),
      }
    ]
  }
];
