import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  loadAppConfig(): Promise<any> {
    return firstValueFrom(this.http.get<any>('/assets/config/app-config.json'))
      .then(config => {
        this.appConfig = config;
        environment.apiBaseUrl = this.appConfig.apiBaseUrl; // Update environment
      })
      .catch(() => {
        // Fallback to default or handle error
        console.error('Failed to load app config, using default API URL.');
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
