import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'subject',
    loadChildren: () => import('./modules/subject/subject.module').then((m) => m.SubjectModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
];
