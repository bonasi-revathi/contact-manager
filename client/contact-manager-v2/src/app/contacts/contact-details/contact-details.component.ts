import { Component, OnInit ,OnDestroy} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { EditContactDialogComponent } from './edit-contact-dialog/edit-contact-dialog.component';
import { MatDialog } from '@angular/material';
import { Contact } from '../contact';
import { Subscription } from 'rxjs';

// export interface PeriodicElement {
//   name: string;
//   id: number;
//   email: string;
//   phone: number;
//   username:string;
//   address:Object;
//   website:string;
//   company:Object;
// }


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  // displayedColumns: string[] = ['id', 'name', 'email', 'phone','actions'];
  // dataSource;
  // contactList: any[];
  contactData: Contact[];
  contactUnSubscribe: Subscription;
  constructor(private contactService: ContactService, private route: ActivatedRoute, public dialog: MatDialog) {

  }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('contactId'));
    console.log("jhdggvdg",id);
    this.contactUnSubscribe = this.contactService.getContactById(id)
      .subscribe((res: Contact[]) => {
        console.log("jhdvfh",res);
        this.contactData = res;
        console.log("data",this.contactData)
      }
      );
  }
  openDialog() {
    const dialogRef = this.dialog.open(EditContactDialogComponent, {
      width: '400px',
      data: JSON.parse(JSON.stringify(this.contactData))
    });
    this.contactUnSubscribe = dialogRef.afterClosed().subscribe(async updatedContactData => {
      console.log("dgbkfg",updatedContactData);
      console.log('The dialog was closed');
      const status: any = await this.contactService.updateContact(updatedContactData);
      console.log('The dialog was closed');
      this.contactData = status;
    });
  }

    OnDestroy() {
      this.contactUnSubscribe.unsubscribe();
      if (this.contactData && this.contactData.length > 0) {
        this.contactData.length = 0;
       }
      console.log('Contact-details Unsubscribed Successfully...');
    }
}
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
