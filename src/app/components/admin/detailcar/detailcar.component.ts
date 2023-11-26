import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from 'src/app/classes/voiture';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-detailcar',
  templateUrl: './detailcar.component.html',
  styleUrls: ['./detailcar.component.css']
})
export class DetailcarComponent {
  voiture!:Voiture;  
  dep!:string;
  display :boolean = false;

  constructor(private activatedRoute:ActivatedRoute,
    private carService:CarService) { }

  ngOnInit(): void {
    let idVoiture :number =0;
    this.activatedRoute.params.subscribe(
      res => {
        idVoiture = res["id"];
        this.carService.getCarById(idVoiture)
        .subscribe(
          data => {
            this.voiture = data;            
          }
        )
      }
    );
   
  }

  onModification(v:Voiture){
    this.voiture = v;    
  }

}

