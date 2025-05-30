import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BASE_PATH, Configuration } from '../core/modules/openapi';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicconfigService {
  public apiUrl: string = "";
  public configuration: Configuration = new Configuration();

  constructor(private appConfigService: AppconfigService) {
    this.apiUrl = `${appConfigService.getApiBaseUrl()}`;
    console.log("DynamicconfigService() " + JSON.stringify(this.apiUrl));

    appConfigService.setBasePath(this.apiUrl);
    this.configuration = appConfigService.getApiConfig(); // Initialize with the API config from AppconfigService
    console.log("Contents of configSubject: " + JSON.stringify(this.configuration));
  }

  private configSubject = new BehaviorSubject<Configuration>(
  
    new Configuration({ basePath: this.apiUrl, credentials: this.appConfigService.getBasicAuthConfig().credentials })
  );

  /*
    constructor(private appConfigService: AppconfigService) {
    this.apiUrl = `${appConfigService.getApiBaseUrl()}`;
    console.log("DynamicconfigService() " + JSON.stringify(this.apiUrl));

    console.log("Contents of configSubject: " + JSON.stringify(this.configSubject.value));
  }
*/
  config$ = this.configSubject.asObservable();

  updateConfiguration(username: string, password: string, token?: string) {
    this.appConfigService.setBasicAuth(username, password);
    this.appConfigService.setJwt(token || '');
    /*
        this.configuration = token
          ? new Configuration({ basePath: this.apiUrl, accessToken: token })
          : new Configuration({ basePath: this.apiUrl, username, password });
    */
    this.configSubject.next(this.configuration);
  }

}
