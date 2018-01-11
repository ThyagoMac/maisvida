import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';

import { ListarMedicosPage } from '../listar-medicos/listar-medicos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cadastro = {
    email: "",
    senha: "",
    lembre: ""
  };

  constructor(public navCtrl: NavController,
    public http: Http
  ) {

  }

  login(cadastro) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions ({ headers: headers})
    this.http.post('endereçoURL', cadastro, options)
      .map(res => { res.json() })
      .subscribe(data => console.log(data));
      this.navCtrl.push(ListarMedicosPage);
    console.log(cadastro);
    console.log('Logando');
  }
}
