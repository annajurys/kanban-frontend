import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {TaskService} from '../task.service';
import { Task } from '../task';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks: Task[];
  name: string;

  constructor(private taskService: TaskService, private http: HttpClient) {
    this.tasks = [];
    this.name = '';
  }


  ngOnInit(): void {
    // this.taskService.getTasks().subscribe((data: Task[]) => {
    //   console.log(data);
    //   this.tasks = data;
    // });
  }

}
