import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualisarMedicosPage } from './visualisar-medicos';

@NgModule({
  declarations: [
    VisualisarMedicosPage,
  ],
  imports: [
    IonicPageModule.forChild(VisualisarMedicosPage),
  ],
})
export class VisualisarMedicosPageModule {}
