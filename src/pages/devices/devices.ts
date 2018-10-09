import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DevicePage } from '../device/device';
import { DeviceProvider } from '../../providers/device/device';

/**
 * Generated class for the DevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {

  devices: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceProvider: DeviceProvider) {
    this.devices = [];
    this.getAll();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesPage');

  }
  ionViewWillEnter(){
    this.getAll();
  }

  getAll() {
    this.deviceProvider.getAll().subscribe((data: any) => {
      this.devices = data["devices"];
      console.log(this.devices);
    });

  }

  deleteDevice(input) {
    console.log(input);    
    this.deviceProvider.delete(input).subscribe((data:any) => {
      if(data) {
        console.log("delete");
        this.getAll();
      }
    })
  }

  goToDevices() {
    this.navCtrl.push(DevicePage);
  }

}
