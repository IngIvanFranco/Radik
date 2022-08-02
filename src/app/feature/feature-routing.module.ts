import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { HomeComponent } from './general/home/home.component';


const routes: Routes = [
  {path:'Login',loadChildren: () => import('./login/login.module').then(i => i.LoginModule)},
  {path:'Radik',component:HomeComponent, loadChildren: () => import('./general/general.module').then(i => i.GeneralModule), canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
