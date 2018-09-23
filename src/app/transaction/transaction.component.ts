import { Component } from '@angular/core';
import {TransactionService} from '../services/transaction.service';
import {AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  transactions: AngularFireList<any>;
  transactionsWithKeys$;
  totalAmount: number;

  constructor(private dbService: TransactionService) {
    this.transactions = this.dbService.getNodeList();
    this.transactionsWithKeys$ = TransactionService.getNodeListKeys(this.transactions);
    this.calculateTotalAmount();
  }
  calculateTotalAmount () {
    this.transactions.valueChanges().subscribe( transactions => {
      let total = 0;
      transactions.forEach((object) => {
        total += object.amount;
      });
      this.totalAmount = total;
    });
  }

  addTransaction() {
    this.transactions.push({
      amount: 300,
      user: 'Sussie',
      sourceCurrency: 'EUR',
      targetCurrency: 'VEF'
    });
  }
}
