import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }

  showBasicAlert() {
    let alert = this.alertCtrl.create({
      title: 'Basic Alert',
      subTitle: 'Basic Alert SubTitle',
      buttons: ['OK']
    })
    alert.present()
  }

  showPromptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Prompt',
      message: 'This is prompt alert',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler(data) {
            console.log('Cancel clicked')
            console.log(data)
          }
        },
        {
          text: 'Save',
          handler(data) {
            console.log('Saved clicked')
            console.log(data)
          }
        }
      ]
    })
    prompt.present()
  }

  showConfirmAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Cinfirm alert',
      message: 'this is confirm alert',
      buttons: [
        {
          text: 'Disagree',
          handler() {
            console.log('Disagree clicked')
          }
        },
        {
          text: 'Agree',
          handler() {
            console.log('Agree clicked')
          }
        }
      ]
    })
    confirm.present()
  }

  showRadioAlert() {
    let alert = this.alertCtrl.create()
    alert.setTitle('Radio alert')
    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    })
    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    })
    alert.addButton('Cancel')
    alert.addButton({
      text: 'OK',
      handler(data) {
        console.log(data)
      }
    })
    alert.present()
  }

  showCheckboxAlert() {
    let alert = this.alertCtrl.create({
      title: 'Checkbox alert',
      inputs: [
        {
          type: 'checkbox',
          label: 'Vue',
          value: 'vue',
          checked: true
        },
        {
          type: 'checkbox',
          label: 'React',
          value: 'react'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          handler(data) {
            console.log(data)
          }
        }
      ]
    })
    alert.present()
  }

}
