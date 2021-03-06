import { ShowPage } from './../pages/fontend/result_show/res';
import { GotoUserPage } from './../pages/goto-user/goto-user';
import { GotoShoppy } from './../pages/Shoppy/Shop';
import { FontendPage } from './../pages/fontend/fontend';
import { IntroPage } from './../pages/intro/intro';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FontendPage,
    GotoUserPage,
    ShowPage,
    GotoShoppy,
    IntroPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FontendPage,
    GotoUserPage,
    ShowPage,
    GotoShoppy,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
