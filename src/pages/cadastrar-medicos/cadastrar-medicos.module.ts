import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarMedicosPage } from './cadastrar-medicos';

@NgModule({
  declarations: [
    CadastrarMedicosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarMedicosPage),
  ],
})
export class CadastrarMedicosPageModule {}
