import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

/**
 * Generated class for the VerclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vercliente',
  templateUrl: 'vercliente.html',
})
export class VerclientePage {

  constructor(public navCtrl: NavController, public alerta:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerclientePage');
  }

  archivado(){
  	let alert = this.alerta.create({
  		title : 'Archivar Cliente',
  		message : '¿Esta seguro que desea archivar este cliente?',
  		buttons: [
	        {	
	          text: 'Cancelar',
	          handler: data => {
	            console.log('Cancelado!');
	          }
	        },
	        {
	          text: 'Archivar',
	          handler: data => {
	            console.log('Guardado!');
	          }
	        }
      	]
  	});
  	alert.present();
  }

  modificar(){
  	let alert2 = this.alerta.create({
  		title : 'Modificar Cliente',
  		message : '¿Esta seguro que desea modificar este cliente?',
  		buttons: [
	        {	
	          text: 'Cancelar',
	          handler: data => {
	            console.log('Cancelado!');
	          }
	        },
	        {
	          text: 'Modificar',
	          handler: data => {
	            console.log('Modificado!');
	          }
	        }
      	]
  	});
  	alert2.present();
  }


}
