import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RoleBody, BASE_PATH, RolesService, Role, PagedRoles, PrivilegesService, Privilege, PagedPrivileges, PrivilegeBody } from '../core/modules/openapi';
import { DynamicconfigService } from './dynamicconfig.service';
import { AppconfigService } from './appconfig.service';


@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {
  private api: PrivilegesService | undefined;

  constructor(
    private privilegesService: PrivilegesService,
    private appConfigService: AppconfigService
  ) {
  }

  // public deleteRole(id: number, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deletePrivilege(id: number): Observable<HttpResponse<any>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.privilegesService != undefined) {
      return this.privilegesService.deletePrivilege(id, this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public deleteAllRoles(xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
  deleteAllPrivileges(page?: number, size?: number): Observable<HttpResponse<any>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.privilegesService != undefined) {
      return this.privilegesService.deleteAllPrivileges(this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public getRole(id: number, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Role>>;
  getPrivilege(id: number): Observable<HttpResponse<Privilege>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.privilegesService != undefined) {
      return this.privilegesService.getPrivilege(id, this.appConfigService.getApiKey(), 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public getRoles(page: number, size: number, sort?: Array<string>, xAPIKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PagedRoles>>;
  getPrivileges(page?: number, size?: number): Observable<HttpResponse<PagedPrivileges>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.privilegesService != undefined) {
      return this.privilegesService.getPrivileges(page!, size!, this.appConfigService.getApiKey(), ["id"], 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

  // public patchRole(id: number, xAPIKEY?: string, RoleBody?: RoleBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Role>>;
  patchPrivilege(id: number, privilegeBody?: PrivilegeBody): Observable<HttpResponse<Privilege>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.privilegesService != undefined) {
      return this.privilegesService.patchPrivilege(id, this.appConfigService.getApiKey(), privilegeBody, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }


  // public postRole(xAPIKEY?: string, RoleBody?: RoleBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Role>>;
  postPrivilege(privilegeBody?: PrivilegeBody): Observable<HttpResponse<Privilege>> {

    const options: any = {
      headers: new HttpHeaders({ 'Accept': 'application/json, application/problem+json' }) // It's good practice to also include problem+json if your backend returns it on errors
    }

    if (this.privilegesService != undefined) {
      return this.privilegesService!.postPrivileges(this.appConfigService.getApiKey(), privilegeBody!, 'response', false, options);
    } else {
      throw new Error("OpenadresService api not yet defined");
    }
  }

}
