import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from 'src/app/classes/voiture';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-dashboarddirecteur',
  templateUrl: './dashboarddirecteur.component.html',
  styleUrls: ['./dashboarddirecteur.component.css']
})
export class DashboarddirecteurComponent implements OnInit {

  
  lesVoitures$ !: Observable<Voiture[]>
  constructor(private carService:CarService){}

  ngOnInit(): void {
    this.lesVoitures$ = this.carService.getCars();
  }


}
