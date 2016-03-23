import { Component } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';

// grandchild of parent; child of child
@Component({
  selector: 'task-display',
  inputs: ['task'],
  template: `
    <h3>{{ task.description }}</h3>
  `
})
export class TaskComponent {
  public task: Task;
}
