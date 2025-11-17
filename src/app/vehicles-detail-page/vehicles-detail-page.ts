import { Component } from '@angular/core';
import { VehiclesResponse } from '../services/vehicles.service'; 
import {Vehicle} from '../services/vehicles.service'; 
import {VehicleDetail} from '../services/vehicles.service'; 

@Component({
  selector: 'app-vehicles-detail-page',
  imports: [],
  templateUrl: './vehicles-detail-page.html',
  styleUrl: './vehicles-detail-page.css',
})
export class VehiclesDetailPage {
     protected isInitialized = false;
  ngOnInit() {
    
    this.isInitialized = true;
  }
}
