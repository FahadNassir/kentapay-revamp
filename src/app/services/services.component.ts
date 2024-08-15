import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KycServicesComponent } from '../kyc-services/kyc-services.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule, KycServicesComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
