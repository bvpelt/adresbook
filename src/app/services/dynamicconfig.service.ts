import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Configuration } from '../core/modules/openapi';

@Injectable({
  providedIn: 'root'
})
export class DynamicconfigService {
  DynamicconfigService() {
      console.log("DynamicconfigService() " + JSON.stringify(window["env"]));
  }

  private configSubject = new BehaviorSubject<Configuration>(
    new Configuration({ basePath: window["env"]!["API_BASE_URL"] || 'http://localhost:8080/adres/api/v1' })
  );
  config$ = this.configSubject.asObservable();

  updateConfiguration(username: string, password: string, token?: string) {
    const newConfig = token
      ? new Configuration({ basePath: window["env"]!["API_BASE_URL"], accessToken: token })
      : new Configuration({ basePath: window["env"]!["API_BASE_URL"], username, password });

    this.configSubject.next(newConfig);
  }
}
