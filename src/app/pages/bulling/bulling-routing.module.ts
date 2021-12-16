import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BullingPage } from './bulling.page';

const routes: Routes = [
  {
    path: '',
    component: BullingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BullingPageRoutingModule {}
