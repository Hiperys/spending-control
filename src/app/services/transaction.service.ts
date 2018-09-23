import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends DataService {

  constructor(db: AngularFireDatabase) {
    super('transactions', db);
  }
}
