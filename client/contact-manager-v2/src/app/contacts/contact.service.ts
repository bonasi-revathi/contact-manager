import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url:string='http://localhost:3001/api/contacts';
  constructor(private http: HttpClient) { }

  // 1. get data from component

  // createContact(contactData:any){
  //   console.log(contactData);

  //   // 2. send data to rest api
  //         // 2.1 identify the REST api URL.
  //         // 2.2 Http method: POST.
  //   return this.http.post(this.url,contactData)
  //   .pipe(map((resp : any)=>{
  //     console.log(resp);
  //     return resp;
  //   }));

  //   // 3. get resp from rest api.

  //   // 4. send it back to component.
  // }

  createContact( contactData: Contact ) {
    console.log(contactData);

    // 2. send data to rest api
      // 2.1 identify the REST API URL https://jsonplaceholder.typicode.com/users
      // 2.2. Http Method: POST

    const createContactPromise = new Promise( (resolve, reject) =>{
      this.http.post(this.url, contactData)
            .toPromise()
            .then( ( res: Contact) => {
              console.log(res);
              resolve(res);
            })
            .catch( (err: Contact) => {
              console.log(err);
            })
            .finally( () =>{
              console.log('Its Over');
            });
    } );

    return createContactPromise as Promise<Contact>;
  }

  getContacts():Observable<Contact[]> {

    console.log("Data from component ")

    return this.http.get(this.url).
      pipe(map((resp: Contact[]) => {
        console.log(resp);
        return resp;
      }))

  }
  getContactById(contactId:number):Observable<Contact[]>
  {
    const CONTACT_URL = this.url+"/"+contactId;
    return this.http.get(CONTACT_URL)
    .pipe(map ((res: Contact[]) =>
      {
        return res;
      }));

  }

  updateContact(updatabaleContactData){
    console.log("hgdvg",updatabaleContactData)
    const updateContactPromise = new Promise( (resolve, reject) =>{
      this.http.put(this.url+"/"+updatabaleContactData.contactId, updatabaleContactData)
            .toPromise()
            .then( ( res: any) => {
              console.log("resssss",res);
              resolve(res);
            })
            .catch( (err: any) => {
              console.log(err);
            })
            .finally( () =>{
              console.log('Its successfully updated...');
            });
    } );

    return updateContactPromise as Promise<any>;
  }
  }


