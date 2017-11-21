import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { LoginService } from './google-signin/login.service';
import { FacebookloginComponent } from './facebooklogin/facebooklogin.component';
@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    GoogleSigninComponent,
    FacebookLoginComponent,
    FacebookloginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
