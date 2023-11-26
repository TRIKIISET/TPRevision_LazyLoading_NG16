import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Voiture } from 'src/app/classes/voiture';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  @Input() car!: Voiture;
  @Input() position!: number;
  @Output() notify = new EventEmitter<number>();
  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }
  onSupprimer(id:number){
    this.carService.deleteCar(id)
    .subscribe(
        ()=>this.notify.emit(id)
    )
  }
}
