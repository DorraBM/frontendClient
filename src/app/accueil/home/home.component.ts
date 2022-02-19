import { FormationService } from '../../service/formation.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private formationService: FormationService) { }
  formationData: any;//tableau des formations
  instructorData: any;//tableau des instruceurs

  commentData: any;
  instructorForm: FormGroup;
 
  ngOnInit(): void {
    this.formationService.getAllFormationData().subscribe(
      (res) => {
        this.formationData = res.data;
      });
    this.formationService.getAllInstructorData().subscribe(
      (res) => {
        this.instructorData = res.data;
      });
    this.formationService.getComment().subscribe(
      (res) => {
        this.commentData = res.data;
      }
    );
    //formulaire inscription instructeur
    this.instructorForm = new FormGroup({
      'nomFormateur': new FormControl(''),
      'TelFormateur': new FormControl(''),
      'emailFormateur': new FormControl(''),
      'categorieFormateur': new FormControl(''),
      'imageFormateur': new FormControl(''),
      'cvFormateur': new FormControl(''),
    });
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  onSubmit() {
    if (this.instructorForm.valid) {
      console.log(this.instructorForm)
      this.formationService.createFormateur(this.instructorForm.value).subscribe(
        (res) => { console.log(this.instructorForm.value, "formateur"); }
      );
    }

  }
  close() {
    this.instructorForm.reset();
  }

}
