import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}` + `/` + userId);
  }

  addUser(user: User): void { // TODO: zmienić
    this.http.post<User>(`${this.baseUrl}`, {
      "userId": "1",
      "title": "Today'",
      "content": "Watch Netflix",
      "startDate": "2012-04-23",
      "endDate": "2012-04-23",
      "columnId": "1",
      "password": "aaa"
    }).subscribe();
  }

  getLoginResponse(email: string, password: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}` + `/login/` + email + `/` + password);
  }
}
