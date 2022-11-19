import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './user/booking/booking.component';
import { BookingeditComponent } from './user/bookingedit/bookingedit.component';
import { BookingviewComponent } from './user/bookingview/bookingview.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RoomComponent } from './user/room/room.component';
import { RoombookinComponent } from './user/roombookin/roombookin.component';

const routes: Routes = [{path: 'register', component:RegisterComponent},
{ path: 'login', component: LoginComponent },
{path: 'homepage', component: HomepageComponent},
{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'booking', component: BookingComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'room', component: RoomComponent },
{path: 'profile', component: ProfileComponent },
{path:'roombookin',component:RoombookinComponent},
{path:'bookingview',component:BookingviewComponent},
{path:'bookingedit',component:BookingeditComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
