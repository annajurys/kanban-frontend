import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Column} from './column';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  private baseUrl = 'http://localhost:8080/api/column';

  constructor(private http: HttpClient) {
  }

  getColumns(): Observable<Column[]> {
    return this.http.get<Column[]>(`${this.baseUrl}`);
  }

  getColumnById(columnId: number): Observable<Column> {
    return this.http.get<Column>(`${this.baseUrl}` + `/` + columnId);
  }

  addColumn(column: Column): void { //TODO: zmienic
    this.http.post<Column>(`${this.baseUrl}`, {
      "userId": "1",
      "title": "Today'",
      "content": "Watch Netflix",
      "startDate": "2012-04-23",
      "endDate": "2012-04-23",
      "columnId": "1"
    }).subscribe();
  }
}
