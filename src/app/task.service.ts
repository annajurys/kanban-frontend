import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from './task';
import {ColumnService} from './column.service';
import {Column} from './column';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8080/api/task';

  constructor(private http: HttpClient, private columnService: ColumnService) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}`);
  }

  getTaskById(userId: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}` + `/` + userId);
  }

  getTasksByUserId(userId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}` + `/` + userId);
  }

  getTasksByUserIdAndColumnId(userId: number, columnId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}` + `/column/` + userId + `/` + columnId);
  }

  addTask(title: string, content: string, startDate: string, endDate: string): Observable<Task> { //TODO: dodać usera i column
    return this.http.post<Task>(`${this.baseUrl}`, {
      "userId": "1",
      "title": title,
      "content": content,
      "startDate": new Date(startDate),
      "endDate": new Date(endDate),
      "columnId": "1"
    });
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}` + `/`  + task.taskId);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}` + `/`  + task.taskId, {
      "column": {
        "columnId": task.columnId,
      },
      "userId": task.userId,
      "title": task.title,
      "content": task.content,
      "startDate": task.startDate,
      "endDate": task.endDate,
    });
  }
}
