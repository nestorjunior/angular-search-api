import { Component, OnInit } from '@angular/core'
import { SearchService } from '../search.service'
import { Item } from '../shared/items.model'

import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [SearchService]
})
export class ContentComponent implements OnInit {

	public items: Observable<Item[]>

	constructor(private searchService: SearchService ) { }

	ngOnInit() {
		
	}

	public search(searchItem: string): void {
		this.items = this.searchService.searchTerm(searchItem)
		
		this.items.subscribe(
			(items: Item[]) => console.log(items)
		)
	}

}
