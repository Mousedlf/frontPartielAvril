import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpInterceptor} from "./auth/httpInterceptor";

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([HttpInterceptor]))
  ]
};
