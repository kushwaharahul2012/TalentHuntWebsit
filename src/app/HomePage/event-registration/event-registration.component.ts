import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss']
})
export class EventRegistrationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EventRegistrationComponent>) { }

  ngOnInit() {
  }

}
