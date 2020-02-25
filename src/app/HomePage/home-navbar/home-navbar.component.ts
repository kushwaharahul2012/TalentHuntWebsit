import { Component,  OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EventRegistrationComponent } from '../event-registration/event-registration.component';


@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {
  constructor( private dialog: MatDialog,) { }

  ngOnInit() {
  }

  onCreate() {
   
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EventRegistrationComponent,dialogConfig);
  }


}
