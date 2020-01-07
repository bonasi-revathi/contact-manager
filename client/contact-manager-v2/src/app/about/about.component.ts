import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
   updateName;
   AccountName: Subscription;
  constructor(private accountDataService: AccountDataService) { }

  ngOnInit() {

    this.AccountName = this.accountDataService.latestAccountName.subscribe((name: any ) =>{
this.updateName = name;
    });

  }
  ngOnDestroy() {
    this.AccountName.unsubscribe();


  }

}
