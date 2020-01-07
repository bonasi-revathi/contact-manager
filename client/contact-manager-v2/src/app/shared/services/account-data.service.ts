import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {
  // step1
 accountName = 'Revathi';
// step2.Create BEhaviourSubject with default value for subscribing first
private myProfile =  new BehaviorSubject<any>(this.accountName);
 // step3.create observable for the behaviourSubject so any component can be subscribe to it
 latestAccountName: Observable<any> = this.myProfile.asObservable();
  constructor() { }

  updateblename(params) {
    // this.latestAccountName = params;
    this.myProfile.next(params);
  }
}
