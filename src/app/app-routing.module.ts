import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserslistComponent } from './userslist/userslist.component';
const path=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'signup/:id',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:UserslistComponent},
  {path:'**',component:PagenotfoundComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(path)
  ]
})
export class AppRoutingModule { }
