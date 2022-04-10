import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListingsComponent } from './customer-listings/customer-listings.component';
import { AdminListingsComponent } from './admin-listings/admin-listings.component';
import { SearchListingsComponent } from './search-listings/search-listings.component';
import { AddListingComponent } from './add-listing/add-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CustomerListingsComponent,
    AdminListingsComponent,
    SearchListingsComponent,
    AddListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ApolloModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (HttpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: HttpLink.create({
          uri: 'http://localhost:5000/graphql'
        })
      };
    },
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
