/**
 * Angular-Imports
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/**
 * Application-Imports
 */
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/**
 * Bootstrapping
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


