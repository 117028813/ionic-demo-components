import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloatActionButtonsPage } from './float-action-buttons';

@NgModule({
  declarations: [
    FloatActionButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(FloatActionButtonsPage),
  ],
})
export class FloatActionButtonsPageModule {}
