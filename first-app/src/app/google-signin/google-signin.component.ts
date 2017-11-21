import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css']
})
export class GoogleSigninComponent implements OnInit {

  constructor(private LoginService:LoginService) { }

    onSignIn(googleUser) {
      console.log("onSignIn")
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
       
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
       
        
        
        this.LoginService.storeData(id_token);
        console.log("ID Token: " + id_token);
      };

  ngOnInit() {
  }

}
