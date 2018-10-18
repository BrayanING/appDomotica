import { ENV } from "../../config/config";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the DeviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DeviceProvider Provider');
  }

  getAll() {
    return this.http.get(`${ENV.host}/device`);
  }

  getOne(input) {
    return this.http.get(`${ENV.host}/device`, input);
  }

  create(input){
    return this.http.post(`${ENV.host}/device`, input);
  }

  update(input) {
    return this.http.put(`${ENV.host}/device/${input.id}`, input);
  }
  delete(input) {
    return this.http.delete(`${ENV.host}/device/${input.id}`, input);
  }

  connectionDevice(url, action) {
    return this.http.get(`${url}/cm?cmnd=Power ${action}`);
  }


}
