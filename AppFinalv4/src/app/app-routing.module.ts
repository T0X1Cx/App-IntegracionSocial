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
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'olvidar-contrasena',
    loadChildren: () => import('./pages/olvidar-contrasena/olvidar-contrasena.module').then( m => m.OlvidarContrasenaPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./pages/creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./pages/acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
