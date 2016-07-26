import { Pipe, PipeTransform } from '@angular/core';
//import { DatePipe } from '@angular/common';
//import { DateFormatter } from "@angular/src/facade/intl"

import { Employee } from '../entities/employee';

@Pipe({
    name: 'getFilteredEmployees',
    pure: true
})

export class GetFilteredEmployeesPipe implements PipeTransform {
    transform(allEmployees: Employee[], searchValue: string) {
        console.log("GetFilteredEmployeesPipe");
        console.log(searchValue);

        var searchValueToLower = searchValue.toLowerCase();
        
        var filteredEmployees = null;
        if (allEmployees) {
            console.log("filteredEmployees");
            filteredEmployees = allEmployees
                .filter(empl => empl.FirstName.toLowerCase().includes(searchValue));
            console.log(filteredEmployees);
        }

        return filteredEmployees ? filteredEmployees : allEmployees;
    }
}