import { Observable, of, throwError } from 'rxjs';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor() { }

  addBook(book: Book): Observable<Book>{
    // const err = new Error('Error while adding a book')
    // return throwError(() => err);
    return of(book);
  }
}
