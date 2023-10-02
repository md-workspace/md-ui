import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProcessComponent} from './process/process.component';
import {EquipmentComponent} from "./equipment/equipment.component";
import {RouterModule} from "@angular/router";
import {configRoutes} from "./config.routes";

@NgModule({
  declarations: [ProcessComponent, EquipmentComponent],
  imports: [CommonModule, RouterModule.forChild(configRoutes)],
})
export class ConfigModule {
}
