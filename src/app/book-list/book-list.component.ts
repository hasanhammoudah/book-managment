import { AppState } from './../app.state';
import { RemoveBook } from './../books/book.actions';
import { Component } from '@angular/core';
import { Store,select} from '@ngrx/store';
import { AddBook } from '../books/book.actions';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books$: Observable<Book[]>;
  //TODO what is benefit the <AppState> here?
  constructor(private store: Store<AppState>) {
    this.books$ = store.pipe(select('book'))
   }
  
  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ id, title, author }));
  }
  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({ bookId }));
  }
}
