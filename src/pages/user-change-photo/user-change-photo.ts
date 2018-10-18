import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user-change-photo',
  templateUrl: 'user-change-photo.html',
})
export class UserChangePhotoPage {

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserChangePhotoPage');
  }
}
