import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
interface SearchQueryModel{
  query: string;
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  model: SearchQueryModel = {
    query: ''
  };

  constructor(private state:StateService) {}
  ngOnInit(): void {

  }

  async search() {
    this.state.dataSource.searchUsers(this.model.query)
  }

}
