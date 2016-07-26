import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
//import { DateFormatter } from "@angular/src/facade/intl"

@Pipe({
    name: 'date',
    pure: true
})

export class GetSafeDatePipe extends DatePipe implements PipeTransform {
    transform(value: any, format: string): string {
        console.log("transform");
        

        value = typeof value === 'string' ?
            Date.parse(value) : value;

        return super.transform(value, format);
    }
}