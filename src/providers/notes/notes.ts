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

}
