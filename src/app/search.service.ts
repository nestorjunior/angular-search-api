import { Item } from './shared/items.model'
import { HttpClient } from '@angular/common/http'
import { Injectable, Pipe } from '@angular/core'

import { Observable } from 'rxjs/Rx'
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {

	constructor(private http: HttpClient) { }

	/*
	public searchTerm(term: string): Observable<Item[]>{

		return this.http.get(`https://jsonplaceholder.typicode.com/posts/1?title_like=${term}`)
			.pipe(
				map((res: any) => res.json())
			)
			
	}
	*/

	searchTerm(term: string) {
	    return this.http.get(`https://jsonplaceholder.typicode.com/posts/1?title_like=${term}`)
	}

}
