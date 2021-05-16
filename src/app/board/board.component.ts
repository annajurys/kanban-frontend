import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TaskService} from '../task.service';
import {UserService} from '../user.service';
import {Task} from '../task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(public taskService: TaskService, public userService: UserService) {
  }

  taskNumber = 0;
  updatedTask: Task = {} as Task;
  tasksTodo: Task[] = [];
  tasksDoing: Task[] = [];
  tasksDone: Task[] = [];

  value1 = '';
  value2 = '';

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksTodo = this.getTasksToDo();
    this.tasksDoing = this.getTasksDoing();
    this.tasksDone = this.getTasksDone();
  }

  getTasksToDo(): Task[] {
    this.taskService.getTasksByUserIdAndColumnId(1, 1).subscribe((data: Task[]) => {
      this.tasksTodo = data;
    });
    return this.tasksTodo;
  }

  getTasksDoing(): Task[] {
    this.taskService.getTasksByUserIdAndColumnId(1, 2).subscribe((data: Task[]) => {
      this.tasksDoing = data;
    });
    return this.tasksDoing;
  }

  getTasksDone(): Task[] {
    this.taskService.getTasksByUserIdAndColumnId(1, 3).subscribe((data: Task[]) => {
      this.tasksDone = data;
    });
    return this.tasksDone;
  }

  addTask(title: string, content: string, startDate: string, endDate: string): void {
    this.taskService.addTask(title, content, startDate, endDate).subscribe(
      (data) => this.getTasks()
    );
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(
      (data) => this.getTasks()
    );
  }

  editTask(task: Task): void {
    this.taskService.updateTask(task).subscribe();
  }

  drop(event: CdkDragDrop<Task[]>, list: string): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(event);
    this.updatedTask = event.container.data[event.currentIndex];
    this.updatedTask.columnId = +list;
    // this.updatedTask.kolejnosc = event.currentIndex
    this.editTask(this.updatedTask);
    // TODO: dodać jaka kolumna i kolejność
  }
}
