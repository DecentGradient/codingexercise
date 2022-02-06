import {OnInit, Component} from '@angular/core';

import {StateService} from '../state.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['id', 'login','avatar',"profile"];

  constructor(private state: StateService) {
  }


  ngOnInit(): void {
    this.dataSource = this.state.dataSource
  }


}
