import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { CommonModule } from '@angular/common';
import { PaymentServicesComponent } from '../payment-services/payment-services.component';
import { TalkToUsComponent } from '../talk-to-us/talk-to-us.component';
// import { SliderComponent } from '../slider/slider.component';



@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterModule, 
    ServicesComponent, 
    CommonModule, 
    PaymentServicesComponent, 
    TalkToUsComponent,
    // SliderComponent
   ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  showServices = false;
  showPaymentServices = false;
}

