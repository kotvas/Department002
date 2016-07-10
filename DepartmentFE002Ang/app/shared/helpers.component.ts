import { Component } from '@angular/core';

@Component({
})

export class HelpersComponent {
  convertDate(oldDate: string) {
        let newDate = new Date(oldDate);
        return newDate;
    }
}
