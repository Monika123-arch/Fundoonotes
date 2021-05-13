import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginpageComponent } from './component/Loginpage/loginpage.component';
import { ClarityModule } from '@clr/angular';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { PageloginComponent } from './component/pagelogin/pagelogin.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { FundooheaderComponent } from './component/fundooheader/fundooheader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DisplayComponent } from './component/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    PageloginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    FundooheaderComponent,
    DashboardComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
