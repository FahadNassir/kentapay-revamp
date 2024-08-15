import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/route';
import { register as registerSwiperElements } from 'swiper/element-bundle';

const mergedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), 
    provideRouter(routeConfig)   
  ]
};

registerSwiperElements();
bootstrapApplication(AppComponent, mergedConfig)
  .catch((err) => console.error(err));
