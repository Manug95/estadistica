import { ApplicationConfig, provideBrowserGlobalErrorListeners, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import localeEs from '@angular/common/locales/es'; //Importo el idioma español

import { routes } from './app.routes';

registerLocaleData(localeEs);// Registro los datos de la región

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'es' } // Establezco 'es' como idioma por defecto
  ]
};
