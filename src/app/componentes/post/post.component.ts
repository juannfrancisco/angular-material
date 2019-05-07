import { PostService } from './../../servicios/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any;

  constructor( private srv:PostService ) { }

  ngOnInit() {
    this.srv.obtenerPosts().subscribe( 
      data => { this.posts = data } 
    );
  }

}
