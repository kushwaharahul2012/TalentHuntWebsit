import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../shared/services/user';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  constructor(
    public angularFireAuth: AngularFireAuth,
   
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private toastr: ToastrService,)
     { 
    this.userData = angularFireAuth.authState;
  }



  form: FormGroup = new FormGroup({
   
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
  
  });
  initializeFormGroup() {
    this.form.setValue({
      username: '',
     
      email: '',
     
   
     
    });
  }


  /* Sign up */
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
     
        this.SetUserData(result.user);
      }).catch((error) => {
        this.toastr.warning(error.message)
      })
  }
 
  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.toastr.success("You Login SuccesFully")
          this.router.navigate(['dashboard']);
         
        });
       
      }).catch((error) => {
        this.toastr.warning(error.message)
      })
  }
/* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
 
  SetUserData(user) {
   
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
     
      merge: true
    
  }
 // Sign out
 SignOut() {
  return this.afAuth.auth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['HomeComponent']);
  })
}

}
