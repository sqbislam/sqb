import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FirebaseServiceService } from '../../services/firebase-service.service';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  id:String
  
  constructor(
    public router:Router,
    public route:ActivatedRoute,
    public firebaseService: FirebaseServiceService
  ) { 


  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
