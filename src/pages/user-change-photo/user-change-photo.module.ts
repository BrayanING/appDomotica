import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserChangePhotoPage } from './user-change-photo';

@NgModule({
  declarations: [
    UserChangePhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(UserChangePhotoPage),
  ],
})
export class UserChangePhotoPageModule {}
