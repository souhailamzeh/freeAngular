import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { EventfeedComponent } from './eventfeed/eventfeed.component';
import { PlayersComponent } from './players/players.component';
import { BasesComponent } from './bases/bases.component';
import { SafezonesComponent } from './safezones/safezones.component';
import { FactionsComponent } from './factions/factions.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { BountysComponent } from './bountys/bountys.component';
import { AutopostsComponent } from './autoposts/autoposts.component';
import { CurrencyComponent } from './currency/currency.component';
import { BillingComponent } from './billing/billing.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    EventfeedComponent,
    PlayersComponent,
    BasesComponent,
    SafezonesComponent,
    FactionsComponent,
    PermissionsComponent,
    BountysComponent,
    AutopostsComponent,
    CurrencyComponent,
    BillingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
