import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../common/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Department } from '../common/department';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';
  private departmentUrl ='http://localhost:8080/api/departments';

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(departmentId: number): Observable<Employee[]> {
    const searchUrl = `${this.baseUrl}/search/findByDepartmentId?id=${departmentId}`; 

    return this.httpClient.get<GetResponseEmployees>(searchUrl).pipe(
      map(response => response._embedded.employees)
    );
  } //  End of getEmployeeList()

  getDeparments(): Observable<Department[]> { 
    return this.httpClient.get<GetResponseDepartment>(this.departmentUrl).pipe( 
          map(response => response._embedded.department)); 
      } 
} //  End of EmployeeService

interface GetResponseEmployees {
  _embedded: { employees: Employee[]}
}

interface GetResponseDepartment {
  _embedded: { department: Department[]}
}
