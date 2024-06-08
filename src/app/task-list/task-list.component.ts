import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  newTaskTitle: string = '';
  tasks: { title: string }[] = [];


  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({ title: this.newTaskTitle });
      this.newTaskTitle = '';
    }
  }
}
