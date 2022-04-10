import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { ADD_NEWLISTING } from '../query';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  complete: string = '';

  constructor(private apolloClient: Apollo, private router: Router) { }

  ngOnInit(): void {
  }

  addAdminListing(listing_id: string, listing_title: string, description: string, street: string, city: string, postal_code: string, price: string, email: string, username: string) {
    this.apolloClient.mutate({
      mutation: ADD_NEWLISTING,
      variables: {
        listing_id: listing_id,
        listing_title: listing_title,
        description: description,
        street: street,
        city: city,
        postal_code: postal_code,
        price: price,
        email: email,
        username: username
      }
    }).subscribe(res => {
      console.log(res);
      this.complete = 'New listing added!';
    });
  }

  onSubmit(data: any) {
    this.addAdminListing(data.listing_id, data.listing_title, data.description, data.street, data.city, data.postal_code, data.price, data.email, data.username);
  }

}
