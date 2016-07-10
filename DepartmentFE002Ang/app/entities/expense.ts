import { DepartmentEvent} from './department-event'
import { Employee } from './employee';

export class Expense {
  Id: string;
  
  DepartmentEventId: string;
  DepartmentEvent: DepartmentEvent;
  
  EmployeeId: string;
  Employee: Employee;
  
  Amount: number;
  DateCreate: Date;
  DateOfPayment: Date;
  Status: string;
}