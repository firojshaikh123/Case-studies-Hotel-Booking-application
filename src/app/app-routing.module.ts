import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailComponent } from './Components/booking-detail/booking-detail.component';
import{BookingSummaryComponent} from './Components/booking-summary/booking-summary.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainBodyComponent } from './Components/main-body/main-body.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { from } from 'rxjs';



const routes: Routes = [
 
  { path:'',redirectTo:'home',pathMatch:'full'}  ,
  {path:'home', component:HomeComponent},
  {path:'BookingDetails', component:BookingDetailComponent},
  {path:'BookingDetails/:id', component:BookingDetailComponent},
  {path:'BookingSummary', component:BookingSummaryComponent},
  {path:'BookingSummary/:id', component:BookingSummaryComponent},
  {path:'Checkout', component:CheckoutComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
