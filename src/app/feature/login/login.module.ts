import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginService } from './services/login.service'; 
import { NavBarComponent } from '../../modules/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    LoginComponent,
    NavBarComponent
    
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [ HttpClientModule,LoginService,]

})
export class LoginModule { }
