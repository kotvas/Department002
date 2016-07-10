import { EventType } from './adminEntities/eventType'
import { Employee } from './employee';

export class DepartmentEvent {
  Id: string;
  
  EventTypeId: string;
  EventType: EventType;
  
  EmployeeId: string;
  Employee: Employee;
  
  DateOfEvent: Date;
  DateCreated: Date;
  
  AmountOfEmployee: number;
  AmountOfDepartment: number;
}