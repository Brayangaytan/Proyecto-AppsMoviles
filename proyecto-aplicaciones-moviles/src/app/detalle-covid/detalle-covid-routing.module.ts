import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCovidPage } from './detalle-covid.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCovidPageRoutingModule {}
