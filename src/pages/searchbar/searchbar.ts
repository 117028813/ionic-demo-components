import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html',
})
export class SearchbarPage {

  items

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initializeItems()
  }

  initializeItems() {
    this.items = ['HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Angular']
  }

  getItems(event) {
    this.initializeItems()
    let val = event.target.value
    if (val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }

}
