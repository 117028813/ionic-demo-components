import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@Component({
  template: `<h2>Popover content</h2>`
})
export class PopoverContentPage {
  constructor() {}
}

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private popoverCtrl: PopoverController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverContentPage)
    popover.present()
  }

}
