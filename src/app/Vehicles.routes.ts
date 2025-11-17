import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { VehiclesDetailPage } from './vehicles-detail-page/vehicles-detail-page';
import { VehiclesListPage } from './vehicles-list-page/vehicles-list-page';


export const routes: Routes = [
  {
    path: 'list',
    component: VehiclesListPage,
  },
    {
    path: 'detail',
    component: VehiclesDetailPage,
  },
];
