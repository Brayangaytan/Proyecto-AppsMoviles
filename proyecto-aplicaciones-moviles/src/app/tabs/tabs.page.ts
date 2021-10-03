import { Component, OnInit } from '@angular/core';
import { AdminPage } from '../admin/admin.page';
import { CovidPage } from '../covid/covid.page';
import { GuardadoPage } from '../guardado/guardado.page';
import { HomePage } from '../home/home.page';
import { NoticiasPage } from '../noticias/noticias.page';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html'
})
export class TabsPage implements OnInit {

  tab1: any = HomePage;
  tab2: any = NoticiasPage;
  tab3: any = CovidPage;
  tab4: any = GuardadoPage;
  tab5: any = AdminPage;
  constructor(private navController: NavController, private navParams: NavParams) { }

  ngOnInit() {
  }

}
