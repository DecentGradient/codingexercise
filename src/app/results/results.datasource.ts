import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, catchError, Observable, of} from "rxjs";
import {GithubService} from "../github.service";
import {Injectable} from "@angular/core";
@Injectable()
export class ResultsDatasource implements DataSource<any> {

  private usersSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false); // true when loading
  public loading = this.loadingSubject.asObservable();
  constructor(private githubService: GithubService) {

  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
return this.usersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.usersSubject.complete();
    this.loadingSubject.complete();
  }

  searchUsers(searchTerm:string){
    this.githubService.search(searchTerm)
      .pipe(
        catchError(() => of([])),
      )
      .subscribe((users) => {
        return this.usersSubject.next(users);
      });
  }
}
