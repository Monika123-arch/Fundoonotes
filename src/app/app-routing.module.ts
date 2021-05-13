import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DisplayComponent } from './component/display/display.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { LoginpageComponent } from './component/Loginpage/loginpage.component';
import { PageloginComponent } from './component/pagelogin/pagelogin.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';

const routes: Routes = [
  {
    path : "",
    redirectTo: "login",
    pathMatch: "full"
  },
  { 
    path: 'register',
    component: LoginpageComponent
  },
  {
    path: 'login',
    component: PageloginComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetpasswordComponent
  },
  {
    path: 'forgot',
    component: ForgotpasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'display',
    component: DisplayComponent
  },


  {
    path: "**",
    redirectTo: "login",
    pathMatch: "full"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

