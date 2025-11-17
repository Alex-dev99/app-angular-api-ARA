import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { VehiclesListPage } from './vehicles-list-page';


export const routes: Routes = [
  {
    path: 'list',
    component: VehiclesListPage,
  },
];
