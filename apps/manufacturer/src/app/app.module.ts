import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {AppLayoutModule} from "./layout/app.layout.module";
import {StageComponent} from "./pages/stage/stage.component";
import {HatchComponent} from "./pages/hatch/hatch.component";

const PAGES = [
  StageComponent,
  HatchComponent
];

@NgModule({
  declarations: [PAGES, AppComponent],
  imports: [
    AppLayoutModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
