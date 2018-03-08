import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SegmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {

  pet = 'kittens'
  icons = 'bookmark'
  current = 'foo'
  activeTab = 'Foo'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
    console.log(this.current)
  }

  setCurrent(val) {
    this.current = val.title
  }

  onSelect(event) {
    this.activeTab = event
  }

}
