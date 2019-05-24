import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FirebaseServiceService } from '../../services/firebase-service.service';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  id:String
  blog: any

  constructor(
    public router:Router,
    public route:ActivatedRoute,
    public firebaseService: FirebaseServiceService
  ) { 

    
  }

  ngOnInit() {
    //Get ID
    this.id = this.route.snapshot.params['id'];
    
    this.firebaseService.getSingleBlog(this.id).subscribe(data => {
      this.blog = data.payload.data()
      console.log(this.blog)
    });
  }

}
