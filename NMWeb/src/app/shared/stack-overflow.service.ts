import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


interface User {
  reputation: number
}

interface UsersResponse {
  items: User[];
}

@Injectable()
export class StackOverflowService {

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpClient.get<UsersResponse>(
      'https://api.stackexchange.com/2.2/users/170451?order=desc&sort=reputation&site=stackoverflow').subscribe(data => {
      // window.alert(data.items[0].reputation)
    })
  }

}
