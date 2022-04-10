import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { SIGNUP } from '../query';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpComplete: string = '';

  constructor(private apolloClient: Apollo) {

  }

  ngOnInit(): void {
  }

  signup(username: string, firstname: string, lastname: string, password: string, email: string, type: string) {
    this.apolloClient.mutate({
      mutation: SIGNUP,
      variables: {
        username: username,
        firstname: firstname,
        lastname: lastname,
        password: password,
        email: email,
        type: type
      }
    }).subscribe(res => {
      console.log(res);
      this.signUpComplete = 'Sign up complete!';
    });
  }

  onSubmit(data: any) {
    this.signup(data.username, data.firstname, data.lastname, data.password, data.email, data.type);
  }

}
