import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const CONTACT_ROUTES: Routes = [
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent },
      { path: 'add-contact', component: AddContactComponent },
      { path: ':contactId', component: ContactDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CONTACT_ROUTES) //registering child routes
  ],
  exports: [
    RouterModule // configures child routes are exported
  ]
})
export class ContactRoutingModule { }
