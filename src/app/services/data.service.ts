import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private node: string, private db: AngularFireDatabase) { }

  static getNodeListKeys(node: AngularFireList<any>) {
    return node.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getNodeList() {
    return this.db.list('/' + this.node);
  }

  getNodeListWithKeys() {
    return this.db.list('/' + this.node).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  // create(resource) {
  //   return this.http.post(this.url, resource)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  //
  // update(resource) {
  //   return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  //
  // delete(id) {
  //   return this.http.delete(this.url + '/' + id)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // private handleError(error: Response) {
  //   if (error.status === 400) {
  //     return throwError(new BadInputError(error.json()));
  //   }
  //   if (error.status === 404) {
  //     return throwError(new NotFoundError());
  //   }
  //   return throwError(new AppError(error));
  // }
}
