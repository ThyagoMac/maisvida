import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-visualisar-medicos',
  templateUrl: 'visualisar-medicos.html',
})
export class VisualisarMedicosPage {
  public medico: any = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {
    let medico_id = this.navParams.get('medico_id');
    let url = this.navParams.get('api_url');


    this.http.get(url + '/' + medico_id) // a '/' complementa o endereço no banc de dados
      .map(res => res.json())
      .subscribe(data => {
        this.medico = data;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualisarMedicosPage');
  }

}
