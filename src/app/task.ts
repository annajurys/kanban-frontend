export class Task {
  taskId: number;
  userId: number;
  columnId: number;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;

  constructor() {
    this.taskId = 0;
    this.userId = 0;
    this.columnId = 0;
    this.title = '';
    this.content = '';
    this.startDate = new Date();
    this.endDate = new Date();
  }
}
