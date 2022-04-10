import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ADMINLISTINGS } from '../query';

@Component({
  selector: 'app-admin-listings',
  templateUrl: './admin-listings.component.html',
  styleUrls: ['./admin-listings.component.css']
})
export class AdminListingsComponent implements OnInit {

  adminListings: any = [];

  constructor(private apolloClient: Apollo, private router: Router) {
    this.getAdminListings();
  }

  ngOnInit(): void {
  }

  getAdminListings() {
    this.apolloClient.watchQuery<any>({
      query: GET_ADMINLISTINGS
    }).valueChanges.subscribe(res => {
      console.log(res.data);
      this.adminListings = res.data?.getAdminListings;
    });
  }

  navigateTo(pageName: string) {
    this.router.navigate([pageName]);
  }

}
