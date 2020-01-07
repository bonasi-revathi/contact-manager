import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  today: Date = new Date();
  devName = 'arun';
  accountName;
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem reprehenderit non tempora';
  AccountName: Subscription;

  constructor(private accountDataService: AccountDataService) { }


  ngOnInit() {
    // step4.lets get the latest account name first and always
   this.AccountName= this.accountDataService.latestAccountName.subscribe((name: any) => {
console.log(name);
this.accountName = name;
    })
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy () {
    this.AccountName.unsubscribe();
  }

  onUpdateAccount() {
    this.accountDataService.updateblename(this.accountName + 'Bonasi');
  }

}
