import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ContactService } from '../../contact.service';
import { Contact } from '../../contact';

@Component({
  selector: 'app-edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styles: []
})
export class EditContactDialogComponent implements OnInit {

  constructor(public contactService: ContactService, public dialogRef: MatDialogRef<EditContactDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Contact[]) {

  }

  ngOnInit() {
    console.log(this.data);

  }
}

