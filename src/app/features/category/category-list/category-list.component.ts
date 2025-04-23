import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { CategoryService } from '../services/category.service';
import { response } from 'express';
import { Category } from '../models/category.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterModule, AddCategoryComponent, CommonModule, EditCategoryComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  //for subscription
  //categories?: Category[];

  //? means can be Observable or undefined
  categories$?: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {

  }

  //this method returning observable
  //observable wont pass the value directly, must subscribe it
  ngOnInit(): void {

    // --> subscription
    // this.categoryService.getAllCategories()
    // .subscribe({
    //   next: (response) => {
    //     //coming from the api
    //     //use this object to display data in html
    //     this.categories = response;
    //   }
    // })

    // --> asyncpipe
    this.categories$ = this.categoryService.getAllCategories();
  }
}
