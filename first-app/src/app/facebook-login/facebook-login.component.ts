import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

// FB:any;

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {

  constructor() {
        // FB.init({
        //     appId      : '1759185664373542',
        //     cookie     : true,  // enable cookies to allow the server to access
        //                         // the session
        //     xfbml      : true,  // parse social plugins on this page
        //     version    : 'v2.9' // use graph api version 2.5
        // });
    }
 onFacebookLoginClick() {
        // FB.login();
    }

    statusChangeCallback(resp) {
        if (resp.status === 'connected') {
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {
            
        }else {
            
        }
    };
   

  ngOnInit() {
  	 // FB.getLoginStatus(response => {
    //         this.statusChangeCallback(response);
    //     });
  }

}
