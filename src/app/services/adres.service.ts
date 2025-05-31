import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdressesService } from '../core/modules/openapi/api/api';
import { Adres } from '../core/modules/openapi/model/adres';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AdresBody, Configuration, PagedAdresses, PagedPersons } from '../core/modules/openapi';
import { DynamicconfigService } from './dynamicconfig.service';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class AdresService {

  constructor(
    private adressesService: AdressesService,
    private appConfigService: AppconfigService
  ) {
    console.log("AdresService constructor() api: " + JSON.stringify(this.adressesService));
    console.log("AdresService constructor() adressesService: " + JSON.stringify(adressesService));
  }

  // public deleteAdres(id: number, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deleteAdres(id: number): Observable<HttpResponse<any>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adressesService != undefined) {
      return this.adressesService.deleteAdres(id, this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public deleteAllAdreses(xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deleteAllAdreses(page?: number, size?: number): Observable<HttpResponse<any>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adressesService != undefined) {
      return this.adressesService.deleteAllAdreses(this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  //public getAdres(id: number, xApiKey: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Adres>>;
  getAdres(id: number): Observable<HttpResponse<Adres>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adressesService != undefined) {
      return this.adressesService.getAdres(id, this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public getAdresses(page: number, size: number, sort?: Array<string>, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PagedAdresses>>;
  getAdresses(page?: number, size?: number): Observable<HttpResponse<PagedAdresses>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adressesService != undefined) {
      return this.adressesService.getAdresses(page!, size!, this.appConfigService.getApiKey(), ["id"], 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public patchAdres(id: number, xAPIKEY?: string, adres?: Adres, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Adres>>;
  patchAdres(id: number, adres?: Adres): Observable<HttpResponse<Adres>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adressesService != undefined) {
      return this.adressesService.patchAdres(id, this.appConfigService.getApiKey(), adres, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }


  //  public postAdres(override: boolean, adresBody: AdresBody, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Adres>>;
  postAdres(override: boolean, adresBody?: AdresBody): Observable<HttpResponse<Adres>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adressesService != undefined) {
      return this.adressesService!.postAdres(override, this.appConfigService.getApiKey(), adresBody!, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public getAdresPerons(page: number, size: number, id: number, xAPIKEY: string, sort?: Array<string>, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PagedPersons>>;
  getAdresPerons(id: number, page?: number, size?: number, sort?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagedPersons>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adressesService != undefined) {
      return this.adressesService.getAdresPerons(page!, size!, id, this.appConfigService.getApiKey(), ["id"], 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

}