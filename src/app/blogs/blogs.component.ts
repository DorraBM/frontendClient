import { Component, OnInit } from '@angular/core';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private formationService:FormationService) { }
  blogData:any;
  ngOnInit(): void {
    this.formationService.getBlog().subscribe(
      (res)=>{
        this.blogData=res.data;
      }
    );
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
