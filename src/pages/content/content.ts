import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  @ViewChild(Content) content: Content

  list = []

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private elementRef: ElementRef,
  ) {
  }

  ionViewDidLoad() {
    for (let i = 0; i < 26; i++) {
      this.list.push({
        title: String.fromCharCode(i+65),
        results: []
      })
    }
    this.list.forEach(val => {
      for (let i = 0; i < 5; i++) {
        val.results.push(`${val.title}-${i}`)
      }
    })
    console.log(this.list)
  }

  scrollTo(title) {
    const offsetTop = this.elementRef.nativeElement.querySelector(`#letter${title}`).offsetTop
    this.content.scrollTo(0, offsetTop)
  }
}
