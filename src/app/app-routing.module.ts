import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FooterComponent } from './accueil/footer/footer.component';
import { CarousselComponent } from './accueil/caroussel/caroussel.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './accueil/home/home.component';
import { FormationsComponent } from './formations/formations.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { FormateurComponent } from './formateur/formateur.component';

const routes: Routes = [
  {path:'accueil',component:HomeComponent},
  {path:'formations',component:FormationsComponent},
  {path:'formation/:id',component:FormationDetailComponent},
  {path:'blog/:id',component:BlogDetailsComponent},
  {path:'blog',component:BlogsComponent},
  {path:'Apropos',component:AboutUsComponent},
  {path:'contacter-nous',component:ContactUsComponent},
  {path:'caroussel',component:CarousselComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'footer',component:FooterComponent},
  {path:'formateur',component:FormateurComponent},
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
