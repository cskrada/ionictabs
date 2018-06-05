import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerta: AlertController) {

  }
  otraPagina(){
  	this.navCtrl.push(MasinfoPage);
  }

  alertaBasica(){
  	let miAlerta = this.alerta.create({
  		title : 'Titulo de alerta',
  		message : 'mensaje que puedes entregar con el boton',
  		buttons : ['Entendido']
  	});
  	miAlerta.present();	
  }
  alertaBasica2(){
  	let miAlerta2 = this.alerta.create({
  		title : 'Titulo de alerta',
  		message : 'mensaje que puedes entregar con el boton',
  		inputs: [
	        {
	          name: 'Nombre',
	          placeholder: 'Nombre'
	        },
      	],
  		buttons: [
	        {
	          text: 'Cancelar',
	          handler: data => {
	            console.log('Cancelado!');
	          }
	        },
	        {
	          text: 'Guardar',
	          handler: data => {
	            console.log('Guardado!');
	          }
	        }
      	]
  	});
  	miAlerta2.present();	
  }

}
