import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Marque } from 'src/app/enum/marque';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit{

  carForm!: FormGroup;
  lesmarques = Object.values(Marque);
  constructor(
    private fb:FormBuilder,
    private carService:CarService,
    private router:Router) { }

  ngOnInit(): void {
    this.carForm = this.fb.nonNullable.group({
       infos:this.fb.nonNullable.group({
        marque:[Marque.Ford,Validators.required],
        modele:['',[Validators.required, Validators.minLength(2)]],
        immatriculation:["", [Validators.required, Validators.pattern('^[1-9][0-9]{1,2}TU[0-9]{3,4}$')]]
       }),
      puissance: [4, Validators.min(4)],
      photo: ['', Validators.required],
       dateCirculation: [''],
       estAutomatique:[true],
       listAccessoires:this.fb.array([])
    })
  }

  public get ListAccessoires(){
    return this.carForm.get('listAccessoires') as FormArray;
  }

  onAjouter(){
    this.carService.addCar( this.carForm.value)
    .subscribe(
      data => this.router.navigate(['/admin/cars'])
    )
}
onAjouterAccessoire(){
  this.ListAccessoires.push(this.fb.nonNullable.group({
    propriete:['', Validators.required],
    valeur:['', Validators.required]
  }))
}

onSupprimerAccessoire(i:number){
  this.ListAccessoires.removeAt(i)
}

onEffacer(){
  this.carForm.reset();
  this.ListAccessoires.clear();
}

get Modele(){
  return this.carForm.get('infos')?.get('modele');
}
get Immatriculation(){
  return this.carForm.get('infos')?.get('immatriculation');
}
isValidPatternImm(){
  return this.Immatriculation?.errors?.['pattern'] && this.Immatriculation.dirty;
}
isRequiredImm(){
  return this.Immatriculation?.errors?.['required'] && this.Immatriculation.dirty;
}
}
