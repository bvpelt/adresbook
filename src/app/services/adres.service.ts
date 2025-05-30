import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { AdressesService } from '../core/modules/openapi/api/api';
import { Adres } from '../core/modules/openapi/model/adres';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AdresBody, BASE_PATH, Configuration, PagedAdresses, PagedPersons } from '../core/modules/openapi';
import { DynamicconfigService } from './dynamicconfig.service';
import { environment } from '../../environments/environment';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class AdresService {

  private api: AdressesService | undefined;

  constructor(
    private adressesService: AdressesService,
    private appConfigService: AppconfigService,
    private http: HttpClient,
    //    @Optional() @Inject(BASE_PATH) basePath: string | string[],
    //    private dynamicConfigService: DynamicconfigService
  ) {
    //   var basePathToUse: string = dynamicConfigService.apiUrl;
    var basePathToUse: string = appConfigService.getApiBaseUrl();

    console.log("AdresService constructor() basePathToUse: " + basePathToUse);

    var config: Configuration = new Configuration({
      basePath: basePathToUse
    });
    console.log("AdresService constructor() config: " + JSON.stringify(config));

    //this.api = new AdressesService(http, basePathToUse, config);
    //this.api = new AdressesService(http, basePathToUse , config);
    //this.api = new AdressesService(http, appConfigService.getApiBaseUrl(), appConfigService.getApiConfig());
    this.api = adressesService; // Use the injected AdressesService instance
    console.log("AdresService constructor() api: " + JSON.stringify(this.api));
    console.log("AdresService constructor() adressesService: " + JSON.stringify(adressesService));
    //    this.dynamicConfigService.config$.subscribe((config: any) => {
    //      if (config) {
    //        this.api = new AdressesService(http, basePathToUse, config);
    //      }
    //    });
  }

  // public deleteAdres(id: number, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deleteAdres(id: number, xApiKey: string): Observable<HttpResponse<any>> {
    const headers: HttpHeaders = new HttpHeaders({
      'x-api-key': xApiKey
    });

    const options: any = {
      headers: headers
    }

    if (this.api != undefined) {
      return this.api.deleteAdres(id, xApiKey, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public deleteAllAdreses(xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deleteAllAdreses(xApiKey: string, page?: number, size?: number): Observable<HttpResponse<any>> {
    const headers: HttpHeaders = new HttpHeaders({
      'x-api-key': xApiKey
    });

    const options: any = {
      headers: headers
    }

    if (this.api != undefined) {
      return this.api.deleteAllAdreses(xApiKey, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  //public getAdres(id: number, xApiKey: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Adres>>;
  getAdres(id: number, xApiKey: string): Observable<HttpResponse<Adres>> {
    const headers: HttpHeaders = new HttpHeaders({
      'x-api-key': xApiKey
    });

    const options: any = {
      headers: headers,
      httpHeaderAccept: 'application/json'
    }

    if (this.api != undefined) {
      return this.api.getAdres(id, xApiKey, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public getAdresses(page: number, size: number, sort?: Array<string>, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PagedAdresses>>;
  getAdresses(page?: number, size?: number): Observable<HttpResponse<PagedAdresses>> {

    const options: any = {
      httpHeaderAccept: 'application/json'
    }

    if (this.api != undefined) {
      return this.api.getAdresses(page!, size!, this.appConfigService.getApiKey(), ["id"], 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public patchAdres(id: number, xAPIKEY?: string, adres?: Adres, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Adres>>;
  patchAdres(id: number, xApiKey: string, adres?: Adres): Observable<HttpResponse<Adres>> {
    const headers: HttpHeaders = new HttpHeaders({
      'x-api-key': xApiKey
    });

    const options: any = {
      headers: headers,
      httpHeaderAccept: 'application/json'
    }

    if (this.api != undefined) {
      return this.api.patchAdres(id, xApiKey, adres, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }


  //  public postAdres(override: boolean, adresBody: AdresBody, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Adres>>;
  postAdres(xApiKey: string, override: boolean, adresBody?: AdresBody): Observable<HttpResponse<Adres>> {
    const headers: HttpHeaders = new HttpHeaders({
      'x-api-key': xApiKey
    });
    const options: any = {
      headers: headers,
      httpHeaderAccept: 'application/json'
    }

    if (this.api != undefined) {
      return this.api!.postAdres(override, xApiKey, adresBody!, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public getAdresPerons(page: number, size: number, id: number, xAPIKEY: string, sort?: Array<string>, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PagedPersons>>;
  getAdresPerons(xApiKey: string, id: number, page?: number, size?: number, sort?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagedPersons>> {
    const headers: HttpHeaders = new HttpHeaders({
      'x-api-key': xApiKey
    });

    const options: any = {
      headers: headers,
      httpHeaderAccept: 'application/json'
    }

    if (this.api != undefined) {
      return this.api.getAdresPerons(page!, size!, id, xApiKey, ["id"], 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }


}