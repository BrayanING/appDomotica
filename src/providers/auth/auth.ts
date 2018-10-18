import { ENV } from "../../config/config";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  getAll() {
    return this.http.get(`${ENV.host}/user`);
  }

  getOne(input) {
    return this.http.get(`${ENV.host}/user`, input);
  }

  create(input){
    return this.http.post(`${ENV.host}/user`, input);
  }

  update(input) {
    return this.http.put(`${ENV.host}/user/${input.id}`, input);
  }
  delete(input) {
    return this.http.delete(`${ENV.host}/user/${input.id}`, input);
  }

  login(input) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${ENV.host}/login`, input,  {headers: headers});
  }

}
