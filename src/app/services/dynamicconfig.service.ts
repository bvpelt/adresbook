import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Configuration } from '../core/modules/openapi';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DynamicconfigService {
  private apiUrl: string = environment.apiBaseUrl;

  DynamicconfigService() {
      console.log("DynamicconfigService() " + JSON.stringify(this.apiUrl));
  }

  private configSubject = new BehaviorSubject<Configuration>(
    new Configuration({ basePath: this.apiUrl })
  );
  config$ = this.configSubject.asObservable();

  updateConfiguration(username: string, password: string, token?: string) {
    const newConfig = token
      ? new Configuration({ basePath: this.apiUrl, accessToken: token })
      : new Configuration({ basePath: this.apiUrl, username, password });

    this.configSubject.next(newConfig);
  }
}
