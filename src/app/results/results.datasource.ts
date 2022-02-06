import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, catchError, finalize,  Observable, of, } from "rxjs";
import {GithubService} from "../github.service";
import {Injectable} from "@angular/core";
@Injectable()
export class ResultsDatasource implements DataSource<any> {
  private currentSearchTerm: string = '';
  private usersSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false); // true when loading
  public countSubject = new BehaviorSubject<number>(0);
  public loading = this.loadingSubject.asObservable();
  public totalCount = this.countSubject.asObservable();
  constructor(private githubService: GithubService) {

  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
return this.usersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.usersSubject.complete();
    this.loadingSubject.complete();
  }

  searchUsers(searchTerm:string,page:number=0,pageSize:number=20) {
    this.loadingSubject.next(true);
    this.currentSearchTerm = searchTerm;
    this.githubService.search(searchTerm,page+1,pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => {this.loadingSubject.next(false)}),

      )
      .subscribe((result) => {

        this.countSubject.next(result.total_count);
        return this.usersSubject.next(result.items);
      });
  }
  loadPage(pageIndex: number,pageSize: number) {
    this.searchUsers(this.currentSearchTerm,pageIndex,pageSize);
  }
}
