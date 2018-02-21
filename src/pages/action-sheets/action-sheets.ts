import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the ActionSheetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-sheets',
  templateUrl: 'action-sheets.html',
})
export class ActionSheetsPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private actionSheetCtrl: ActionSheetController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetsPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'ActionSheetTitle',
      buttons: [
        {
          text: 'Button1',
          handler() {
            console.log('Button1 clicked')
          }
        },
        {
          text: 'Button2',
          handler() {
            console.log('Button2 clicked')
          }
        }
      ]
    })
    actionSheet.present()
  }

}
