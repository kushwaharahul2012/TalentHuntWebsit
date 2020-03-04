import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeNavbarComponent } from './HomePage/home-navbar/home-navbar.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: HomeNavbarComponent },

  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
