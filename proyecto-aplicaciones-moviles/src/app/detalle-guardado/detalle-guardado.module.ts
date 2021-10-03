import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleGuardadoPageRoutingModule } from './detalle-guardado-routing.module';

import { DetalleGuardadoPage } from './detalle-guardado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleGuardadoPageRoutingModule
  ],
  declarations: [DetalleGuardadoPage]
})
export class DetalleGuardadoPageModule {}
