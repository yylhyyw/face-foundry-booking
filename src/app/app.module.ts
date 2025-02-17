import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardDirectivesModule } from 'angular-cc-library'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogInSignUpComponent } from './log-in-sign-up/log-in-sign-up.component';
import { LocationComponent } from './location/location.component';
import { ServicesComponent } from './services/services.component';
import { StaffComponent } from './staff/staff.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { ReviewComponent } from './review/review.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { TimeItemComponent } from './time/time-item/time-item.component';
import { LocationItemComponent } from './location/location-item/location-item.component';
import { ServiceItemComponent } from './services/service-item/service-item.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServiceAddOnComponent } from './services/service-add-on/service-add-on.component'

import { MustMatchDirective } from './validators/must-match.directive';
import { RouteGuard } from './route.guard';


//canActivate: [RouteGuard]

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'start', component: LogInSignUpComponent},
  {path: 'location', component: LocationComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'date', component: DateComponent},
  {path: 'time', component: TimeComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'thank-you', component: ThankYouComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LogInSignUpComponent,
    LocationComponent,
    ServicesComponent,
    StaffComponent,
    DateComponent,
    TimeComponent,
    ReviewComponent,
    PaymentComponent,
    ThankYouComponent,
    TimeItemComponent,
    LocationItemComponent,
    ServiceItemComponent,
    WelcomeComponent,
    MustMatchDirective,
    ServiceAddOnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CreditCardDirectivesModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
