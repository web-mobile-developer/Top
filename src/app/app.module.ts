import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LinkedIn } from '@ionic-native/linkedin';

import { MyApp } from './app.component';
// Import Pages
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { LocationPage } from '../pages/location/location';
import { InboxPage } from '../pages/inbox/inbox';
import { TopupPage } from '../pages/topup/topup';
import { LoginPage } from '../pages/login/login';
import { EnterPhonePage } from '../pages/enter-phone/enter-phone';
import { VerifyPinPage } from '../pages/verify-pin/verify-pin';
import { RegisterPage } from '../pages/register/register';
import { AddCardPage } from '../pages/add-card/add-card';
import { PassengerPage } from '../pages/passenger/passenger';
import { KeepPostedPage } from '../pages/keep-posted/keep-posted';
import { CountryCodePage } from '../pages/country-code/country-code';
import { HomelandPage } from '../pages/homeland/homeland';
import { LocationApprovalPage } from '../pages/location-approval/location-approval';

import { LoginProvider } from '../providers/login';
import { ConfigProvider } from '../providers/config';
import { DataProvider } from '../providers/data';

import { LocationPipe } from '../pipes/location';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    LocationPage,
    InboxPage,
    TopupPage,
    LoginPage,
    EnterPhonePage,
    VerifyPinPage,
    RegisterPage,
    AddCardPage,
    PassengerPage,
    KeepPostedPage,
    CountryCodePage,
    HomelandPage,
    LocationApprovalPage,
    LocationPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    LocationPage,
    InboxPage,
    TopupPage,
    LoginPage,
    EnterPhonePage,
    VerifyPinPage,
    RegisterPage,
    AddCardPage,
    PassengerPage,
    KeepPostedPage,
    CountryCodePage,
    HomelandPage,
    LocationApprovalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    ConfigProvider,
    Facebook,
    LinkedIn,
    DataProvider
  ]
})
export class AppModule {}
