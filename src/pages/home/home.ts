import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceProvider } from '../../providers/device/device';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  objRequest:any;
  sum:any;
  voice:any;
  constructor(public navCtrl: NavController, private deviceProvider: DeviceProvider) {
    this.voice = "";
    this.initMethod();
  }

  ionViewWillEnter(){
    // this.initMethod();
  }
  ionViewDidLoad() {
    // this.initMethod();
  }

  initMethod() {

  }

}
