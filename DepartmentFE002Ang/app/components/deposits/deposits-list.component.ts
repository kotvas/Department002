import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import { Router } from '@angular/router-deprecated';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { Deposit } from '../../entities/deposit';
import { DepositsService } from '../../services/deposits.service';

import { HelpersComponent} from '../../shared/helpers.component';

@Component({
  selector: 'deposits-list',
  templateUrl: 'app/components/deposits/deposits-list.component.html',
  styleUrls:  ['app/components/deposits/deposits-list.component.css'],
  providers: [
    DepositsService, HTTP_PROVIDERS, HelpersComponent
  ]
})

export class DepositsListComponent implements OnInit {
    
    errorMessage: string;
    deposits: Deposit[];
    depositsCount: number;
    
    constructor(
        //private router: Router,
        private depositsService: DepositsService,
        private helpersComponent: HelpersComponent) {   
    }
    
    getDeposits() {
        this.depositsService.getDeposits()
                        .subscribe(
                        deposits => this.initDeposits(deposits),
                        error =>  this.errorMessage = <any>error);
    }
    
    initDeposits(deposits) {
        this.deposits = deposits;
        this.depositsCount = deposits.length;
    }
    
    logMessage(value) {
        console.log(value);
    }
     
    ngOnInit() {
        this.getDeposits();
    }
}