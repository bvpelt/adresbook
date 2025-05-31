import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UserBody, BASE_PATH, UsersService, User, PagedUsers } from '../core/modules/openapi';
import { DynamicconfigService } from './dynamicconfig.service';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: UsersService | undefined;

  constructor(
    private usersService: UsersService,
    private appConfigService: AppconfigService) {
  }

  // public deleteUser(id: number, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deleteUser(id: number): Observable<HttpResponse<any>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.usersService != undefined) {
      return this.usersService.deleteUser(id, this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public deleteAllUsers(xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deleteAllUsers(page?: number, size?: number): Observable<HttpResponse<any>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.usersService != undefined) {
      return this.usersService.deleteAllUsers(this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public getUser(id: number, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<User>>;
  getUser(id: number): Observable<HttpResponse<User>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.usersService != undefined) {
      return this.usersService.getUser(id, this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public getUsers(page: number, size: number, sort?: Array<string>, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PagedUsers>>;
  getUsers(page?: number, size?: number): Observable<HttpResponse<PagedUsers>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.usersService != undefined) {
      return this.usersService.getUsers(page!, size!, this.appConfigService.getApiKey(), ["id"], 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public patchUser(id: number, xAPIKEY?: string, userBody?: UserBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<User>>;
  patchUser(id: number, adresBody?: UserBody): Observable<HttpResponse<User>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.usersService != undefined) {
      return this.usersService.patchUser(id, this.appConfigService.getApiKey(), adresBody, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }


  // public postUser(xAPIKEY?: string, userBody?: UserBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<User>>;
  postUser(userBody?: UserBody): Observable<HttpResponse<User>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.usersService != undefined) {
      return this.usersService!.postUser(this.appConfigService.getApiKey(), userBody!, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }
}
