import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home', canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'noticias', canActivate: [AuthGuard],
    children: [
      {
        path:'',
        loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
      },
      {
        path:':idNoticia',
        loadChildren: () => import('./detalle-noticia/detalle-noticia.module').then( m => m.DetalleNoticiaPageModule)
      }
    ]
  },
  {
    path: 'configuracion', canActivate: [AuthGuard],
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'covid', canActivate: [AuthGuard],
    loadChildren: () => import('./covid/covid.module').then( m => m.CovidPageModule)
  },
  {
    path: 'guardado', canActivate: [AuthGuard],
    loadChildren: () => import('./guardado/guardado.module').then( m => m.GuardadoPageModule)
  },
  {
    path: 'tabs', canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin', canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'detalle-noticia', canActivate: [AuthGuard],
    loadChildren: () => import('./detalle-noticia/detalle-noticia.module').then( m => m.DetalleNoticiaPageModule)
  },
  {
    path: 'detalle-guardado', canActivate: [AuthGuard],
    loadChildren: () => import('./detalle-guardado/detalle-guardado.module').then( m => m.DetalleGuardadoPageModule)
  },
  {
    path: 'detalle-covid', canActivate: [AuthGuard],
    loadChildren: () => import('./detalle-covid/detalle-covid.module').then( m => m.DetalleCovidPageModule)
  },
  {
    path: 'galeria', canActivate: [AuthGuard],
    loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
