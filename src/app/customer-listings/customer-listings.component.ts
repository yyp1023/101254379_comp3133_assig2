import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_CUSTOMERLISTINGS } from '../query';

@Component({
  selector: 'app-customer-listings',
  templateUrl: './customer-listings.component.html',
  styleUrls: ['./customer-listings.component.css']
})
export class CustomerListingsComponent implements OnInit {

  customerListings: any = [];

  constructor(private apolloClient: Apollo, private router: Router) {
    this.getCustomerListings();
  }

  ngOnInit(): void {
  }

  getCustomerListings() {
    this.apolloClient.watchQuery<any>({
      query: GET_CUSTOMERLISTINGS
    }).valueChanges.subscribe(res => {
      console.log(res);
      this.customerListings = res.data?.getCustomerListings;
    });
  }

  navigateTo(pageName: string) {
    this.router.navigate([pageName]);
  }

}
