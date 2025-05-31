import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LogonService } from './services/logon.service';
import { AppconfigService } from './services/appconfig.service';
import { DynamicconfigService } from './services/dynamicconfig.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adresbook';
  private appConfig: any;

  isLoggedIn$: Observable<boolean>;

  constructor(private logonService: LogonService, private appConfigService: AppconfigService, private dynamicConfigService: DynamicconfigService) {
    this.isLoggedIn$ = this.logonService.isLoggedIn$;

    var apiUrl: string = `${this.appConfigService.getBasePath()}`;
    console.log("AppComponent() apiUrl: " + apiUrl);

    console.log("AppComponent() dynamicConfigService.apiUrl: " + this.dynamicConfigService.apiUrl);

  }

}
