import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private userSearchApi = 'https://api.github.com/search/users'

  constructor(private http: HttpClient) {
    console.log('Github Service Ready...');

  }

  search(searchTerm: string,page:number,pageSize:number): Observable<any> {

    const url = this.userSearchApi;
    return this.http.get(url,{
      params:new HttpParams()
        .set('q',searchTerm)
        .set('per_page',pageSize.toString())
        .set('page',page.toString())

    }).pipe(
      map(response => {
        // @ts-ignore
        return {total_count:response.total_count,items:response['items']}})
    )

  }

}
