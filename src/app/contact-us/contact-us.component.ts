import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private formationService:FormationService) { }
contactForm:FormGroup;
  ngOnInit(): void {
    this.contactForm=new FormGroup({
      'contactNom':new FormControl('',Validators.required),
      'contactMail':new FormControl('',Validators.required),
      'contactTel':new FormControl('',Validators.required),
      'contactMessage':new FormControl('',Validators.required),
    });
  }
 
  onSubmit()
  {
    if(this.contactForm.valid)
    {
      console.log(this.contactForm.value);
      this.formationService.contacter(this.contactForm.value).subscribe(
        (res)=>{
          this.contactForm.reset();
          this.SuccessSnackBar('Message envoyé')
        }
      );
    }
    else
    {
      console.log("error");
    }
  }
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 1000});
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 2000 });
  }


}
