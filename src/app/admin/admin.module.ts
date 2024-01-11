import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { ListcarsComponent } from './components/listcars/listcars.component';
import { DetailcarComponent } from './components/detailcar/detailcar.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { UpdatecarComponent } from './components/updatecar/updatecar.component';
import { MenuadminComponent } from './components/menuadmin/menuadmin.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CarComponent } from './components/car/car.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListcarsComponent,
    DetailcarComponent,
    AddcarComponent,
    UpdatecarComponent,
    MenuadminComponent,
    DashboardadminComponent,
    AccueilComponent,
    CarComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
