import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase,AngularFireList  } from '@angular/fire/database';
import { EventRegistration } from './services/EventRegistration';
import { AngularFirestore, validateEventsArray } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class EventRegistrationService {
  


  constructor(public db: AngularFirestore,
   ) {
   
   }

    createEvent(value){
      return this.db.collection('events').add({
        Title: value.Title,
        EventName: value.EventName,
        EventType: value.EventType,
        EventStartDate: value.EventStartDate,
        EventEndDate: value.EventEndDate,
        mobile: value.mobile,
        city: value.city,
        address: value.address,
        country:value.country,
        about: value.about,
        Poster: value.Poster,
      });
}

}
