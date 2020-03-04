import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'app/shared/event-registration.service';
import { ToastrService } from 'ngx-toastr';
import { EventRegistration } from '../shared/services/EventRegistration';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';





@Component({
  selector: 'app-userevent-registration',
  templateUrl: './userevent-registration.component.html',
  styleUrls: ['./userevent-registration.component.scss']
})
export class UsereventRegistrationComponent implements OnInit {

  
  EventTypes: any[] = ['Dancing', 'Music', 'Singing', 'Concert'];
 
angform:FormGroup;


  constructor(public service :EventRegistrationService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,) {}


     ngOnInit() {
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
     resetFields(){
     this.angform = this.fb.group({
        
        Title:new FormControl('', Validators.required),
        EventName:new FormControl('', Validators.required),
        EventType:new FormControl('', Validators.required),
        EventStartDate:new FormControl(''),
        EventEndDate:new FormControl(''),
      
        mobile: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        address:new FormControl('', Validators.required),
        country:new FormControl(''),
        about: new FormControl(''),
        Poster:new FormControl(''),
       
      });
    }

onSubmit(value){
    this.service.createEvent(value)
    .then(
      res => {
        this.resetFields();
        this.toastr.info('Event Add Successfully');
        this.router.navigate(['/Home']);
      }
    )
  }

  

}
