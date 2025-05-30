import { NgModule, isDevMode, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppconfigService } from './services/appconfig.service';

import { environment } from '../environments/environment';


import { ApiModule, BASE_PATH, Configuration, ConfigurationParameters } from './core/modules/openapi';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdresesComponent } from './adreses/adreses.component';
import { AdresComponent } from './adres/adres.component';
import { AdresdetailComponent } from './adresdetail/adresdetail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DbgmessagesComponent } from './dbgmessages/dbgmessages.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './person/person.component';
import { PersondetailComponent } from './persondetail/persondetail.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { RolesComponent } from './roles/roles.component';
import { RoleComponent } from './role/role.component';
import { RoledetailComponent } from './roledetail/roledetail.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { PrivilegeComponent } from './privilege/privilege.component';
import { PrivilegedetailComponent } from './privilegedetail/privilegedetail.component';
import { PersonselectComponent } from './personselect/personselect.component';
import { DynamicconfigService } from './services/dynamicconfig.service';

// 1. Factory to initialize AppConfigService
function initializeApp(appConfigService: AppconfigService) {
  return () => appConfigService.loadConfig();
}

// 2. Factory to provide Configuration object dynamically
//    This is generally the preferred method as it's more complete for the API client.
export function apiConfigurationFactory(appConfigService: AppconfigService): Configuration {
  // The getApiBaseUrl() will return the correct URL as loadConfig() is guaranteed to have run
  console.log('apiConfigurationFactory called - config: ', 
    JSON.stringify(appConfigService.getApiConfig(), null, 2)  
  );
  return appConfigService.getApiConfig();
}

// 3. (Optional Alternative) Factory to provide BASE_PATH token directly
//    Use this if your generated client explicitly checks BASE_PATH or if you prefer.
export function apiBasePathFactory(appConfigService: AppconfigService): string {
  console.log('apiBasePathFactory called - basePath: ', appConfigService.getApiBaseUrl());
  // This will return the basePath directly, which is used by the API client
  return appConfigService.getApiBaseUrl();
}

@NgModule({
  declarations: [
    AppComponent,
    AdresesComponent,
    AdresComponent,
    AdresdetailComponent,
    LoginComponent,
    LogoutComponent,
    DbgmessagesComponent,
    PersonsComponent,
    PersonComponent,
    PersondetailComponent,
    UsersComponent,
    UserComponent,
    UserdetailComponent,
    RolesComponent,
    RoleComponent,
    RoledetailComponent,
    PrivilegesComponent,
    PrivilegeComponent,
    PrivilegedetailComponent,
    PersonselectComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    ApiModule,  // Corrected signature
    HttpClientModule,
    environment.enableServiceWorker ? ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
      // Add a unique identifier to the service worker configuration
    }) : []
  ],
  providers: [
    AppconfigService,
    DynamicconfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppconfigService],
      multi: true
    },
    {
      // Provide the OpenAPI generated Configuration class as a DI token
      // This allows generated API services to receive our dynamically configured basePath
      provide: Configuration,
      useFactory: apiConfigurationFactory, // Use our factory to create the Configuration
      deps: [AppconfigService]            // It depends on AppConfigService
    },
    // OR (less common if Configuration is used) provide BASE_PATH directly
//    {
//      provide: BASE_PATH, // Use the BASE_PATH token
//      useFactory: apiBasePathFactory,
//      deps: [AppconfigService]
//    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
