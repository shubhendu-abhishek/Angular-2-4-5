import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  name: string = "";
  names = ['Shubhendu', 'Abhishek', 'Ravi', 'Shukla'];
  constructor() { }

  ngOnInit() {
  }
  eventFromOuter(passed: string) {
    this.name = passed;
  }
}
