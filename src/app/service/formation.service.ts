import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  //connect frontend to backend
  URLFormation = " http://localhost:3000/formation";
  URLInstructor = " http://localhost:3000/instructor";
  URLcategorie = " http://localhost:3000/categorie";
  URLinscription = " http://localhost:3000/inscription";
  URLContact = " http://localhost:3000/contact";
  URLBlog = " http://localhost:3000/blog";
  URLComment = " http://localhost:3000/comment";
  URLFormateur = " http://localhost:3000/formateur";

  //get all Formation data
  getAllFormationData(): Observable<any> {
    return this.http.get(this.URLFormation);
  }
  //get single Formation data
  getSingleFomationData(id: number): Observable<any> {
    return this.http.get(this.URLFormation + "/" + id);
  }

  //get all Instructor data
  getAllInstructorData(): Observable<any> {
    return this.http.get(this.URLInstructor);
  }
  //get single Instructor data
  getSingleInstructorData(id: number): Observable<any> {
    return this.http.get(this.URLInstructor + "/" + id);
  }
  //get categorieData
  getCategories():Observable<any> 
  { return this.http.get(this.URLcategorie);

  }
  //get categorie by name
  getCategorieByName(categ:any):Observable<any>
  {
    return this.http.get(this.URLFormation+"/"+categ);
  }

  //inscription
  inscription(data:any):Observable<any>
  {
    return this.http.post(this.URLinscription,data);
  }

  //get contact data
  getContact():Observable<any>
  { return this.http.get(this.URLContact);
  }
  //create contact data
  contacter(data:any):Observable<any>
  {
    return this.http.post(this.URLContact,data);
  }


  //get blog data
  getBlog():Observable<any>
  { return this.http.get(this.URLBlog);
  }

  //get single blog data
  getSingleBlog(id:number):Observable<any>
  {
    return this.http.get(this.URLBlog+"/"+id);
  }

  /**-------Comment Data--------- */
  getComment():Observable<any>
  {
    return this.http.get(this.URLComment);
  }

  /**----------------------inscription formateur data-------------------- */

  createFormateur(data:any):Observable<any>
  {
    return this.http.post(this.URLFormateur,data);
  }
}
