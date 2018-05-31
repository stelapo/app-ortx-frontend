import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationGuard, MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisionComponent } from './division/division.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DivisionComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsAdalAngular6Module.forRoot({
      tenant: environment.tenant,
      clientId: environment.clientId,
      redirectUri: window.location.href,
      endpoints: environment.endpoints,
      navigateToLoginRequestUrl: false,
      cacheLocation: 'sessionStorage',
    })
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
