import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { Payment } from './entities/payment';
import { PaymentsService } from './services/payments.service';

import { Employee } from './entities/employee';
import { EmployeesService } from './services/employees.service';

@Component({
  //selector: 'employee-detail',
  templateUrl: 'app/payment-create.component.html',
  styleUrls: ['app/payment-create.component.css'],
  providers: [
    PaymentsService, EmployeesService, HTTP_PROVIDERS
  ]
})

export class PaymentCreateComponent implements OnInit {
    title = 'Add New Payment';
    
    errorMessage: string;
    
    payments: Payment[];
    payment = new Payment();
    
    employees: Employee[];
    selectedEmployee = new Employee();
    
    constructor(
        private paymentsService: PaymentsService,
        private employeesService: EmployeesService,
        private routeParams: RouteParams) {
    }
        
    getPayments() {
        this.paymentsService.getPayments()
                        .subscribe(
                        payments => this.payments = payments,
                        error =>  this.errorMessage = <any>error);
    }
    
    populateEmployees(employees: Employee[]) {
        this.employees = employees;
        this.selectedEmployee = employees[0];
    }
    
    getEmployees() {
        this.employeesService.getEmployees()
                        .subscribe(
                        employees => this.populateEmployees(employees), // this.employees = employees,
                        error =>  this.errorMessage = <any>error);
    }
     
    ngOnInit() {
        this.getPayments();
        this.getEmployees();
    }
    
    addPayment (newPayment: Payment) {
        if (!newPayment.Amount) { return; }
        
        //console.log(newPayment);
        //console.log(this.selectedEmployee);
        
        newPayment.Employee = this.selectedEmployee;
        newPayment.EmployeeId = this.selectedEmployee.Id;
        
        this.paymentsService.addPayment(newPayment)
                        .subscribe(
                            employee  => this.payments.push(newPayment),
                            error =>  this.errorMessage = <any>error);
        
        this.getPayments();
        
        window.history.back();
        //location.reload();
    }
    
    goBack() {
        window.history.back();
    }
    
    onSelectEmployee(employeeId) { 
        this.selectedEmployee = null;
        for (var i = 0; i < this.employees.length; i++)
        {
            //console.log(this.employees[i]);
            //console.log(this.employees[i].Id);
            //console.log(employeeId);
          if (this.employees[i].Id == employeeId) {
            this.selectedEmployee = this.employees[i];
            break;
          }
        }
    }
}