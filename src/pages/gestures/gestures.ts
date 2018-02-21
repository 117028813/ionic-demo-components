import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GesturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class GesturesPage {

  tap = 0
  press = 0
  pan = 0
  swipe = 0

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturesPage');
  }

  onTap(event) {
    this.tap += 1
  }

  onPress() {
    this.press += 1
  }

  onPan() {
    this.pan += 1
  }

  onSwipe() {
    this.swipe += 1
  }

}
