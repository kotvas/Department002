import { Component } from '@angular/core';

@Component({
  //selector: 'my-app',
  //templateUrl: 'app/app.component.html',
  //styleUrls: ['app/app.component.css'],
  //directives: [ROUTER_DIRECTIVES],
  //providers: [
  //  ROUTER_PROVIDERS,
  //  EmployeesService
  //]
})

// @RouteConfig([
//   {
//     path: '/detail/:id',
//     name: 'EmployeeDetail',
//     component: EmployeeDetailComponent
//   },
//   {
//     path: '/create',
//     name: 'EmployeeCreate',
//     component: EmployeeCreateComponent
//   },
//   {
//     path: '/employees',
//     name: 'Employees',
//     component: EmployeesComponent,
//     useAsDefault: true
//   },
//   {
//     path: '/PaymentCreate',
//     name: 'PaymentCreate',
//     component: PaymentCreateComponent
//   },
//   {
//     path: '/payments',
//     name: 'Payments',
//     component: PaymentsComponent
//   }
// ])

export class HelpersComponent {
  //title = 'Helper';
  
  convertDate(oldDate: string) {
        let newDate = new Date(oldDate);
        //console.log(newDate);
        return newDate;
    }
}
