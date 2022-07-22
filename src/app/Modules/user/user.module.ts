import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  
  ]
})
export class UserModule { }
