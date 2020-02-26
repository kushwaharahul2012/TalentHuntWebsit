import { Component,  OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EventRegistrationComponent } from '../event-registration/event-registration.component';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from 'app/shared/authentication.service';


@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {
  dialogValue:string; 
  sendValue:string;
  notificationService: any;

  constructor( public dialogRef: MatDialog,
    public dialog: MatDialog,
    private AuthenticationService: AuthenticationService) { }

  ngOnInit() {
  }

onCreate(): void {
 
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
 
  this.dialog.open(EventRegistrationComponent,dialogConfig);
  this.notificationService.success(':: Submitted successfully');
 
  
}

  
  onCreatelogin() {
   
    this.dialog.open(LoginComponent);

  }

}
