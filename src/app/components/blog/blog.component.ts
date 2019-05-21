import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  blogs: Array<any>;

  constructor(
    public firebaseService: FirebaseServiceService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    
    this.firebaseService.getBlogs().subscribe(data => {
      this.blogs = data.map(e => {
        return  {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
          }; 
      });
      console.log(this.blogs)
    });

  }

}
