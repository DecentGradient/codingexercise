import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private userSearchApi = 'https://api.github.com/search/users'
  public searchResultsObservable!: Observable<any>;

  constructor(private http: HttpClient) {
    console.log('Github Service Ready...');

  }

  search(searchTerm: string) {

    const url = this.userSearchApi + '?q=' + searchTerm;
    return this.http.get(url).pipe(
      map(response => {
        // @ts-ignore
        return response['items']})
    )

  }

}
