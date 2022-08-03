import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from 'src/app/modules/menu/menu.component';
import { IndexComponent } from './index/index.component';
import { CreateradikComponent } from './createradik/createradik.component';
import { RegisterService } from './servicios/register.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    IndexComponent,
    CreateradikComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers:[HttpClientModule,RegisterService,Validators]
})
export class GeneralModule { }
