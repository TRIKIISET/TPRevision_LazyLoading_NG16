import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { authAdminGuard } from './auth-admin.guard';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListcarsComponent } from './components/listcars/listcars.component';
import { DetailcarComponent } from './components/detailcar/detailcar.component';
import { AddcarComponent } from './components/addcar/addcar.component';

const routes: Routes = [
  {
    path: 'admin', title: 'Admin', component: DashboardadminComponent,
    canActivate:[authAdminGuard],
    children: [
      { path: 'accueil', title: 'Accueil', component: AccueilComponent },
      { path: 'cars', title: 'Voitures', component: ListcarsComponent },
      { path: 'cars/:id', title: 'Détail Voiture', component: DetailcarComponent },
      { path: 'addcar', title: 'Ajout Voiture', component: AddcarComponent },
      { path: '', redirectTo: 'accueil', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
