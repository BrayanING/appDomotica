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
  changeAction: string;
  sonoff: any;
  imagen: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceProvider: DeviceProvider) {
    this.devices = [];
    this.sonoff = {};
    this.getAll();
    this.imagen = "assets/imgs/lamp-off.png";
    this.changeAction = "OFF";
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

  actionPower(ip) {
    if(ip && ip !== "") {
      
    console.log(ip);
      if(this.changeAction == "OFF") {
        this.changeAction = "ON";
        this.imagen = "assets/imgs/lamp-on.png";
        this.deviceProvider.connectionDevice(`http://${ip}`, 'On').subscribe((data:any) => {
          console.log(data);
        })
      }else {
        this.changeAction = "OFF";
        this.imagen = "assets/imgs/lamp-off.png";
        this.deviceProvider.connectionDevice(`http://${ip}`, 'Off').subscribe((data:any) => {
          console.log(data);
        })
      }
    }
  }

}
