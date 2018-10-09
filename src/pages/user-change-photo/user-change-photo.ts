import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-user-change-photo',
  templateUrl: 'user-change-photo.html',
})
export class UserChangePhotoPage {

  user: any;
  image: any;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    targetHeight: 1000,
    targetWidth: 1000,
    sourceType: 1,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    cameraDirection: 0,
    correctOrientation: true
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private authProvider: AuthProvider) {
    this.image = "";
    this.user = this.navParams.get('user');
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserChangePhotoPage');
  }

  openCamera() {

    this.camera.getPicture(this.options).then(async (imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
      this.image = base64Image;
    }, (err) => {
      // Handle error
    });
  }

  update() {
    this.user["image"]  = this.image || "";
    console.log(this.user);    
    this.authProvider.update(this.user).subscribe((data) => {
      if(data) {
        console.log("actualizado", data);
      }
      this.navCtrl.pop();
    });
  }


}
