import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeNavbarComponent } from './HomePage/home-navbar/home-navbar.component';
import { HomeFooterComponent } from './HomePage/home-footer/home-footer.component';
import { HomeComponent } from './HomePage/home/home.component';
import { AngularMaterialModule } from './HomePage/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventRegistrationComponent } from './HomePage/event-registration/event-registration.component';
import { LoginComponent } from './HomePage/login/login.component';
import { environment } from 'environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthenticationService } from './shared/authentication.service';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { MatFileUploadModule } from 'angular-material-fileupload';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule,
    AngularMaterialModule,
    NgbModule,
    FlexLayoutModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireDatabaseModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    MatFileUploadModule,
    MatInputModule
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeNavbarComponent,
    HomeFooterComponent,
    HomeComponent,
    EventRegistrationComponent,LoginComponent,

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [LoginComponent,EventRegistrationComponent],
})
export class AppModule { }
