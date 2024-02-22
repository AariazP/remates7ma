import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// this is an added comment to test main branch lock

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
