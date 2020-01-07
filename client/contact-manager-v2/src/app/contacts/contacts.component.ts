import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactList: Contact[];
  contactUnSubscribe: Subscription;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactUnSubscribe = this.contactService.getContacts()
      .subscribe((res: Contact[]) => {
        console.log(res);
        this.contactList = res;
      }
      )

  }

  OnDestroy(){
    this.contactUnSubscribe.unsubscribe();
    console.log("Contact Unsubscribed Successfully......");
    if(this.contactList && this.contactList.length>0)
    {
      this.contactList.length=0;
    }
  }
  

}
