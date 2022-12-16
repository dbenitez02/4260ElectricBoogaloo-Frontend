import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/common/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  currentCategoryId: number;

  //  Le injection
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listEmployees();
    })

  }

  listEmployees() {
    const hasDepartmentId: boolean = this.route.snapshot.paramMap.has('id');
    if(hasDepartmentId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      this.currentCategoryId = 1;
    }

    this.employeeService.getEmployeeList(this.currentCategoryId).subscribe(data => { this.employees = data; })
  }
}
