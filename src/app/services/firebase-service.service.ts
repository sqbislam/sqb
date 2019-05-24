import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private firestore: AngularFirestore) { }

getBlogs(){
  return this.firestore.collection('blogs').snapshotChanges();

}

getSingleBlog(id){
  return this.firestore.collection('blogs').doc(id).snapshotChanges();
}
}