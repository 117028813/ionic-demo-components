import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the EventsPublishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events-publish',
  templateUrl: 'events-publish.html',
})
export class EventsPublishPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
  }

  ionViewDidLoad() {
    
  }

  publishEvents() {
    console.log('publish events')
    this.events.publish('ev:events', {data: 111})
  }

}
