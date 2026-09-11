import { Routes } from '@angular/router';
import { PublicLayout } from './layout/public-layout/public-layout';
export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/institutional/pages/home').then((m) => m.Home),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found').then((m) => m.NotFound),
  },
];
