import {OnInit, Component, ViewChild} from '@angular/core';

import {StateService} from '../state.service';
import {MatPaginator} from "@angular/material/paginator";
import {tap} from "rxjs";


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['id', 'login', 'avatar', "profile"];
  @ViewChild(MatPaginator)
  paginator: MatPaginator | undefined;
  public totalCount: number | undefined;

  constructor(public state: StateService) {
  }


  ngOnInit(): void {
    this.dataSource = this.state.dataSource
    this.totalCount = 0;
  }

  ngAfterViewInit() {

    this.paginator?.page
      .pipe(
        tap(() => this.loadPage()),
      )
      .subscribe();
    this.state.dataSource.totalCount.subscribe(x => {
      this.totalCount = x
    })
  }

  private loadPage() {
    this.state.dataSource.totalCount.subscribe(x => this.totalCount = x);
    this.dataSource.loadPage(this.paginator?.pageIndex, this.paginator?.pageSize);
  }
}
