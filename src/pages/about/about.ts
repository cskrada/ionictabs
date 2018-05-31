import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  list: Array<any> = [
  	{
	  titulo: "Perro",
	  color: "#444"
  	},
  	{
	  titulo: "Gato",
	  color: "#666"
  	},
  	{
	  titulo: "Raton",
	  color: "#888"
  	}
  ];
  
  constructor(public navCtrl: NavController) {

  }

}
