import { Component } from '@angular/core';

import { ModclientePage } from '../modcliente/modcliente';
import { VerclientePage } from '../vercliente/vercliente';
import { ClientesPage } from '../clientes/clientes';
import { InicioPage } from '../inicio/inicio';
import { TestPage } from '../test/test';
import { YoutubePage } from '../youtube/youtube';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = YoutubePage;
  tab5Root = TestPage;
  tab6Root = InicioPage;
  tab7Root = ClientesPage;
  tab8Root = VerclientePage;
  tab9Root = ModclientePage;

  constructor() {

  }
}
