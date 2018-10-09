import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceProvider } from '../../providers/device/device';

/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {

  device:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceProvider: DeviceProvider) {
    this.device = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }

  create() {
    this.deviceProvider.create(this.device).subscribe((data:any) => {
        if(data) {
          console.log('creado');
          this.navCtrl.pop();
        }
    })
  }

}
