import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { DepositsListComponent} from './deposits-list.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/deposits/deposits.component.html',
  styleUrls:  ['app/components/deposits/deposits.component.css'],
  providers: [
    HTTP_PROVIDERS
  ],
  directives:[DepositsListComponent]
})

export class DepositsComponent implements OnInit {
    title = 'List of Deposits';
        
    errorMessage: string;
    
    constructor(
        private router: Router) {   
    }
    
    ngOnInit() {
    }
    
    gotoDepositCreate() {
        this.router.navigate(['DepositCreate'])
    }
}