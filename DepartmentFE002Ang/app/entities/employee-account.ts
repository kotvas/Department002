import { Employee } from './employee';

export class EmployeeAccount {
  Id: string;
  
  EmployeeId: string;
  Employee: Employee;
  
  Amount: number;
  DateOfLastUpdate: Date;
}