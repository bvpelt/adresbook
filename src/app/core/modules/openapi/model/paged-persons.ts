/**
 * Adres API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Person } from './person';


export interface PagedPersons { 
    content?: Array<Person>;
    pageNumber?: number;
    pageSize?: number;
    totalElements?: number;
    totalPages?: number;
}

