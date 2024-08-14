import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, ServicesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
    showServices = false
}
