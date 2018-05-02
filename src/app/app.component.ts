import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav
  rootPage:any = 'ActionSheetsPage';

  pages = [
    {
      title: 'Action Sheets',
      component: 'ActionSheetsPage'
    },
    {
      title: 'Alerts',
      component: 'AlertsPage'
    },
    {
      title: 'Badges',
      component: 'BadgesPage'
    },
    {
      title: 'Buttons',
      component: 'ButtonsPage'
    },
    {
      title: 'Cards',
      component: 'CardsPage'
    },
    {
      title: 'Checkbox',
      component: 'CheckboxPage'
    },
    {
      title: 'Content',
      component: 'ContentPage'
    },
    {
      title: 'DateTime',
      component: 'DateTimePage'
    },
    {
      title: 'EventsPublish',
      component: 'EventsPublishPage'
    },
    {
      title: 'EventsSubscribe',
      component: 'EventsSubscribePage'
    },
    {
      title: 'Float Action Buttons',
      component: 'FloatActionButtonsPage'
    },
    {
      title: 'Gestures',
      component: 'GesturesPage'
    },
    {
      title: 'Grid',
      component: 'GridPage'
    },
    {
      title: 'Icons',
      component: 'IconsPage'
    },
    {
      title: 'Inputs',
      component: 'InputsPage'
    },
    {
      title: 'Lists',
      component: 'ListsPage'
    },
    {
      title: 'Loading',
      component: 'LoadingPage'
    },
    {
      title: 'Modals',
      component: 'ModalsPage'
    },
    {
      title: 'Navigation',
      component: 'NavigationPage'
    },
    {
      title: 'Popover',
      component: 'PopoverPage'
    },
    {
      title: 'Radio',
      component: 'RadioPage'
    },
    {
      title: 'Range',
      component: 'RangePage'
    },
    {
      title: 'Searchbar',
      component: 'SearchbarPage'
    },
    {
      title: 'Segment',
      component: 'SegmentPage'
    },
    {
      title: 'Select',
      component: 'SelectPage'
    },
    {
      title: 'Slides',
      component: 'SlidesPage'
    },
    {
      title: 'Tabs',
      component: 'TabsPage'
    },
    {
      title: 'Toast',
      component: 'ToastPage'
    },
    {
      title: 'Toggle',
      component: 'TogglePage'
    },
    {
      title: 'Toolbar',
      component: 'ToolbarPage'
    }
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component)
  }
}

