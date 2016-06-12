import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { EmployeesService } from './services/employees.service';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailComponent } from './components/employees/employee-detail.component';
import { EmployeeCreateComponent } from './components/employees/employee-create.component';


import { PaymentsService }     from './services/payments.service';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentCreateComponent } from './components/payments/payment-create.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    EmployeesService
  ]
})

@RouteConfig([
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
    path: '/PaymentCreate',
    name: 'PaymentCreate',
    component: PaymentCreateComponent
  },
  {
    path: '/payments',
    name: 'Payments',
    component: PaymentsComponent
  }
])

export class AppComponent {
  title = 'Department';
}
