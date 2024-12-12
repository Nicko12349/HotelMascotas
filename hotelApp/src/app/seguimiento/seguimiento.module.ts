import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SeguimientoPageRoutingModule } from './seguimiento-routing.module';
import { SeguimientoPage } from './seguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoPageRoutingModule
  ],
  declarations: [SeguimientoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregar CUSTOM_ELEMENTS_SCHEMA aquí
})
export class SeguimientoPageModule {}
