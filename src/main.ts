import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { AppConfigService } from './app/services/app-config.service';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(async (moduleRef) => {
    const appConfigService = moduleRef.injector.get(AppConfigService);
    await appConfigService.loadAppConfig();
  })
  .catch(err => console.error(err));