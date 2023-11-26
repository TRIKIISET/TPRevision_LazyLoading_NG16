import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarddirecteurComponent } from './components/Directeur/dashboarddirecteur/dashboarddirecteur.component';
import { DashboardadminComponent } from './components/admin/dashboardadmin/dashboardadmin.component';
import { ListcarsComponent } from './components/admin/listcars/listcars.component';
import { DetailcarComponent } from './components/admin/detailcar/detailcar.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { AddcarComponent } from './components/admin/addcar/addcar.component';
import { AccueilComponent } from './components/admin/accueil/accueil.component';
import { authAdminGuard } from './guards/auth-admin.guard';
import { authDirGuard } from './guards/auth-dir.guard';

const routes: Routes = [
  { path: 'directeur', title: 'Directeur', component: DashboarddirecteurComponent,
  canActivate:[authDirGuard] },
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
  },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', title: 'Erreur', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
