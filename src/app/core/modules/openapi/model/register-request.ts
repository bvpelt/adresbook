/**
 * Adres API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface RegisterRequest { 
    username: string;
    /**
     * base64 encode password
     */
    password: string;
    email: string;
    phone?: string;
}

