import { Employee } from './employee';

export class Payment {
  Id: string;
  EmployeeId: string;
//   EmployeeFirstName: string;
//   EmployeeLastName: string;
  Employee: Employee;
  Date: Date;
  Amount: number;
}