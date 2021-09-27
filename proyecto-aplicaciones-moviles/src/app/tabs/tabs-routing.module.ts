import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'noticias',
        loadChildren: () => import('../noticias/noticias.module').then( m => m.NoticiasPageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('../configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },
      {
        path: 'covid',
        loadChildren: () => import('../covid/covid.module').then( m => m.CovidPageModule)
      },
      {
        path: 'guardado',
        loadChildren: () => import('../guardado/guardado.module').then( m => m.GuardadoPageModule)
      },
      {
        path: '',
        redirectTo:'/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
