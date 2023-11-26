import { Component } from '@angular/core';
import { Voiture } from 'src/app/classes/voiture';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-listcars',
  templateUrl: './listcars.component.html',
  styleUrls: ['./listcars.component.css']
})
export class ListcarsComponent {

  lesvoitures: Voiture[]=[];
  allCars: Voiture[]=[];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars()
    .subscribe(
      data => {
        this.lesvoitures = data;
        this.allCars = data
      }
    )
  }

  onRechercher(chaine:string){
    this.lesvoitures = this.allCars.filter
     (e => e.infos.marque.toLowerCase().search(chaine.toLowerCase())>=0);
  }
  onSuppression(id:number){
    this.lesvoitures = this.lesvoitures.filter(e => e.id !=id) ;
    this.allCars = this.allCars.filter(e => e.id !=id) ;
}

}
