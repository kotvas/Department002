import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { Deposit } from '../../entities/deposit';
import { DepositsService } from '../../services/deposits.service';

import { Employee } from '../../entities/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  templateUrl: 'app/components/deposits/deposit-create.component.html',
  styleUrls: ['app/components/deposits/deposit-create.component.css'],
  providers: [
    DepositsService, EmployeesService, HTTP_PROVIDERS
  ]
})

export class DepositCreateComponent implements OnInit {
    title = 'Add New Deposit';
    
    errorMessage: string;
    
    deposits: Deposit[];
    deposit = new Deposit();
    
    employees: Employee[];
    selectedEmployee = new Employee();
    
    constructor(
        private depositsService: DepositsService,
        private employeesService: EmployeesService,
        private routeParams: RouteParams) {
    }
        
    getDeposits() {
        this.depositsService.getDeposits()
                        .subscribe(
                        deposits => this.deposits = deposits,
                        error =>  this.errorMessage = <any>error);
    }
    
    populateEmployees(employees: Employee[]) {
        this.employees = employees;
        this.selectedEmployee = employees[0];
    }
    
    getEmployees() {
        this.employeesService.getEmployees()
                        .subscribe(
                        employees => this.populateEmployees(employees),
                        error =>  this.errorMessage = <any>error);
    }
     
    ngOnInit() {
        this.getDeposits();
        this.getEmployees();
    }
    
    addDeposit (newDeposit: Deposit) {
        if (!newDeposit.Amount) { return; }
        
        //console.log(newDeposit);
        //console.log(this.selectedEmployee);
        
        newDeposit.Employee = this.selectedEmployee;
        newDeposit.EmployeeId = this.selectedEmployee.Id;
        
        this.depositsService.addDeposit(newDeposit)
                        .subscribe(
                            employee  => this.deposits.push(newDeposit),
                            error =>  this.errorMessage = <any>error);
        
        this.getDeposits();
        
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