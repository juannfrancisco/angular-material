import { PostService } from './../../servicios/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  idPost:any;
  post:any;
  comments:any;
  
  constructor(
          private route: ActivatedRoute,
          private srv: PostService) { 
            
    this.idPost = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.srv.obtenerPostPorId( this.idPost ).subscribe(
      data =>{
         this.post = data;
      }
    );

    this.srv.obtenerComentariosPorPost( this.idPost ).subscribe(
      data=>{
        this.comments = data;
      }
    );
  }

}
