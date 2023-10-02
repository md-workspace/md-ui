import {Route} from "@angular/router";
import {ProcessComponent} from "./process/process.component";
import {EquipmentComponent} from "./equipment/equipment.component";

export const configRoutes: Route[] = [
  {
    path: 'quy-trinh', component: ProcessComponent
  },
  {
    path: 'thiet-bi', component: EquipmentComponent
  }
];
