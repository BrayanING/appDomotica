import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserChangePhotoPage } from '../pages/user-change-photo/user-change-photo';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NotesProvider } from '../providers/notes/notes';
import { IonicStorageModule } from '@ionic/storage';
import { AuthProvider } from '../providers/auth/auth';
import { DeviceProvider } from '../providers/device/device';
import { DevicesPage } from '../pages/devices/devices';
import { LoginPage } from '../pages/login/login';
import { UsersPage } from '../pages/users/users';
import { UserPage } from '../pages/user/user';
import { DevicePage } from '../pages/device/device';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DevicesPage,
    LoginPage,
    UsersPage,
    UserPage,
    DevicePage,
    UserChangePhotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DevicesPage,
    LoginPage,
    UsersPage,
    UserPage,
    DevicePage,
    UserChangePhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesProvider,
    AuthProvider,
    DeviceProvider,
    Camera,
    Base64
  ]
})
export class AppModule {}
