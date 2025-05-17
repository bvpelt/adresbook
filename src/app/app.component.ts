import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LogonService } from './services/logon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adresbook';
  private appConfig: any;

  isLoggedIn$: Observable<boolean>;

  constructor(private logonService: LogonService) {
    this.isLoggedIn$ = this.logonService.isLoggedIn$;
  }


}
