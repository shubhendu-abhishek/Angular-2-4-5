import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

declare const FB:any;

@Component({
  selector: 'app-facebooklogin',
  templateUrl: './facebooklogin.component.html',
  styleUrls: ['./facebooklogin.component.css']
})
export class FacebookloginComponent implements OnInit {

  constructor() { 
   FB.init({ 
      appId: '1759185664373542',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.4'
    });
}
onFacebookLoginClick(){
	console.log("fb")
	FB.login();
}
   statusChangeCallback(resp) {
        if (resp.status === 'connected') {
        	console.log("connected ");
        	  var uid = resp.authResponse.userID;
    var accessToken = resp.authResponse.accessToken;
    
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {
            console.log("not connected ")
        }else {
            
        }
    };
  ngOnInit() {
  	 FB.getLoginStatus(response => {
  	 	     	  var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
    var name = response.authResponse.name;
    var cover = response.authResponse.cover;
    console.log(uid,accessToken,name);
            this.statusChangeCallback(response);
        });
  }

}
