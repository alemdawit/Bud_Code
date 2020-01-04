import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodService {
  goods$
  constructor(private db: AngularFireDatabase) { }

  create(good) {
    return this.db.list('/goods').push(good);
  }
  getALL() {
    this.goods$ = this.db.list('/goods', ref => ref.orderByChild('name')).valueChanges();
    return this.goods$;
  }
  getid() {
    return this.db.list('/goods', ref => ref.orderByChild('name')).snapshotChanges();
  }
  get(GoodID) {
    return this.db.object('/goods/' + GoodID).valueChanges;
  }
}
