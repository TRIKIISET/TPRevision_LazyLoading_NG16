import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarddirecteurComponent } from './components/dashboarddirecteur/dashboarddirecteur.component';
import { authDirGuard } from './auth-dir.guard';

const routes: Routes = [
  { path: '', title: 'Directeur', component: DashboarddirecteurComponent,
  canActivate:[authDirGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirecteurRoutingModule { }
