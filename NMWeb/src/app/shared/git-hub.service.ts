import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GitHubService {

  constructor(
    private http: HttpClient,
  ) {
    this.http.get('https://api.github.com/repos/vmg/redcarpet').subscribe((data: any) => {
      // window.alert(data.stargazers_count);
    })
  }

}
