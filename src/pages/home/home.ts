import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {LocalNotifications} from "@ionic-native/local-notifications";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private localNotifications: LocalNotifications,
              private platform: Platform) {
  }

  ionViewDidEnter() {
    this.platform.ready().then(() =>
      this.localNotifications.schedule({
          id: 1,
          text: 'Single ILocalNotification',
          sound: null, //isAndroid? 'file://sound.mp3': 'file://beep.caf',
          //data: { secret: key }
      })
    );
  }

}
