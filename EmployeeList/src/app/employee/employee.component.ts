import { Component, OnInit } from '@angular/core';
import { EmployeeModule } from '../employee.module';
import { EMPLOYEES } from '../employee.list';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees = EMPLOYEES;
  selectedEmployee: EmployeeModule;
  constructor() { }

  ngOnInit() {
  }
  onSelect(employeeModule: EmployeeModule): void {
    console.log(employeeModule);
    this.selectedEmployee = employeeModule;
  }
}
