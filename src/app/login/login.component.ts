import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { GET_LOGIN } from '../query';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string = '';

  constructor(private apolloClient: Apollo, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  getLogin(username: string, password: string) {
    this.apolloClient.watchQuery<any>({
      query: GET_LOGIN,
      variables: {
        username: username,
        password: password
      }
    }).valueChanges.subscribe(res => {
      console.log(res);

      if (res.data?.login !== null) {
        console.log("Login Success");
        if (res.data?.login.type == "admin") {
          this.navigateTo('customer-listings');
        } else {
          this.navigateTo('admin-listings');
        }
      } else {
        console.log("Login Fail");
        this.errorMsg = "Username or password is not correct.";
      }
    });
  }

  onSubmit(data: any) {
    this.getLogin(data.username, data.password);
  }

  navigateTo(pageName: string) {
    this.router.navigate([pageName]);
  }

}
