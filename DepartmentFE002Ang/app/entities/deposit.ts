import { Employee } from './employee';

export class Deposit {
  Id: string;
  EmployeeId: string;
  Employee: Employee;
  Date: Date;
  Amount: number;
}