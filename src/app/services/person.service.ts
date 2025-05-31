import { Inject, Injectable, Optional } from '@angular/core';
import { BASE_PATH, Configuration, LoginService, PagedPersons, Person, PersonBody, PersonsService } from '../core/modules/openapi';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { DynamicconfigService } from './dynamicconfig.service';
import { Observable } from 'rxjs';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  private api: PersonsService | undefined;

  constructor(
    private personsService: PersonsService,
    private appConfigService: AppconfigService,
  ) {
    console.log("PersonService constructor() api: " + JSON.stringify(this.personsService));
    console.log("PersonService constructor() personsService: " + JSON.stringify(personsService));
  }

  // public deleteAllPersons(xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deleteAllPersons(page?: number, size?: number): Observable<HttpResponse<any>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.personsService != undefined) {
      return this.personsService.deleteAllPersons(this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("PersonsService api not yet defined");
    }
  }

  // public deletePerson(id: number, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deletePerson(id: number): Observable<HttpResponse<any>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.personsService != undefined) {
      return this.personsService.deletePerson(id, this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("PersonsService api not yet defined");
    }
  }

  // public getPerson(id: number, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Person>>;
  getPerson(id: number): Observable<HttpResponse<Person>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.personsService != undefined) {
      return this.personsService.getPerson(id, this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("PersonsService api not yet defined");
    }
  }

  // public getPersons(page: number, size: number, sort?: Array<string>, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PagedPersons>>;
  getPersons(page?: number, size?: number): Observable<HttpResponse<PagedPersons>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.personsService != undefined) {
      return this.personsService.getPersons(page!, size!, this.appConfigService.getApiKey(), ["id"], 'response', false, options);
    } else {
      throw new Error("PersonsService api not yet defined");
    }
  }

  // public patchPerson(id: number, xAPIKEY?: string, personBody?: PersonBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Person>>;
  patchPerson(id: number, personBody?: PersonBody): Observable<HttpResponse<Person>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.personsService != undefined) {
      return this.personsService.patchPerson(id, this.appConfigService.getApiKey(), personBody, 'response', false, options);
    } else {
      throw new Error("PersonsService api not yet defined");
    }
  }

  // public postPerson(override: boolean, xAPIKEY?: string, personBody?: PersonBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Person>>;
  postPerson(override: boolean, personBody?: PersonBody): Observable<HttpResponse<Person>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.personsService != undefined) {
      return this.personsService!.postPerson(override, this.appConfigService.getApiKey(), personBody!, 'response', false, options);
    } else {
      throw new Error("PersonsService api not yet defined");
    }
  }

}
