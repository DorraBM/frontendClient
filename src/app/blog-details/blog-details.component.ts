import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(private activetedRoute:ActivatedRoute,private formationService:FormationService) { }
  identifiant:any;
  blogData:any;
  ngOnInit(): void {
    this.identifiant=this.activetedRoute.snapshot.params['id'];
    this.formationService.getSingleBlog(this.identifiant).subscribe(
      (res)=>{
        this.blogData=res.data;
      });
  }

}
