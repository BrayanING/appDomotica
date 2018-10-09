import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  opButtons: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setPropertyButtons();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.setPropertyButtons();
  }

  setPropertyButtons() {
    this.opButtons = {};
    this.opButtons = {
      isActiveUserPass: false,
      isActiveRecognitionFace: false,
      isActiveGif: false,
      isHideRecognitionPanel: true,
      isHideLoginPanel: true
    }
  }

  


}
