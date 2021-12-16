import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiberbullingPage } from './ciberbulling.page';

const routes: Routes = [
  {
    path: '',
    component: CiberbullingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiberbullingPageRoutingModule {}
