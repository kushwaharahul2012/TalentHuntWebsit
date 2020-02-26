import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/authentication.service';
@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss']
})
export class EventRegistrationComponent implements OnInit {

 
  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor(public dialogRef: MatDialogRef<EventRegistrationComponent>,
    private router: Router,
    public AuthenticationService: AuthenticationService,)
     { }
    


  ngOnInit() {
  }
  onClose() {
    
    this.dialogRef.close();
  }
 
}

