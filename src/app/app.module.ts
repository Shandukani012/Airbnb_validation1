import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomComponent } from './user/room/room.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';

import { NavbarComponent } from './user/navbar/navbar.component';
import { FooterComponent } from './user/footer/footer.component';
import { BookingComponent } from './user/booking/booking.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RoombookinComponent } from './user/roombookin/roombookin.component';
import { BookingviewComponent } from './user/bookingview/bookingview.component';
import { BookingeditComponent } from './user/bookingedit/bookingedit.component';


RouterModule
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    RoomComponent,
    DashboardComponent,
    ProfileComponent,
 
    NavbarComponent,
    FooterComponent,
    BookingComponent,
    ContactComponent,
    RoombookinComponent,
    BookingviewComponent,
    BookingeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {path:'dashboard',component:DashboardComponent},{path:'homepage',component:HomepageComponent},{path:'bookingedit',component:BookingeditComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
