import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from '../../../../environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  //add new category
  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/categories`, model);
  }

  //get all categories
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/categories`);
  }

  //get category by id
  getCategoryById(id: string): Observable<Category> {

    //use http client to make http get to the api
    return this.http.get<Category>(`${environment.apiBaseUrl}/api/categories/${id}`);
  }

  updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest) : Observable<Category> {
    return this.http.put<Category>(`${environment.apiBaseUrl}/api/categories/${id}`, updateCategoryRequest);
  }

  deleteCategory(id: string): Observable<Category> {
    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/categories/${id}`);
  }
}
