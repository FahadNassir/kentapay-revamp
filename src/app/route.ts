import { Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { KycServicesComponent } from "./kyc-services/kyc-services.component";
import { TalkToUsComponent } from "./talk-to-us/talk-to-us.component";

const routeConfig: Routes = [
    {
        path:'',
        component: LandingComponent,
        title:'Landing Page'
    },
    {
        path:'kyc-services',
        component: KycServicesComponent,
        title:"kyc services"
    },
    {
        path:'talk-to-us',
        component: TalkToUsComponent,
        title:"talk to us"
    }
];

export default routeConfig