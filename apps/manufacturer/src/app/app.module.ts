import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {AppTopBarComponent} from './layout/app.topbar.component';
import {AppFooterComponent} from './layout/app.footer.component';
import {AppLayoutComponent} from './layout/app.layout.component';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {ConfigModule} from "./pages/config/config.module";

@NgModule({
  declarations: [
    AppTopBarComponent,
    AppFooterComponent,
    AppLayoutComponent,
    AppComponent,
  ],
  imports: [
    ConfigModule,
    BrowserModule,
    CommonModule,
    DropdownModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
