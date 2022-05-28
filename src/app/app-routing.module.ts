import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AutopostsComponent } from './autoposts/autoposts.component';
import { BasesComponent } from './bases/bases.component';
import { BillingComponent } from './billing/billing.component';
import { BountysComponent } from './bountys/bountys.component';
import { CurrencyComponent } from './currency/currency.component';
import { EventfeedComponent } from './eventfeed/eventfeed.component';
import { FactionsComponent } from './factions/factions.component';
import { HomeComponent } from './home/home.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { PlayersComponent } from './players/players.component';
import { SafezonesComponent } from './safezones/safezones.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'eventfeed', component: EventfeedComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'bases', component: BasesComponent },
  { path: 'safezones', component: SafezonesComponent },
  { path: 'factions', component: FactionsComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'bountys', component: BountysComponent },
  { path: 'autoposts', component: AutopostsComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'billing', component: BillingComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
