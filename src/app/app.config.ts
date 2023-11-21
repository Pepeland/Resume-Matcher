import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { inject } from '@vercel/analytics'; 
inject();

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
