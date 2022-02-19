import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {

  constructor(private activetedRoute: ActivatedRoute, private formationService: FormationService, private router: Router) { }
  identifiant: number;
  formationData: any; //variable du formation(une seule formation)
  formationsData: any;//tableau des formations
  instructorData: any;//tableau des instruceurs
  popularFomation: any[] = [];//tableau des cours populaires
  paragraphe: any;
  ch: string = "";
  pos: any;
  tabPartie: any[] = [];
  categorieData:any;
  i: number = 0;
  ngOnInit(): void {
    this.identifiant = this.activetedRoute.snapshot.params['id'];
    this.formationService.getSingleFomationData(this.identifiant).subscribe(
      (res) => {
        this.formationData = res.data;
        this.paragraphe = this.formationData[0].program;
        this.ch = this.paragraphe;
        while (this.ch.indexOf("Partie") != -1) {
          this.ch = this.ch.slice(this.ch.indexOf(":") + 1, this.ch.length);
          this.tabPartie[this.i] = this.ch.slice(0, this.ch.indexOf("Partie"));
          this.i++;
          this.ch = this.ch.slice(this.ch.indexOf("Partie"), this.ch.length);

        }
      });
      //get categorie data
    this.formationService.getCategories().subscribe(
      (res) => {
        this.categorieData = res.data;
      }
    );
    //get all instructor data 
    this.formationService.getAllInstructorData().subscribe(
      (res) => {
        this.instructorData = res.data;
      });

    //get all formation data
    this.formationService.getAllFormationData().subscribe(
      (res) => {
        this.formationsData = res.data;
      }
    );
  }
  getcategorie(categ: any) {
 this.formationService.getCategorieByName(categ).subscribe(
       (res)=>{
         this.formationData=res.data;
         console.log(this.formationData,"categ data by name");
       }
     )
  }
}
