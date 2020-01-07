import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  isSaved: boolean;
  message: string = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  // step1 create form group
  contactForm: FormGroup;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    // step2 instantiate it with object
    this.contactForm = new FormGroup({
      // step3 create form controlls
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }
  // Normal Approch

  // onCreateContact(){
  //   console.log(this.contactForm.value);
  //   this.contactService.createContact(this.contactForm.value)
  //   .subscribe((res:any)=> {
  //     console.log(res);
  //     if(res && res.id){
  //       this.isSaved=true;
  //       this.message="Contact Saved Successfully";
  //     }
  //     else{
  //       this.message="Contact Not Saved!";
  //     }
  //   });
  // 2.pass the data to service.
  // 3.get the response from the service.
  // 4.patch the response with html.


  // Promises Approch
  async onCreateContact() {
    console.log(this.contactForm.value);
    // 2. pass the data to service
    const status: any = await this.contactService.createContact(this.contactForm.value);
    console.log(status);
    if (status && status.contactId) {
      this.isSaved = true;
      this.message = 'Contact Saved Successfully';
    } else {
      this.message = 'Contact Not Saved!';
    }
  }
}
