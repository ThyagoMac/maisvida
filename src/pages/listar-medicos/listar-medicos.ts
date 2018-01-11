import { Component } from '@angular/core';
import { IonicPage,  NavController,  NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { VisualisarMedicosPage } from '../visualisar-medicos/visualisar-medicos';

@IonicPage()
@Component({
  selector: 'page-listar-medicos',
  templateUrl: 'listar-medicos.html',
})
export class ListarMedicosPage {

  private url: string = 'https://beer.symfonycasts.com.br/v1/beers'; //url para a tabela de cadastro de medicos //beers usado como test
  public medicos: Array < {} > ;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public http: Http
  ) {
    this.http.get(this.url )
      .map(res => res.json())
      .subscribe(data => {
        this.medicos = data;
      });
  }
  
  getMedicoInfo(id){
    this.navCtrl.push(VisualisarMedicosPage,
      {
        'medico_id': id,
        'api_url': this.url
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarMedicosPage');
  }

}
