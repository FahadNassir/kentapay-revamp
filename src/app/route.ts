import { Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { PaymentServicesComponent } from "./payment-services/payment-services.component";
import { ServicesComponent } from "./services/services.component";
import { KycServicesComponent } from "./kyc-services/kyc-services.component";

const routeConfig: Routes = [
    {
        path:'',
        component: LandingComponent,
        title:'Landing Page'
    },
    {
        path:'paymentServices',
        component: PaymentServicesComponent,
        title:'Payment services'
    },
    {
        path:'services',
        component: ServicesComponent,
        title: 'services offered'
    },
    {
        path:'kyc-services',
        component: KycServicesComponent,
        title:"kyc services"
    }
];

export default routeConfig