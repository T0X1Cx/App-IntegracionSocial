import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiberbullingPageRoutingModule } from './ciberbulling-routing.module';

import { CiberbullingPage } from './ciberbulling.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiberbullingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CiberbullingPage]
})
export class CiberbullingPageModule {}
