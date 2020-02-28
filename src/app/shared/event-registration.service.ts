import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase,AngularFireList  } from '@angular/fire/database';
import { EventRegistration } from './services/EventRegistration';


@Injectable({
  providedIn: 'root'
})
export class EventRegistrationService {
  
  private dbPath = '/EventRegistration';
  public items: any;
  public item: any;


  constructor(private db: AngularFireDatabase) {
   
   }


   addEvent(data) {
    const obj = this.db.database.ref(this.dbPath);
    obj.push(data);
    console.log('Success');
    }



  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Title: new FormControl('' ),
    EventName: new FormControl('',Validators.required),
    EventStartDate: new FormControl(''),
    EventEndDate: new FormControl(''),
    EventType: new FormControl(''),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    city: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),
    about:new FormControl(''),
    Poster:new FormControl(''),
   
   
  });
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      Title: '',
      EventName: '',
      EventType:'',
      EventStartDate: '',
      EventEndDate: '',
      mobile: '',
      city: '',
      address: '',
      country:'',
      about: '',
      Poster: '',
     
    });


   


  }

}
