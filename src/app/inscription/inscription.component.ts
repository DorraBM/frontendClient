import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor( private _snackBar: MatSnackBar,private formationService: FormationService) { }
  categories: any;
  errorMessage:any;
  successMessage:any;

 
 

 
  ngOnInit(): void {
    this.formationService.getCategories().subscribe(
      (res) => {
        console.log(res, 'categories==>');
        this.categories = res.data;

      }
    )
  }
  etudiantForm= new FormGroup({
    'nomEtudiant':new FormControl('',Validators.required),
    'prenomEtudiant':new FormControl('',Validators.required),
    'numeroTelEtudiant':new FormControl('',Validators.required),
    'emailEtudiant':new FormControl('',Validators.required),
    'nomCategorie':new FormControl('',Validators.required)

  });

  onSubmit() {
   
    if(this.etudiantForm.valid)
    {
      console.log(this.etudiantForm.value);
      this.formationService.inscription(this.etudiantForm.value).subscribe(
        (res)=>{
          this.etudiantForm.reset();
          this.SuccessSnackBar('Inscription Bien Validé');
          this.successMessage="Inscription Bien Validé";
         
      

        }
      )
    }
    else
    {  //hedhy bech nesta3melha pour afficher les erreurs
      this.errorMessage="tout les champs sont obligatoires !";
      
    }

  }
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 2000});
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 2000 });
  }

}
