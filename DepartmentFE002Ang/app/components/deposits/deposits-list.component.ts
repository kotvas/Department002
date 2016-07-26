import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import { Router } from '@angular/router-deprecated';

import { GetSafeDatePipe } from '../../pipes/getSafeDate.pipe';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { Deposit } from '../../entities/deposit';
import { DepositsService } from '../../services/deposits.service';

@Component({
  selector: 'deposits-list',
  templateUrl: 'app/components/deposits/deposits-list.component.html',
  styleUrls:  ['app/components/deposits/deposits-list.component.css'],
  providers: [
    DepositsService, HTTP_PROVIDERS
  ],
  pipes: [ GetSafeDatePipe ]
})

export class DepositsListComponent implements OnInit {
    
    errorMessage: string;
    deposits: Deposit[];
    depositsCount: number;
    
    constructor(
        //private router: Router,
        private depositsService: DepositsService) {   
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