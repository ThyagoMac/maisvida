import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CadastrarMedicosPage } from '../pages/cadastrar-medicos/cadastrar-medicos';
import { VisualisarMedicosPage } from '../pages/visualisar-medicos/visualisar-medicos';
import { ListarMedicosPage } from '../pages/listar-medicos/listar-medicos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastrarMedicosPage,
    VisualisarMedicosPage,
    ListarMedicosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastrarMedicosPage,
    VisualisarMedicosPage,
    ListarMedicosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
