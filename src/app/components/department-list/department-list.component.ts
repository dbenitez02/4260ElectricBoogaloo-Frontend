import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/common/department';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  
  departments: Department[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.listDepartments();
  }


  listDepartments() {
    this.employeeService.getDeparments().subscribe( 
      data => { 
        console.log('Departments=' + JSON.stringify(data)); // write JSON data to console 
        this.departments = data; 
      } ); 
  }

}
