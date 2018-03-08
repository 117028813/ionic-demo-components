import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegmentPage } from './segment';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SegmentPage,
  ],
  imports: [
    IonicPageModule.forChild(SegmentPage),
    ComponentsModule
  ],
})
export class SegmentPageModule {}
