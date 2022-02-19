import { Component, OnInit } from '@angular/core';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  constructor(private formationService: FormationService) { }
  formationData: any[] = [];//tableau des formations
  instructorData: any;//tableau des instruceurs
  popularFomation: any[] = [];//tableau des cours populaires
  categorieData: any;
  i: number = 0;
  commentData: any;
  page: number = 1;
  ngOnInit(): void {
    /*get all formations data*/
    this.formationService.getAllFormationData().subscribe(
      (res) => {
        this.formationData = res.data;
        //get all instructor
        this.formationService.getAllInstructorData().subscribe(
          (res) => {
            this.instructorData = res.data;
            console.log(this.instructorData, "ins");
          });
      });
    //get categorie data
    this.formationService.getCategories().subscribe(
      (res) => {
        this.categorieData = res.data;
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
