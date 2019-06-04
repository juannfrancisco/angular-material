import { ReclamosService } from './../../servicios/reclamos.service';
import { PostService } from './../../servicios/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any;

  constructor( private srv:PostService, 
    private srvReclamo:ReclamosService ) { }

  ngOnInit() {
    this.srv.obtenerPosts().subscribe( 
      data => { this.posts = data } 
    );
  }



  nuevoReclamo(){
    this.srvReclamo.nuevoReclamo( {      
      title: "ejemplo",
      description: "hola",
      author: "hola@mail.com"
      } ).subscribe( data=>{ console.log(data) } );
  }

}
