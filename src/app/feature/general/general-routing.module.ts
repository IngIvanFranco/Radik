import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guard';
import { CreateradikComponent } from './createradik/createradik.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'Home',component:IndexComponent},
  {path:'Create-New',component:CreateradikComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
