import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

//agregar esta linea
import { provideHttpClient } from "@angular/common/http";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // agregar el provideHttpClient
  providers: [provideRouter(routes), provideHttpClient()]
};
