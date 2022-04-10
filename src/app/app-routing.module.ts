import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListingComponent } from './add-listing/add-listing.component';
import { AdminListingsComponent } from './admin-listings/admin-listings.component';
import { CustomerListingsComponent } from './customer-listings/customer-listings.component';
import { LoginComponent } from './login/login.component';
import { SearchListingsComponent } from './search-listings/search-listings.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'customer-listings', component: CustomerListingsComponent },
  { path: 'admin-listings', component: AdminListingsComponent },
  { path: 'search-listings', component: SearchListingsComponent },
  { path: 'add-listing', component: AddListingComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
