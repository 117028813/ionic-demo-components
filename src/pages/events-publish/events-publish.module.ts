import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPublishPage } from './events-publish';

@NgModule({
  declarations: [
    EventsPublishPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsPublishPage),
  ],
})
export class EventsPublishPageModule {}
