import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService{
constructor(private http:Http){}

storeData(servers:any[]){
	console.log("storeData");
this.http.post('http://localhost:8000/api/v1/auth/user/login',servers);
}
}