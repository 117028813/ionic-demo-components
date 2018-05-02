import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsSubscribePage } from './events-subscribe';

@NgModule({
  declarations: [
    EventsSubscribePage,
  ],
  imports: [
    IonicPageModule.forChild(EventsSubscribePage),
  ],
})
export class EventsSubscribePageModule {}
