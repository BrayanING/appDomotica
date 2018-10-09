import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from '../user/user';
import { AuthProvider } from '../../providers/auth/auth';
import { UserChangePhotoPage } from '../user-change-photo/user-change-photo';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
    this.users = [];
    this.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  ionViewWillEnter(){
    this.getAll();
  }

  deleteUser(input) {
    this.authProvider.delete(input).subscribe((data)=> {
      if(data) {
        console.log("delete");        
        this.getAll();
      }
    })
  }

  goToUserPage() {
    this.navCtrl.push(UserPage);
  }

  getAll() {
    this.authProvider.getAll().subscribe((data:any) => {
      this.users =  data["users"];
      console.log(this.users);
    });
  }

  changePhoto(user) {
    this.navCtrl.push(UserChangePhotoPage, {user: user});
  }
}
