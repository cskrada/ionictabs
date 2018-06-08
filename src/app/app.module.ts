import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChartsModule } from 'ng2-charts';

import { ModclientePage } from '../pages/modcliente/modcliente';
import { VerclientePage } from '../pages/vercliente/vercliente';
import { ClientesPage } from '../pages/clientes/clientes';
import { InicioPage } from '../pages/inicio/inicio';
import { MasinfoPage } from '../pages/masinfo/masinfo';
import { TestPage } from '../pages/test/test';
import { YoutubePage } from '../pages/youtube/youtube';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ModclientePage,
    VerclientePage,
    ClientesPage,
    InicioPage,
    MasinfoPage,
    TestPage,
    YoutubePage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModclientePage,
    VerclientePage,
    ClientesPage,
    InicioPage,
    MasinfoPage,
    TestPage,
    YoutubePage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
