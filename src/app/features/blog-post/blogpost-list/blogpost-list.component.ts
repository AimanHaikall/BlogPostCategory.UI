import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogpost-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blogpost-list.component.html',
  styleUrl: './blogpost-list.component.css'
})
export class BlogpostListComponent implements OnInit {

  //can use asyncpipe bcs tak guna untuk form, untuk display sahaja, untuk handle subscription dan unsubscribe

  //represents observable for blogpost
  blogPosts$?: Observable<BlogPost[]>;
  
  constructor(private blogPostService: BlogPostService) {

  }

  ngOnInit(): void {
    //get all blogposts from api
    this.blogPosts$ = this.blogPostService.getAllBlogPosts();

  }

}
