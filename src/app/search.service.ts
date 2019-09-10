import { Item } from './shared/items.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';

import { Observable, Subject } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }
  private items: Item [] = [];
  public itemCollection = new Subject<Item []>();

  searchTerm(term: string) {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/?title_like=${term}`).subscribe((data: any[]) =>
    this.itemCollection.next([...data]));
  }

}
