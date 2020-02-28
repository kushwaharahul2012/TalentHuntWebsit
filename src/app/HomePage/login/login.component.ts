import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
 
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    private toastr: ToastrService,
  
    public AuthenticationService: AuthenticationService,
     ) { }
  

    
  ngOnInit() {

   
  
  }

  Close() {
    this.toastr.info('You Cancel Login');
    this.dialogRef.close();
  }
}
