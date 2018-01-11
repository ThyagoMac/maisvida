import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';
import { ListarMedicosPage } from '../listar-medicos/listar-medicos';




@IonicPage()
@Component({
  selector: 'page-cadastrar-medicos',
  templateUrl: 'cadastrar-medicos.html',
})
export class CadastrarMedicosPage {
  selectedItem: any;
  icons: string[];
  private url: string = 'https://beer.symfonycasts.com.br/v1/beers';
  public medico = {
    name: "",
    uname: "",
    email: "",
    ativo: "",
    ocupado: "",
    especialidade: "",
    cidade: "",
    estado: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {}

  saveMedico(medico) { 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions ({ headers: headers})
    this.http.post(this.url +  medico, options)
      .map(res => { res.json() })
      .subscribe(data => console.log(data));


        this.navCtrl.push(ListarMedicosPage);
      
     
    console.log(medico);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarMedicosPage');
  }

}
