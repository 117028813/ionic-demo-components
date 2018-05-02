import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the EventsSubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events-subscribe',
  templateUrl: 'events-subscribe.html',
})
export class EventsSubscribePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
  }

  subscribeEvents() {
    console.log('click subscribe')
    this.events.subscribe('ev:events', data => {
      console.log('subscribe success')
      console.log(data)
    })
  }

  unsubscribeEvents() {
    console.log('click unsubscribe events')
    this.events.unsubscribe('ev:events')
  }

  toNextPage() {
    this.navCtrl.push('EventsPublishPage')
  }

}
