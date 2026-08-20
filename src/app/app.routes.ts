import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';
import { Details } from './details/details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'user',
    component: User,
  },
  {
    path: 'details/:id',
    component: Details,
  },
];