import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs'; // Import firstValueFrom
import { Configuration } from '../core/modules/openapi'; // Adjust the import path as necessary
import { AppConfig } from './appconfig'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class AppconfigService {
  private apiKey: string = 'f0583805-03f6-4c7f-8e40-f83f55b7c077'; // for now fixed value
  private username: string = '';
  private password: string = '';
  private jwt: string = '';
  private basePath: string = ''; // Default backend URL gets set in loadConfig()

  private config: Configuration | undefined;

  constructor(private http: HttpClient) { }

  setApiKey(key: string) {
    this.apiKey = key;
  }

  getApiKey(): string {
    return this.apiKey;
  }


  setBasicAuth(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  setJwt(token: string) {
    this.jwt = token;
  }

  setBasePath(url: string) {
    this.basePath = url;
  }

  getApiBaseUrl(): string {
    return this.basePath
  }

  getApiConfig(): Configuration {
    this.config = new Configuration({
      apiKeys: { 'api_key': this.apiKey },
      username: this.username,
      password: this.password,
      accessToken: this.jwt,
      basePath: this.getApiBaseUrl()
    });
    return this.config
  }

  getJwtConfig(): Configuration {
    this.config = new Configuration({
      apiKeys: { 'api_key': this.apiKey },
      accessToken: () => this.jwt,
      username: this.username,
      password: this.password,
      basePath: this.getApiBaseUrl()
    });
    return this.config;
  }

  getBasicAuthConfig(): Configuration {
    this.config = new Configuration({
      apiKeys: { 'api_key': this.apiKey },
      accessToken: () => this.jwt,
      username: this.username,
      password: this.password,
      basePath: this.getApiBaseUrl()
    });
    return this.config;
  }

  loadConfig(): Promise<any> {
    return firstValueFrom(this.http.get<AppConfig>('/public/assets/config/app-config.json'))
      .then(data => {
        this.basePath = data.apiBaseUrl;
//        console.log('AppConfigService: Configuration loaded successfully:', this.basePath);
      })
      .catch(error => {
        console.error('AppConfigService: Error loading configuration:', error);
        // Fallback or throw an error if configuration is critical
        throw error; // Re-throw to prevent app startup if config is missing
      });
  }

}
