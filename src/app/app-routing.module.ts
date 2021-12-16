import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'identidad-genero',
    loadChildren: () => import('./pages/identidad-genero/identidad-genero.module').then( m => m.IdentidadGeneroPageModule)
  },
  {
    path: 'violencia-genero',
    loadChildren: () => import('./pages/violencia-genero/violencia-genero.module').then( m => m.ViolenciaGeneroPageModule)
  },
  {
    path: 'bulling',
    loadChildren: () => import('./pages/bulling/bulling.module').then( m => m.BullingPageModule)
  },
  {
    path: 'ciberbulling',
    loadChildren: () => import('./pages/ciberbulling/ciberbulling.module').then( m => m.CiberbullingPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
