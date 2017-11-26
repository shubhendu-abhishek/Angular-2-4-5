import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  age: number;
  found: boolean;
  constructor(private httpClient: HttpClient) { }
  onNameKeyUp(event: any) {
    this.name = event.target.value;
    //console.log(event.target.value);
    this.found = false;
  }
  getProfile() {
    //console.log(this.name);
    this.httpClient.get(`http://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
      .subscribe((data: any[]) => {
        //console.log(data);
        if (data.length) {
          this.age = data[0].age;
          this.found = true;
        }
      })
  }

  postProfile() {
    this.httpClient.post(`http://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`, {
      name: 'shubhendu',
      age: 23
    })
      .subscribe((data) => {
        console.log(data);
      })
  }
}
