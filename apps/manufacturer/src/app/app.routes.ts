import {Route} from '@angular/router';
import {AppComponent} from "./app.component";

export const appRoutes: Route[] = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: 'activity', loadChildren: () => import('./pages/activity/activity.module').then((m) => m.ActivityModule),
      },
      {
        path: 'cau-hinh', loadChildren: () => import('./pages/config/config.module').then((m) => m.ConfigModule),
      }
    ]
  }
];
