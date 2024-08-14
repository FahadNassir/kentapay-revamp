import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/route';

// Merge the providers from appConfig and the additional providers
const mergedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // Take providers from appConfig if they exist
    provideRouter(routeConfig)      // Add your specific providers
  ]
};

bootstrapApplication(AppComponent, mergedConfig)
  .catch((err) => console.error(err));
