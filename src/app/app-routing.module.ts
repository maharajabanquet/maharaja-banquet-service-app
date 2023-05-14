import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./category-page/category-page.module').then( m => m.CategoryPagePageModule),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',

  },
  {
    path: 'category-page',
    loadChildren: () => import('./category-page/category-page.module').then( m => m.CategoryPagePageModule),
    canLoad: [AuthGuard]
  },
  // {
  //   path: 'login-page',
  //   loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  // },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canLoad: []
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
