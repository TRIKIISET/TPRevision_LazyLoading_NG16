import { NgModule } from '@angular/core';

import { DirecteurRoutingModule } from './directeur-routing.module';
import { MenudirecteurComponent } from './components/menudirecteur/menudirecteur.component';
import { DashboarddirecteurComponent } from './components/dashboarddirecteur/dashboarddirecteur.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboarddirecteurComponent,
    MenudirecteurComponent
  ],
  imports: [
    SharedModule,
    DirecteurRoutingModule
  ]
})
export class DirecteurModule { }
