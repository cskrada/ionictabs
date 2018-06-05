import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModclientePage } from './modcliente';

@NgModule({
  declarations: [
    ModclientePage,
  ],
  imports: [
    IonicPageModule.forChild(ModclientePage),
  ],
})
export class ModclientePageModule {}
