import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as bookActions from './book.actions';
import { BookService } from "./book.service";


@Injectable()
    
export class BookEffects{
    //TODO read more about this lines
    
    addBook$ = createEffect(() => this.actions$.pipe(ofType(bookActions.AddBook),
        mergeMap((action) => this.bookService.addBook(action).pipe(map(book => bookActions.AddBookSuccess(book)),
            catchError((error)=>of(bookActions.AddBookFailure({error})))
        ))));
    
    
constructor(private actions$:Actions,private bookService:BookService){}
}