import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
import { Base64 } from '@ionic-native/base64';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user:any;
  arrImage:any;
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera:Camera, private authProvider: AuthProvider, private base64: Base64) {
    this.user = {};
    this.arrImage = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  openCamera() {

  this.camera.getPicture(this.options).then(async(imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image ='data:image/jpeg;base64,' + imageData;
    console.log(base64Image);    
    this.arrImage.push(base64Image);    
   }, (err) => {
    // Handle error
   });
  }

  create() {
    
    this.user["image"]  = this.arrImage[0] || "";
    console.log(this.user);    
    this.authProvider.create(this.user).subscribe((data) => {
      if(data) {
        console.log("creado", data);
      }
      this.navCtrl.pop();
    });
  }

  convertBlobToBase64(blob) {
    return new Promise(resolve => {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function() {
        let base64data = reader.result;
        resolve(base64data);
      };
    });
  }

  deleteFile(i: number) {
    this.arrImage.splice(i, 1);
  }

}
