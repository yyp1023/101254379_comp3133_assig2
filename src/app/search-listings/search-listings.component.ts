import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ADMINLISTINGBYNAME } from '../query';

@Component({
  selector: 'app-search-listings',
  templateUrl: './search-listings.component.html',
  styleUrls: ['./search-listings.component.css']
})
export class SearchListingsComponent implements OnInit {

  adminListings: any = [];

  constructor(private apolloClient: Apollo, private router: Router) { }

  ngOnInit(): void {
  }

  getAdminListingByName(username: string) {
    this.apolloClient.watchQuery<any>({
      query: GET_ADMINLISTINGBYNAME,
      variables: {
        username: username
      }
    }).valueChanges.subscribe(res => {
      console.log(res);
      this.adminListings = res.data?.getAdminListingByName;
    });
  }

  onSearch(data: any) {
    this.getAdminListingByName(data.username);
  }

  navigateTo(pageName: string) {
    this.router.navigate([pageName]);
  }

}
