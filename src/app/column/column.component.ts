import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../task.service';
import {Column} from '../column';
import {ColumnService} from '../column.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  columns: Column[];

  constructor(private columnService: ColumnService) {
    this.columns = [];
  }

  ngOnInit(): void {
    this.columnService.getColumns().subscribe((data: Column[]) => {
      console.log(data);
      this.columns = data;
    });
  }

}
