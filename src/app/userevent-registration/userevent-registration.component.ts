import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'app/shared/event-registration.service';
import { ToastrService } from 'ngx-toastr';
import { EventRegistration } from '../shared/services/EventRegistration';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-userevent-registration',
  templateUrl: './userevent-registration.component.html',
  styleUrls: ['./userevent-registration.component.scss']
})
export class UsereventRegistrationComponent implements OnInit {

 
angform:FormGroup;
  constructor(private service :EventRegistrationService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,) {
      this.eventRegistration();
     }
     eventRegistration(){
       this.angform =this.fb.group({
        $key: [''],
        Title:[''],
        EventName:['', Validators.required],
        EventType:['',Validators.required],
        EventStartDate: [''],
        EventEndDate: [''],
      
        mobile: ['',Validators.required],
        city: [''],
        address: [''],
        country:[''],
        about: [''],
        Poster:[''],

       });
     }
  ngOnInit() {
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }


  addEvent(Title,EventName,EventType,EventStartDate,EventEndDate,mobile,city,address,country,about,Poster){
    const dataObj = {
      Title: Title,
      EventName: EventName,
      EventType:EventType,
      EventStartDate:EventStartDate,
      EventEndDate:EventEndDate,
      mobile:mobile,
      city:city,
      address:address,
      country:country,
      about:about,
      Poster:Poster
    };
    this.service.addEvent(dataObj);
    
   
   
  }

}
