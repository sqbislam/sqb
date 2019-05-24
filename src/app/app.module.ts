import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

//Import Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { HomeDetailsComponent } from './components/home-details/home-details.component';
import { ProjectPostComponent } from './components/project-post/project-post.component';
import { TestComponent } from './components/test/test.component';



const appRoutes: Routes = [
  {
    path:"",
    component:CarouselComponent
  },
  {
    path:"blog",
    component: BlogComponent
  },
  {
    path:"projects",
    component:ProjectsComponent
  },
  {
    path:"add-blog",
    component:AddBlogComponent
  },
  {
    path: "blog/:id",
    component: BlogDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    BlogComponent,
    BlogPostComponent,
    ProjectsComponent,
    AddBlogComponent,
    BlogDetailsComponent,
    HomeDetailsComponent,
    ProjectPostComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
  	AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
