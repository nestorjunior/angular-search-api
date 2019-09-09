import { Item } from './shared/items.model'
import { HttpClient } from '@angular/common/http'
import { Injectable, Pipe } from '@angular/core'

import { Observable, Subject } from 'rxjs/Rx'
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {

	constructor(private http: HttpClient) { }

	private items:Item[]= [];
	public itemCollection = new Subject<Item[]>();
	/*
	public searchTerm(term: string): Observable<Item[]>{

		return this.http.get(`https://jsonplaceholder.typicode.com/posts/1?title_like=${term}`)
			.pipe(
				map((res: any) => res.json())
			)
			
	}
	*/

	searchTerm(term: string) {
		/*
		Você está procurando apenas no post 1, pois, está passando o id '1'na uri. 
		sempre vai retonar um post e sempre o mesmo
		*/
		//return this.http.get(`https://jsonplaceholder.typicode.com/posts/1?title_like=${term}`)
		
		//abaixo eu mudei para retornar uma coleção de posts, ou seja, sem espeficar o id.
		 this.http.get(`https://jsonplaceholder.typicode.com/posts/?title_like=${term}`).subscribe((data:any[]) =>

		 this.itemCollection.next([...data])
			
		 );
	}

}
