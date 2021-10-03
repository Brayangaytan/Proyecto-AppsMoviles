import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCovidPageRoutingModule } from './detalle-covid-routing.module';

import { DetalleCovidPage } from './detalle-covid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCovidPageRoutingModule
  ],
  declarations: [DetalleCovidPage]
})
export class DetalleCovidPageModule {}
