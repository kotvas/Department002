import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { NgForm } from '@angular/forms';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { Employee } from '../../entities/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  templateUrl: 'app/components/employees/employee-form.component.html',
  styleUrls: ['app/components/employees/employee-form.component.css'],
  providers: [
    EmployeesService, HTTP_PROVIDERS
  ]
})

export class EmployeeFormComponent implements OnInit {
    employeeId : string;
    formType: string;
    formTitle = "FORM TITLE";
    editMode = false;
    
    errorMessage: string;
    employee = new Employee();
    
    constructor(
        private employeesService: EmployeesService,
        private routeParams: RouteParams) {
    }
     
    ngOnInit() {
        this.employeeId = this.routeParams.get('id');
        this.formType = this.routeParams.get('form');
        
        this.initFormMode();
        this.initFormData();
    }
    
    initFormData() {
        if (this.employeeId) {
            this.employeesService.getEmployee(this.employeeId)
                    .subscribe(
                        employee => this.initEmployee(employee),
                        error =>  this.errorMessage = <any>error);
        }
    }
    
    initEmployee(employee) {
        this.employee = employee;
    }
    
    initFormMode() {
        if (this.formType == 'view') {
            this.editMode = false;
            this.formTitle = "Display Employee";
        }
        else if (this.formType == 'new' || this.formType == 'edit') {
            this.editMode = true;
            if (this.formType == 'new') {
                this.formTitle = "New Employee";
            }
            else {
                this.formTitle = "Edit Employee";
            }
        }
    }
    
    onSubmit () {
        console.log('onSubmit');
        if (this.formType == 'new') {
            console.log('new')
            this.employeesService.addEmployee(this.employee)
                        .subscribe(
                            ()  => window.history.back(),
                            error =>  this.errorMessage = <any>error);
        }
        else if (this.formType == 'edit') {
            console.log('edit')
            this.employeesService.updateEmployee(this.employee)
                        .subscribe(
                            ()  => window.history.back(),
                            error =>  this.errorMessage = <any>error);
        }
    }
    
    goBack() {
        window.history.back();
    }
    
    myLog(value) {
        console.log(value);
    }
    
    
}