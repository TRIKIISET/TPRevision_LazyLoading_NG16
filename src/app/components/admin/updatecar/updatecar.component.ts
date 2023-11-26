import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Voiture } from 'src/app/classes/voiture';
import { Marque } from 'src/app/enum/marque';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-updatecar',
  templateUrl: './updatecar.component.html',
  styleUrls: ['./updatecar.component.css']
})
export class UpdatecarComponent implements OnInit {
  @Input() voiture!: Voiture;
  @Output()updateDone = new EventEmitter<Voiture>();
  lesmarques = Object.values(Marque);
  carForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private carService: CarService) { }

  ngOnInit(): void {
    this.carForm = this.fb.nonNullable.group({
      id: this.voiture.id,
      infos: this.fb.nonNullable.group({
        marque: [this.voiture.infos.marque, Validators.required],
        modele: [this.voiture.infos.modele,[Validators.required, Validators.minLength(2)]],
        immatriculation:[this.voiture.infos.immatriculation, [Validators.required, Validators.pattern('^[1-9][0-9]{1,2}TU[0-9]{3,4}$')]]
      }),
      puissance: [this.voiture.puissance, Validators.min(4)],
      photo: [this.voiture.photo, Validators.required],
      dateCirculation: [this.voiture.dateCirculation],
      estAutomatique: [this.voiture.estAutomatique],
      listAccessoires: this.fb.array(this.voiture.listAccessoires.map
        (a => this.fb.nonNullable.group({
          propriete: [a.propriete, Validators.required],
          valeur: [a.valeur, Validators.required]
        })
        ))
    })
  }

  public get ListAccessoires() {
    return this.carForm.get('listAccessoires') as FormArray;
  }
  onSupprimerAccessoire(i:number){
    this.ListAccessoires.removeAt(i)
  }
  onModifier() {
    let idVoiture = this.voiture.id
   this.carService.updateCar(idVoiture,this.carForm.value)
     .subscribe(
       data => this.updateDone.emit(this.carForm.value)
     )
  }
  onAjouterAccessoire() {
    this.ListAccessoires.push(this.fb.group({
      propriete: ['', Validators.required],
      valeur: ['', Validators.required]
    }))
  }


}
