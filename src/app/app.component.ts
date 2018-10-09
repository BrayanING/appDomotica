import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { DevicesPage } from '../pages/devices/devices';
import { UsersPage } from '../pages/users/users';
import { LoginPage } from '../pages/login/login';
import { Storage } from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{icon: string, title: string, component: any}>;

  user:any;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home' , title: 'Inicio', component: HomePage },
      { icon: 'people' , title: 'Usuarios', component: UsersPage },
      { icon: 'wifi', title: 'Dispositivos', component: DevicesPage}
    ];
    this.user = [];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.testAuth();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  async testAuth() {
    await this.storage.get("session").then(session => {
      let data = session;
      console.log("user -->", data);
      
      if (!data) {
        this.nav.setRoot(LoginPage);
      } else {
        this.user = data;
      }
    });
  }
}
