import { Component } from 'angular2/core';
import { Task } from './task.model';

// grandchild of parent; child of child
@Component({
  selector: 'task-display',
  inputs: ['task'],
  // toggles which list is shown, done or not done but both technically present
  template: `
  <div class="animateSelected">
  <input *ngIf="task.done" type="checkbox" checked (click)="toggleDone(false)"/>
  <input *ngIf="!task.done" type="checkbox" (click)="toggleDone(true)"/>
  <label>{{ task.description }}</label>
</div>
  `
})
export class TaskComponent {
  public task: Task;
  // sets state of bool to show which is toggled
  toggleDone(setState: boolean){
    this.task.done = setState;
  }
}
