import { Component } from '@angular/core';
import { VehiclesResponse } from '../services/vehicles.service'; 
import {Vehicle} from '../services/vehicles.service'; 


@Component({
  selector: 'app-vehicles-list-page',
  imports: [],
  templateUrl: './vehicles-list-page.html',
  styleUrl: './vehicles-list-page.css',
})
export class VehiclesListPage {
vehicles = [
  
  ];
}