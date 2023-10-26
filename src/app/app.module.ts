import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './SitioUTL/homepage/homepage.component';
import { NavbarComponent } from './SitioUTL/navbar/navbar.component';
import { LateralNavbarComponent } from './SitioUTL/lateral-navbar/lateral-navbar.component';
import { CampoTramitesComponent } from './SitioUTL/campo-tramites/campo-tramites.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LateralNavbarComponent,
    CampoTramitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [HomepageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
