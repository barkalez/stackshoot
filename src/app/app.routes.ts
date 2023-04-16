import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'conectar',
    loadComponent: () => import('./conectar/conectar.page').then( m => m.ConectarPage)
  },
  {
    path: 'apilar',
    loadComponent: () => import('./apilar/apilar.page').then( m => m.ApilarPage)
  },
];
