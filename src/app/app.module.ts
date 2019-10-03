import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainBodyComponent } from './Components/main-body/main-body.component';
import { FooterComponent } from './Components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BookingDetailComponent } from './Components/booking-detail/booking-detail.component';
import { HomeComponent } from './Components/home/home.component';
import { BookingSummaryComponent } from './Components/booking-summary/booking-summary.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './Components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    FooterComponent,
    NavbarComponent,
    BookingDetailComponent,
    HomeComponent,
    BookingSummaryComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
