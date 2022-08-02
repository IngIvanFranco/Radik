import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'Login', pathMatch: 'full'},
  {path:'',loadChildren:()=>import('./feature/feature.module').then(i => i.FeatureModule)},
  {path:'**', redirectTo: 'Login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
