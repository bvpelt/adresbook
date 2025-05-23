import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Configuration } from '../core/modules/openapi';
import { DbgmessageService } from './dbgmessage.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicconfigService {

  private _basePathToUse: string;

  constructor(private dbgmessageService: DbgmessageService, private configuration: Configuration) {
    // Check if the BASE_PATH is set at runtime from window['env']
    const runtimeBasePath = window['env']?.API_BASE_URL || '';
    console.log("DynamicconfigService - window['env']: " + JSON.stringify(window['env']));
    console.log("DynamicconfigService - runtimeBasePath: " + runtimeBasePath);

    if (runtimeBasePath) {
      this._basePathToUse = runtimeBasePath;
    } else if (this.configuration.basePath) {
      this._basePathToUse = this.configuration.basePath;
    } else {
      // Default to local development URL if nothing is provided
      this._basePathToUse = 'http://localhost:8080/adres/api/v1';
    }

    this.dbgmessageService.debug('DynamicconfigService initialized with basePath: ' + this.getBasePath());
  }

  private configSubject = new BehaviorSubject<Configuration | null>(null);
  config$ = this.configSubject.asObservable();

  updateConfiguration(username: string, password: string, token: string | undefined) {
    this.dbgmessageService.debug('DynamicconfigService username: ' + username + ' password: ' + password + ' token: ' + token);
    const newConfig = (token != undefined) ?
      new Configuration({
        basePath: this.getBasePath(),
        accessToken: token
      }) :
      new Configuration({
        basePath: this.getBasePath(),
        username,
        password
      });
    this.dbgmessageService.debug('DynamicconfigService generated config: ' + JSON.stringify(newConfig));
    this.configSubject.next(newConfig);
  }

  getBasePath(): string {
    return this._basePathToUse;
  }
}
