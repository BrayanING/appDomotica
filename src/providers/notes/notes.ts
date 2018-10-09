import { ENV } from "../../config/config";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/*
  Generated class for the NotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NotesProvider Provider');
  }

  getAll() {
    return this.http.get(`${ENV.host}/note`);
  }

  getOne(input) {
    return this.http.get(`${ENV.host}/steps`, input);
  }

  create(input){
    return this.http.post(`${ENV.host}/note`, input);
  }

  update(input) {
    return this.http.put(`${ENV.host}/note/${input.id}`, input);
  }
  delete(input) {
    return this.http.delete(`${ENV.host}/note/${input.id}`, input);
  }

}
