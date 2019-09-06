import { Component, OnInit } from '@angular/core'
import { SearchService } from '../search.service'
import { Item } from '../shared/items.model'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [SearchService]
})
export class ContentComponent implements OnInit {

	public items: Item

	constructor(private searchService: SearchService ) { }

	ngOnInit() {
		
	}

}
