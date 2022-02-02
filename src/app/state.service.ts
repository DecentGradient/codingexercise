import {Injectable, OnInit} from '@angular/core';
import {GithubService} from "./github.service";
import {ResultsDatasource} from "./results/results.datasource";

@Injectable({
  providedIn: 'root'
})
export class StateService implements OnInit{
public dataSource!:ResultsDatasource
  constructor(private  githubService:GithubService) {

    this.dataSource = new ResultsDatasource(this.githubService)
  }
  ngOnInit(): void {

  }
}
