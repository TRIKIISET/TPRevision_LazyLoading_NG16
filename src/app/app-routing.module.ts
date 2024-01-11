import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', title: 'Erreur', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
