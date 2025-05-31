import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { DynamicconfigService } from './dynamicconfig.service';
import { Adres, AdresBody, AdressesService, BASE_PATH, PagedAdresses } from '../core/modules/openapi';
import { Observable } from 'rxjs';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class OpenadresService {
  private api: AdressesService | undefined;

  constructor(
    private adresService: AdressesService,
    private appConfigService: AppconfigService,
  ) {
  }

  // public deleteAdres(id: number, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deleteAdres(id: number): Observable<HttpResponse<any>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adresService != undefined) {
      return this.adresService.deleteAdres(id, this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public deleteAllAdreses(xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deleteAllAdreses(page?: number, size?: number): Observable<HttpResponse<any>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adresService != undefined) {
      return this.adresService.deleteAllAdreses(this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  //public getAdres(id: number, xApiKey: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Adres>>;
  getAdres(id: number): Observable<HttpResponse<Adres>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adresService != undefined) {
      return this.adresService.getAdres(id, this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public getAdresses(page: number, size: number, sort?: Array<string>, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PagedAdresses>>;
  getAdresses(page?: number, size?: number): Observable<HttpResponse<PagedAdresses>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adresService != undefined) {
      return this.adresService.getAdresses(page!, size!, this.appConfigService.getApiKey(), ["id"], 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public patchAdres(id: number, xAPIKEY?: string, adresBody?: AdresBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Adres>>;
  patchAdres(id: number, adresBody?: AdresBody): Observable<HttpResponse<Adres>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    var adres: Adres = {
      street: adresBody?.street || '',
      housenumber: adresBody?.housenumber || '',
      zipcode: adresBody?.zipcode || '',
      city: adresBody?.city || '',
      persons: adresBody?.persons || [],
      id: id
    };

    if (this.adresService != undefined) {
      return this.adresService.patchAdres(id, this.appConfigService.getApiKey(), adres, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  //  public postAdres(override: boolean, adresBody: AdresBody, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Adres>>;
  postAdres(override: boolean, adresBody?: AdresBody): Observable<HttpResponse<Adres>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.adresService != undefined) {
      return this.adresService!.postAdres(override, this.appConfigService.getApiKey(), adresBody!, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }
}
