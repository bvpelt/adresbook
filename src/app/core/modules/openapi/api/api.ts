export * from './adresses.service';
import { AdressesService } from './adresses.service';
export * from './adresses.serviceInterface';
export * from './login.service';
import { LoginService } from './login.service';
export * from './login.serviceInterface';
export * from './persons.service';
import { PersonsService } from './persons.service';
export * from './persons.serviceInterface';
export * from './privileges.service';
import { PrivilegesService } from './privileges.service';
export * from './privileges.serviceInterface';
export * from './roles.service';
import { RolesService } from './roles.service';
export * from './roles.serviceInterface';
export * from './users.service';
import { UsersService } from './users.service';
export * from './users.serviceInterface';
export const APIS = [AdressesService, LoginService, PersonsService, PrivilegesService, RolesService, UsersService];
