import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BullingPageRoutingModule } from './bulling-routing.module';

import { BullingPage } from './bulling.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BullingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BullingPage]
})
export class BullingPageModule {}
