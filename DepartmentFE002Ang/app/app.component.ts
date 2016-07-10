import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

//Admin section
import { EventTypesComponent } from './components/adminComponents/eventTypes/event-types.component';
import { EventTypeCreateComponent } from './components/adminComponents/eventTypes/event-type-create.component';

//Employees section
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailComponent } from './components/employees/employee-detail.component';
import { EmployeeCreateComponent } from './components/employees/employee-create.component';

//Deposits section
import { DepositsComponent } from './components/deposits/deposits.component';
import { DepositCreateComponent } from './components/deposits/deposit-create.component';

//Department Events section
import { DepartmentEventsComponent } from './components/departmentEvents/department-events.component';
import { DepartmentEventCreateComponent } from './components/departmentEvents/department-event-create.component';


//Expenses section
import { ExpensesComponent } from './components/expenses/expenses.component';

//Employees Accounts section

import { EmployeesAccountsComponent } from './components/employeesAccounts/employees-accounts.component';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  {
    path: '/admin/eventTypeCreate',
    name: 'EventTypeCreate',
    component: EventTypeCreateComponent
  },
  {
    path: '/admin/eventTypes',
    name: 'EventTypes',
    component: EventTypesComponent
  },
  {
    path: '/detail/:id',
    name: 'EmployeeDetail',
    component: EmployeeDetailComponent
  },
  {
    path: '/create',
    name: 'EmployeeCreate',
    component: EmployeeCreateComponent
  },
  {
    path: '/employees',
    name: 'Employees',
    component: EmployeesComponent,
    useAsDefault: true
  },
  {
    path: '/depositCreate',
    name: 'DepositCreate',
    component: DepositCreateComponent
  },
  {
    path: '/deposits',
    name: 'Deposits',
    component: DepositsComponent
  },
  {
    path: '/departmentEventCreate',
    name: 'DepartmentEventCreate',
    component: DepartmentEventCreateComponent
  },
  {
    path: '/departmentEvents',
    name: 'DepartmentEvents',
    component: DepartmentEventsComponent
  },
  {
    path: '/expenses',
    name: 'Expenses',
    component: ExpensesComponent
  },
  {
    path: '/employeesAccounts',
    name: 'EmployeesAccounts',
    component: EmployeesAccountsComponent
  }
])

export class AppComponent {
  title = 'Department';
}
