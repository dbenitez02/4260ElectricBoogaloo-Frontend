import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './service/employee.service';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';

const routes: Routes = [
  { path:'department/:id', component: EmployeeListComponent },
  { path: 'department', component: EmployeeListComponent },
  {path: 'employees', component: EmployeeListComponent}, 
  {path: '', redirectTo: '/employees', pathMatch: 'full'}, 
  {path: '**', redirectTo: '/employees', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    DepartmentListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
