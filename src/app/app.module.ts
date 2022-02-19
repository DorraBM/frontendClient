import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './accueil/home/home.component';
import { Error404Component } from './error404/error404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormationService } from './service/formation.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './accueil/footer/footer.component';
import { CarousselComponent } from './accueil/caroussel/caroussel.component';
import { FormationsComponent } from './formations/formations.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NavbarComponent } from './accueil/navbar/navbar.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormateurComponent } from './formateur/formateur.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    NavbarComponent,
    FooterComponent,
    CarousselComponent,
    FormationsComponent,
    BlogsComponent,
    FormationDetailComponent,
    InscriptionComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogDetailsComponent,
    FormateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AccordionModule,
    IvyCarouselModule,
    NgbModule,
    NgxPaginationModule,
    MatSnackBarModule

    
    
  ],
  providers: [FormationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
